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