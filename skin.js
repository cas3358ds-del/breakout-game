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
    
    /**
     * 高質感科幻風「科技．賽博格綠」
     *
     * 此款 skin 採用深邃黑綠背景搭配明亮的賽博格綠光暈與電路紋理，營造出未來感十足的科技氛圍。
     * canvas.base 決定了實體磚塊和 HUD 呼吸動畫的主色調，hi 為高光顏色，period 為呼吸週期。
     * 背景電路紋理改由遊戲畫布繪製，bg 可指定畫布底色漸層。
     */
    cyborgGreen: {
      label: '科技．賽博格綠',
      selectLabel: '科技．賽博格綠',
      cssSkin: '科技．賽博格綠',
      // 取消外層特效並停用 panelPattern
      cssVars: {
        '--fxViz': '0',
        '--panelPattern': 'none'
      },
      canvas: {
        // 主色調：亮綠帶一點青（R,G,B）
        base: [0, 230, 150],
        // 高光色採用純白，使閃耀部分乾淨透亮
        hi: [255, 255, 255],
        // 呼吸週期稍長，使效果柔和不刺眼
        period: 2400,
        // 移除原本的 prism 特效，改由遊戲畫布自行呈現電路網絡
        effects: {},
        // 畫布背景以深綠與黑色漸層構成
        bg: ['#02190f', '#00150a', '#00140a']
      },
      desc: '賽博格綠．電路網絡：深黑綠底搭配亮綠光暈與電路紋理，2.4s 呼吸。'
    },
    technoPhantom: {
      label: '科技．魅影幻彩',
      selectLabel: '科技．魅影幻彩',
      cssSkin: '科技．魅影幻彩',
      cssVars: { '--fxViz': '0', '--panelPattern': 'none' },
      canvas: {
        base: [120, 80, 255],
        hi: [255, 255, 255],
        period: 2600,
        effects: {},
        bg: ['#140022', '#0a0016', '#000000']
      },
      desc: '紫黑幻彩：朦朧紫黑底與七彩光束，雙色呼吸 LED，2.6s 循環。'
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