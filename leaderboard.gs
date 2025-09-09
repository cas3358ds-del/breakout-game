const SHEET_NAME = 'Leaderboard';
const MAX_ROWS = 20;  // 只顯示前 20 名，不刪除資料

function setCors(output) {
  // Apps Script 的 TextOutput 沒有 setHeader，需一次設定所有標頭
  output.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
  });
  return output;
}

function doPost(e) {
  try {
    if (!e || !e.postData) throw new Error('No post data');

    // 兼容 text/plain、application/json、x-www-form-urlencoded
    const type = (e.postData.type || '').toLowerCase();
    const raw = e.postData.contents || '';
    let data;

    if (type.includes('application/json')) {
      data = JSON.parse(raw);
    } else if (type.includes('application/x-www-form-urlencoded')) {
      data = Object.fromEntries(
        raw.split('&').map(p => {
          const [k, v=''] = p.split('=');
          return [decodeURIComponent(k), decodeURIComponent(v.replace(/\+/g,' '))];
        })
      );
    } else {
      // text/plain 當 JSON 字串嘗試解析
      try { data = JSON.parse(raw); }
      catch (_) { throw new Error('Unsupported payload, expect JSON string'); }
    }

    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sheet not found: ' + SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.name || '',
      Number(data.score || 0),
      Number(data.lives || 0),
      Number(data.catches || 0),
      Number(data.powerUps || 0),
      Number(data.powerDowns || 0),
      Number(data.enemiesKilled || 0),
      Number(data.bossKilled || 0),
      Number(data.fastestDeath || 0),
      Number(data.longestSurvival || 0)
    ]);

    const out = ContentService.createTextOutput('OK')
      .setMimeType(ContentService.MimeType.TEXT);
    return setCors(out);

  } catch (err) {
    const out = ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
    return setCors(out);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sheet not found: ' + SHEET_NAME);

    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();
    if (lastRow < 2) {
      return setCors(ContentService.createTextOutput('[]')
        .setMimeType(ContentService.MimeType.JSON));
    }

    const values = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();
    values.sort((a, b) => Number(b[2] || 0) - Number(a[2] || 0));
    const top = values.slice(0, MAX_ROWS).map(r => ({
      timestamp: r[0],
      name: r[1],
      score: Number(r[2] || 0),
      lives: Number(r[3] || 0),
      catches: Number(r[4] || 0),
      powerUps: Number(r[5] || 0),
      powerDowns: Number(r[6] || 0),
      enemiesKilled: Number(r[7] || 0),
      bossKilled: Number(r[8] || 0),
      fastestDeath: Number(r[9] || 0),
      longestSurvival: Number(r[10] || 0)
    }));

    const out = ContentService.createTextOutput(JSON.stringify(top))
      .setMimeType(ContentService.MimeType.JSON);
    return setCors(out);

  } catch (err) {
    const out = ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
    return setCors(out);
  }
}
