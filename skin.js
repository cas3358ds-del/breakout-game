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
      lifeIcon: `<svg viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="cy-chip-housing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#002b1f" />
            <stop offset="45%" stop-color="#004f34" />
            <stop offset="100%" stop-color="#001d16" />
          </linearGradient>
          <linearGradient id="cy-chip-core" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00ffd0" />
            <stop offset="100%" stop-color="#00a87a" />
          </linearGradient>
          <linearGradient id="cy-chip-circuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,255,210,0.85)" />
            <stop offset="100%" stop-color="rgba(0,190,140,0.65)" />
          </linearGradient>
        </defs>
        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="6" y="6" width="52" height="52" rx="10" fill="url(#cy-chip-housing)" stroke="rgba(0,255,200,0.4)" stroke-width="2" />
          <rect x="14" y="14" width="36" height="36" rx="6" fill="rgba(0,40,28,0.65)" stroke="rgba(0,255,210,0.45)" stroke-width="1.5" />
          <rect x="20" y="20" width="24" height="24" rx="4" fill="url(#cy-chip-core)" stroke="rgba(0,90,70,0.55)" stroke-width="1.4" />
          <path d="M20 34h-6c-2 0-3-1-3-3v-8" stroke="url(#cy-chip-circuit)" stroke-width="1.6" />
          <path d="M44 30h6c2 0 3 1 3 3v8" stroke="url(#cy-chip-circuit)" stroke-width="1.6" />
          <path d="M32 20v-6c0-2 1-3 3-3h8" stroke="url(#cy-chip-circuit)" stroke-width="1.6" />
          <path d="M32 44v6c0 2-1 3-3 3h-8" stroke="url(#cy-chip-circuit)" stroke-width="1.6" />
          <g fill="#00d4a3" stroke="rgba(0,40,32,0.55)" stroke-width="1">
            <rect x="18" y="4" width="4" height="8" rx="1.5" />
            <rect x="28" y="4" width="4" height="8" rx="1.5" />
            <rect x="38" y="4" width="4" height="8" rx="1.5" />
            <rect x="18" y="52" width="4" height="8" rx="1.5" />
            <rect x="28" y="52" width="4" height="8" rx="1.5" />
            <rect x="38" y="52" width="4" height="8" rx="1.5" />
            <rect x="4" y="18" width="8" height="4" rx="1.5" />
            <rect x="4" y="28" width="8" height="4" rx="1.5" />
            <rect x="4" y="38" width="8" height="4" rx="1.5" />
            <rect x="52" y="18" width="8" height="4" rx="1.5" />
            <rect x="52" y="28" width="8" height="4" rx="1.5" />
            <rect x="52" y="38" width="8" height="4" rx="1.5" />
          </g>
        </g>
      </svg>`,
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
      lifeIcon: `<svg viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <radialGradient id="phantom-glass-core" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
            <stop offset="45%" stop-color="#a66bff" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#25103f" stop-opacity="1" />
          </radialGradient>
          <linearGradient id="phantom-glass-facet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f6ff" stop-opacity="0.9" />
            <stop offset="50%" stop-color="#ff4de1" stop-opacity="0.85" />
            <stop offset="100%" stop-color="#7a5dff" stop-opacity="0.95" />
          </linearGradient>
          <linearGradient id="phantom-glass-frame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#32124b" />
            <stop offset="100%" stop-color="#110820" />
          </linearGradient>
        </defs>
        <g fill="none" stroke-linejoin="round">
          <path d="M12 8h40l8 12v24l-8 12H12l-8-12V20z" fill="url(#phantom-glass-frame)" stroke="rgba(255,255,255,0.2)" stroke-width="1.6" />
          <path d="M16 14h32l6 10v16l-6 10H16l-6-10V24z" fill="url(#phantom-glass-core)" stroke="rgba(180,150,255,0.45)" stroke-width="1.4" />
          <path d="M32 14L44 24 34 50 20 38z" fill="url(#phantom-glass-facet)" stroke="rgba(30,10,40,0.45)" stroke-width="1.2" />
          <path d="M18 22l10 8-6 16-8-10z" fill="rgba(0,240,255,0.28)" stroke="rgba(180,255,255,0.4)" stroke-width="1" />
          <path d="M42 22l10 14-6 10-14 4z" fill="rgba(255,90,210,0.3)" stroke="rgba(255,180,255,0.45)" stroke-width="1" />
          <path d="M24 18l16 28" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
          <path d="M20 28h24" stroke="rgba(255,255,255,0.25)" stroke-width="1.1" />
        </g>
      </svg>`,
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
      cssVars: { '--fxViz': '1' },
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
      cssVars: { '--fxViz': '1' },
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
  infiniteCastle: {
    label: '和風．無限之城',
    selectLabel: '和風．無限之城',
    cssSkin: '和風．無限之城',
    lifeIcon: `<svg viewBox="0 0 64 64" aria-hidden="true" role="img">
      <defs>
        <linearGradient id="katana-castle-blade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdfcf7" />
          <stop offset="52%" stop-color="#d9e4ef" />
          <stop offset="100%" stop-color="#f5efe3" />
        </linearGradient>
        <linearGradient id="katana-castle-edge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.0)" />
          <stop offset="35%" stop-color="rgba(255,255,255,0.55)" />
          <stop offset="80%" stop-color="rgba(255,255,255,0.0)" />
        </linearGradient>
        <linearGradient id="katana-castle-wrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3a1409" />
          <stop offset="50%" stop-color="#7b2d16" />
          <stop offset="100%" stop-color="#2b0c06" />
        </linearGradient>
      </defs>
      <g transform="rotate(-40 32 32)">
        <path fill="#1f0b05" opacity="0.32" d="M24.6 8.6L38.8 33.6L34.4 34.8C30.7 23.4 25 13 18.4 4.6Z" />
        <path fill="url(#katana-castle-blade)" d="M33.4 7.2L48.4 36L42.8 37.4L33.1 17.6L26 53.8L19.8 52.8Z" />
        <path fill="url(#katana-castle-edge)" d="M35.6 9.2L47.6 33.8L44.8 34.6C41.9 26.2 37.8 18.3 33.4 11.8L27.2 46.8L24.2 46.4Z" opacity="0.7" />
        <path fill="#0d0502" d="M21 40.5h22.4c1.8 0 3.4 1.1 4.1 2.7l.4 1c.8 2-0.2 4.2-2.2 5.1-2.3 1-4.9 1.6-7.6 1.6H26.4c-2.4 0-4.7-.5-6.8-1.5-2-.9-2.9-3.3-1.9-5.3l.6-1.1c.8-1.6 2.4-2.5 4.1-2.5z" />
        <path fill="#2a150c" d="M23.4 40.4h17.2c2 0 3.6 1.6 3.6 3.6v1.5c0 3-2.4 5.4-5.4 5.4H25.2c-3 0-5.4-2.4-5.4-5.4V44c0-2 1.6-3.6 3.6-3.6z" />
        <path fill="rgba(255,230,180,0.18)" d="M24.4 41.2h15.2c1.6 0 2.8 1.3 2.8 2.8v1c0 2.4-1.9 4.3-4.3 4.3H25.9c-2.4 0-4.3-1.9-4.3-4.3V44c0-1.6 1.3-2.8 2.8-2.8z" />
        <rect x="23.8" y="38" width="16.4" height="4.2" rx="2.1" fill="#120603" opacity="0.82" />
        <rect x="25.6" y="46.6" width="13.2" height="10.2" rx="3.2" fill="url(#katana-castle-wrap)" />
        <rect x="27.2" y="48.8" width="10" height="6" rx="2.4" fill="rgba(255,220,170,0.26)" />
        <rect x="28" y="49.8" width="1.6" height="4.2" rx="0.8" fill="#2b0c06" />
        <rect x="31" y="49.8" width="1.6" height="4.2" rx="0.8" fill="#2b0c06" />
        <rect x="34" y="49.8" width="1.6" height="4.2" rx="0.8" fill="#2b0c06" />
        <rect x="29.6" y="55.6" width="4.8" height="3.4" rx="1.2" fill="#d8b163" />
        <rect x="30.6" y="56.4" width="2.8" height="1.6" rx="0.8" fill="#6b3d16" />
      </g>
    </svg>`,
    canvas: {
      base: [210, 160, 70],
      hi: [255, 235, 150],
      period: 2400,
      effects: {},
      bg: null
    }
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
