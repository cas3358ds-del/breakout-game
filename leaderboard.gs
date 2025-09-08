const SHEET_NAME = 'Leaderboard';
const MAX_ROWS = 20;

function doPost(e) {
  const data  = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);

  sheet.appendRow([
    new Date(), data.name, data.score, data.lives, data.catches,
    data.powerUps, data.powerDowns, data.enemiesKilled,
    data.bossKilled, data.fastestDeath, data.longestSurvival
  ]);

  sheet.sort({column: 3, ascending: false});
  const lastRow = sheet.getLastRow();
  if (lastRow > MAX_ROWS + 1) {
    sheet.deleteRows(MAX_ROWS + 2, lastRow - (MAX_ROWS + 1));
  }
  // Apps Script automatically sets CORS headers for web apps.
  return ContentService.createTextOutput('OK');
}

function doGet(e) {
  const sheet    = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
  const rowCount = sheet.getLastRow() - 1;
  const data     = rowCount > 0
      ? sheet.getRange(2, 1, Math.min(rowCount, MAX_ROWS), sheet.getLastColumn()).getValues()
      : [];
  return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
}
