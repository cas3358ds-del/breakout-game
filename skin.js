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
    },

    // --- Additional theme skins ported from index_skin.html ---
    cosmos: {
      label: '宇宙．星辰絮語',
      selectLabel: '宇宙．星辰絮語',
      cssSkin: '宇宙．星辰絮語',
      lifeIcon: '🛸',
      canvas: {
        base: [150, 120, 255],
        hi: [255, 255, 255],
        period: 2800,
        effects: {
          stars: {
            countScale: 1.1,
            twinkle: 0.85,
            drift: 0.009,
            sizeMin: 1.6,
            sizeMax: 3.2,
            glow: 2.0,
            brightness: 1.2
          }
        },
        bg: ['#0b0a20', '#0a0820', '#08071a']
      },
      desc: '藍紫星際霓虹：更大更亮的星點與光暈、緩慢漂移，2.8s 呼吸。'
    },

    aurora: {
      label: '冰雪．極光絲綢',
      selectLabel: '冰雪．極光絲綢',
      cssSkin: '冰雪．極光絲綢',
      lifeIcon: '🧊',
      canvas: {
        base: [170, 210, 255],
        hi: [255, 255, 255],
        period: 2200,
        effects: {
          snow: {
            countScale: 120,
            twinkle: true,
            sway: 1.0,
            speed: 0.28,
            speedMax: 0.72,
            gust: 0.12,
            sizeMin: 1.0,
            sizeMax: 2.5
          },
          shards: {
            count: 10,
            speed: 0.05,
            width: 1.2,
            alpha: 0.10,
            lenMin: 60,
            lenMax: 160,
            drift: 0.15
          },
          frost: { alpha: 0.10 },
          prism: { beams: 6, speed: 0.0004, alpha: 0.06, spread: 0.82, hueShift: 18 }
        },
        bg: ['#0b1626', '#0a1a2f', '#081628']
      },
      desc: '極光絲緞：冰藍呼吸＋輕雪＋低對比極光束；2.2s。'
    },

  solarFlare: {
    label: '烈陽．炙金幻焰',
    selectLabel: '烈陽．炙金幻焰',
    cssSkin: '烈陽．炙金幻焰',
    lifeIcon: '☀️',
        cssVars: { '--fxViz': '1', '--panelPattern': 'none' },
        canvas: {
          base: [255, 180, 80],
          hi: [255, 255, 240],
          period: 2000,
          effects: {
            flames: { count: 60, baseY: 0.82, sizeMin: 3, sizeMax: 8, speedMin: 0.25, speedMax: 0.6 },
            sun: {
              rotationPeriodMs: 60000,
              scalePeriodMs: 120000,
              sizeMin: 0.05,
              sizeMax: 0.3,
              centerY: 0.6,
              alpha: 0.4,
              scatter: { count: 24, widthNear: 0.02, widthFar: 0.15, alpha: 0.05 }
            }
          },
          bg: ['#3a1000', '#200600', '#120200']
        },
    desc: '炙金幻焰：金色呼吸＋底部金焰、淡淡散射光束與緩旋太陽背景，2s 週期。'
  },

  /**
   * 機械．齒輪騎士：蒸汽龐克齒輪與木板質感
   * 銅黃與黃銅色搭配深木背景，LED 以琥珀色呼吸。
   * 背景由多組齒輪轉動並伴有火花，HUD 具齒輪紋理。
   */
  steamKnight: {
    label: '機械．齒輪騎士',
    selectLabel: '機械．齒輪騎士',
    cssSkin: '機械．齒輪騎士',
    lifeIcon: '⚙️',
    cssVars: { '--fxViz': '1' },
    canvas: {
      base: [200, 140, 70],
      hi: [255, 230, 180],
      period: 2100,
      effects: {
        // 背景齒輪：5 顆齒輪鏈於畫面下方，60 秒一圈，固定嚙合且不重疊
        gears: {
          rotationMs: 60000,
          layout: [
            // 底部橫向齒輪鏈（部分超出畫布邊界）
            { x: -0.05,        y: 0.80, r: 0.35, teeth: 16, dir: 1 },
            { x: 0.3127273,    y: 0.80, r: 0.22, teeth: 10, dir: -1 },
            { x: 0.6754545,    y: 0.80, r: 0.35, teeth: 16, dir: 1 },
            { x: 1.0381818,    y: 0.80, r: 0.22, teeth: 10, dir: -1 },
            { x: 1.4009091,    y: 0.80, r: 0.35, teeth: 16, dir: 1 }
          ]
        }
      },
      bg: ['#3d2b1f', '#22160e', '#0e0b08']
    },
    desc: '銅黃齒輪搭深木板，齒輪鏈轉動；琥珀 LED 呼吸，工廠齒輪背景。'
  },

  bunnyCream: {
    label: '兔兔·奶油雲朵',
    selectLabel: '兔兔·奶油雲朵',
    cssSkin: '兔兔·奶油雲朵',
    lifeIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="#fff" stroke="#000" stroke-linejoin="round" stroke-linecap="round" stroke-width="3">
        <path d="M20 6c-5 0-8 4-8 9s3 9 8 9 8-4 8-9-3-9-8-9zm24 0c-5 0-8 4-8 9s3 9 8 9 8-4 8-9-3-9-8-9z"/>
        <path d="M12 34c0 11 9 20 20 20s20-9 20-20-9-20-20-20-20 9-20 20z"/>
      </g>
      <g fill="#000">
        <circle cx="26" cy="34" r="6"/>
        <circle cx="38" cy="34" r="6"/>
      </g>
      <g fill="#fff">
        <circle cx="24" cy="32" r="2"/>
        <circle cx="36" cy="32" r="2"/>
      </g>
    </svg>`,
    canvas: {
      base: [255, 240, 220],
      hi: [255, 255, 255],
      period: 3000,
      effects: {
        clouds: { count: 8, sizePx: 180, speed: 0.002, alpha: 0.25 },
        balloons: { intervalMs: 10000, lifeMs: 40000, colors: ['#ff8aa0','#ffd966','#9ad0f5','#cfa0ff','#ffe599'] },
        ledStrip: { hi: [255,255,255], lo: [255,240,200], period: 3000 }
      },
      bg: ['#aee1ff', '#fdfbff', '#ffffff']
    },
    desc: '童話兔兔：奶油 HUD、草莓蛋糕按鈕、柔黃白 LED，棉花雲與氣球飄浮，3s 週期。'
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
      if (fx && Object.keys(fx).length > 0) {
        if (typeof window.fxStart === 'function') window.fxStart(skin);
      } else {
        if (typeof window.fxStop === 'function') window.fxStop();
      }
    } catch(e) { console.warn('fx hook err', e); }

    if (typeof window.updateSkinUI === 'function') window.updateSkinUI(skin);
    if (typeof window.updateHUD === 'function') window.updateHUD();
  };
})();