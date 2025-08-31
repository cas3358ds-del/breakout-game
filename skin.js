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
      canvas: {
        base: [160, 220, 255],
        hi: [255, 255, 255],
        period: 2200,
        effects: {
          rainbow: true,
          prism: { beams: 6, speed: 0.0005, alpha: 0.10, spread: 0.85, hueShift: 40 }
        },
        bg: ['#0b0f2a', '#0a0e26', '#070a18']
      },
      desc: '全息 HUD：彩虹高光邊＋Holo Prism 光束（低對比）、2.2s 呼吸。'
    }
  };

  // 對外暴露
  window.SKINS = SKINS;

  // 套用 skin（index.html 會呼叫）
  window.applySkin = function applySkin(key) {
    const skin = SKINS[key] || SKINS.classic;
    window.currentSkin = skin;
    if (skin.cssSkin) document.body.dataset.skin = skin.cssSkin;
    try { localStorage.setItem('selected_skin', key); 
    try {
      if (window.currentSkin && window.currentSkin.canvas && window.currentSkin.canvas.effects && (window.currentSkin.canvas.effects.prism || window.currentSkin.canvas.effects.rainbow)) {
        if (typeof window.fxStart === 'function') window.fxStart(window.currentSkin);
      } else {
        if (typeof window.fxStop === 'function') window.fxStop();
      }
    } catch(e) { console.warn('fx hook err', e); }
  } catch (e) {}
    if (typeof window.updateSkinUI === 'function') window.updateSkinUI(skin);
  };
})();