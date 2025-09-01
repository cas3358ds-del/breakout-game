(() => {
  const SKINS = {
    classic: {
      label: '經典風格',
      selectLabel: '經典．冷藍玻璃',
      cssSkin: '經典風格',
      canvas: {
        base: [92, 136, 255],
        hi: [255, 255, 255],
        period: 2000,
        effects: {},
        bg: null
      },
      desc: 'LED：三側一致深藍，右側鏡像，2s 呼吸。'
    },
    s2: {
      label: '霓虹．魅影幻彩',
      selectLabel: '霓虹．魅影幻彩',
      cssSkin: '霓虹．魅影幻彩',
      cssVars: { '--panelPattern': 'none', '--fxViz': '0' },
      canvas: {
        base: [160, 220, 255],
        hi: [255, 255, 255],
        period: 2200,
        effects: {},
        bg: ['#0b0f2a', '#0a0e26', '#070a18']
      },
      desc: '全息 HUD：彩虹高光邊（低對比），2.2s 呼吸。'
    }
    ,
    /**
     * 高質感科幻風「科技．賽博格綠」
     *
     * 此款 skin 採用深邃黑綠背景搭配明亮的賽博格綠光暈與電路紋理，營造出未來感十足的科技氛圍。
     * canvas.base 決定了實體磚塊和 HUD 呼吸動畫的主色調，hi 為高光顏色，period 為呼吸週期。
     * effects.prism 啟用輕微的光暈折射效果，以增添質感。bg 可指定畫布底色漸層。
     */
    cyborgGreen: {
      label: '科技．賽博格綠',
      selectLabel: '科技．賽博格綠',
      cssSkin: '科技．賽博格綠',
      // 讓 fxViz 預設啟用，並指定賽博綠的 panelPattern，以防被套用時覆蓋為 none
      cssVars: {
        '--fxViz': '1',
        '--panelPattern': 'conic-gradient(from 0deg at 60% 40%, rgba(30,255,150,.08), rgba(10,100,50,.06), rgba(30,150,100,.06))'
      },
      canvas: {
        // 主色調：亮綠帶一點青（R,G,B）
        base: [0, 230, 150],
        // 高光色採用純白，使閃耀部分乾淨透亮
        hi: [255, 255, 255],
        // 呼吸週期稍長，使效果柔和不刺眼
        period: 2400,
        // 使用 prism 效果，寬度與強度調整為輕柔閃爍
        effects: {
          prism: { width: 1.8, amount: 0.6, weight: 0.8 }
        },
        // 畫布背景以深綠與黑色漸層構成
        bg: ['#02190f', '#00150a', '#00140a']
      },
      desc: '賽博格綠．電路網絡：深黑綠底搭配亮綠光暈與電路紋理，2.4s 呼吸。'
    }
  };

  // 對外暴露
  window.SKINS = SKINS;

  // 套用 skin（index.html 會呼叫）
  window.applySkin = function applySkin(key) {
    const skin = SKINS[key] || SKINS.classic;
    window.currentSkin = skin;
    if (skin.cssSkin) document.body.dataset.skin = skin.cssSkin;
    try { localStorage.setItem('selected_skin', key); } catch (e) {}

    // Push per‑skin CSS variables onto the stage so they override any rule-based defaults
    try {
      const stage = document.querySelector('.stage');
      if (stage) {
        // Reset keys we control
        stage.style.setProperty('--panelPattern', (skin.cssVars && skin.cssVars['--panelPattern']) || 'none');
        stage.style.setProperty('--fxViz', (skin.cssVars && skin.cssVars['--fxViz']) || '0');
      }
    } catch (e) { console.warn('vars hook err', e); }

    // Start/stop FX renderer according to the skin definition
    try {
      const fx = skin.canvas && skin.canvas.effects;
      if (fx && (fx.prism || fx.rainbow)) {
        if (typeof window.fxStart === 'function') window.fxStart(skin);
      } else {
        if (typeof window.fxStop === 'function') window.fxStop();
      }
    } catch(e) { console.warn('fx hook err', e); }

    if (typeof window.updateSkinUI === 'function') window.updateSkinUI(skin);
  };
})();