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
      lifeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="cy-chip-core" x1="12%" y1="8%" x2="88%" y2="92%">
            <stop offset="0%" stop-color="#0aff9c" />
            <stop offset="55%" stop-color="#12d4a6" />
            <stop offset="100%" stop-color="#52ffe9" />
          </linearGradient>
          <linearGradient id="cy-chip-trace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,255,200,0.85)" />
            <stop offset="100%" stop-color="rgba(60,255,190,0.45)" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="54" height="54" rx="7" fill="#03140e" stroke="#00f2a0" stroke-width="2.4" />
        <rect x="14.5" y="14.5" width="35" height="35" rx="4.5" fill="url(#cy-chip-core)" stroke="#0efbc1" stroke-width="1.8" />
        <g fill="none" stroke="url(#cy-chip-trace)" stroke-width="2" stroke-linecap="round">
          <path d="M22 19h8v8l6 6v6" />
          <path d="M42 25h-8v8l-6 6v6" opacity="0.85" />
          <path d="M27 22v6l-6 6v6" opacity="0.7" />
          <path d="M37 22v6l6 6v6" opacity="0.7" />
        </g>
        <g fill="#00f2a0">
          <rect x="12" y="2.5" width="3" height="9" rx="1.2" />
          <rect x="20" y="2.5" width="3" height="9" rx="1.2" />
          <rect x="28" y="2.5" width="3" height="9" rx="1.2" />
          <rect x="36" y="2.5" width="3" height="9" rx="1.2" />
          <rect x="44" y="2.5" width="3" height="9" rx="1.2" />
          <rect x="12" y="52.5" width="3" height="9" rx="1.2" />
          <rect x="20" y="52.5" width="3" height="9" rx="1.2" />
          <rect x="28" y="52.5" width="3" height="9" rx="1.2" />
          <rect x="36" y="52.5" width="3" height="9" rx="1.2" />
          <rect x="44" y="52.5" width="3" height="9" rx="1.2" />
          <rect x="2.5" y="12" width="9" height="3" rx="1.2" />
          <rect x="2.5" y="20" width="9" height="3" rx="1.2" />
          <rect x="2.5" y="28" width="9" height="3" rx="1.2" />
          <rect x="2.5" y="36" width="9" height="3" rx="1.2" />
          <rect x="2.5" y="44" width="9" height="3" rx="1.2" />
          <rect x="52.5" y="12" width="9" height="3" rx="1.2" />
          <rect x="52.5" y="20" width="9" height="3" rx="1.2" />
          <rect x="52.5" y="28" width="9" height="3" rx="1.2" />
          <rect x="52.5" y="36" width="9" height="3" rx="1.2" />
          <rect x="52.5" y="44" width="9" height="3" rx="1.2" />
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
      lifeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="phantom-gem-rainbow" x1="12%" y1="8%" x2="88%" y2="92%">
            <stop offset="0%" stop-color="#ff5f8d" />
            <stop offset="18%" stop-color="#ff9a5f" />
            <stop offset="36%" stop-color="#ffd860" />
            <stop offset="54%" stop-color="#72f08f" />
            <stop offset="72%" stop-color="#62c8ff" />
            <stop offset="88%" stop-color="#8d7bff" />
            <stop offset="100%" stop-color="#d08dff" />
          </linearGradient>
          <radialGradient id="phantom-gem-glow" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.95)" />
            <stop offset="45%" stop-color="rgba(255,255,255,0.4)" />
            <stop offset="100%" stop-color="rgba(120,60,200,0.05)" />
          </radialGradient>
          <linearGradient id="phantom-gem-frame" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fdf4ff" />
            <stop offset="55%" stop-color="#9476ff" />
            <stop offset="100%" stop-color="#2c1455" />
          </linearGradient>
        </defs>
        <path d="M32 4L56 20L48 46L32 60L16 46L8 20Z" fill="url(#phantom-gem-frame)" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" />
        <path d="M32 8L51 21.5L44.5 43L32 54L19.5 43L13 21.5Z" fill="url(#phantom-gem-rainbow)" stroke="rgba(255,255,255,0.55)" stroke-width="1.4" />
        <path d="M32 8L39 22L25 22Z" fill="#ffffff" opacity="0.28" />
        <path d="M32 8L44.5 43L32 54Z" fill="url(#phantom-gem-glow)" opacity="0.95" />
        <path d="M32 8L19.5 43L32 54Z" fill="url(#phantom-gem-glow)" opacity="0.65" />
        <g fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.1">
          <path d="M32 8L25 22L19.5 43" />
          <path d="M32 8L39 22L44.5 43" />
          <path d="M25 22H39" />
          <path d="M19.5 43H44.5" />
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

    ironPulse: {
      label: '金屬．離子脈衝',
      selectLabel: '金屬．離子脈衝',
      cssSkin: '金屬．離子脈衝',
      lifeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="iron-core" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f4f7f9" />
            <stop offset="45%" stop-color="#b5c1ce" />
            <stop offset="100%" stop-color="#6b7683" />
          </linearGradient>
          <linearGradient id="iron-rim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10141a" />
            <stop offset="45%" stop-color="#4e5966" />
            <stop offset="100%" stop-color="#0a0d11" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="26" fill="url(#iron-rim)" stroke="#c6d0da" stroke-width="2" />
        <circle cx="32" cy="32" r="16" fill="url(#iron-core)" stroke="#f6fbff" stroke-width="1.8" />
        <g stroke="#8dd4ff" stroke-width="2.2" stroke-linecap="round">
          <path d="M32 12L36 20H28Z" />
          <path d="M52 32L44 36V28Z" />
          <path d="M32 52L28 44H36Z" />
          <path d="M12 32L20 28V36Z" />
        </g>
        <circle cx="32" cy="32" r="6" fill="#0a1926" stroke="#8dd4ff" stroke-width="2" />
      </svg>`,
      cssVars: { '--fxViz': '1', '--panelPattern': 'none' },
      canvas: {
        base: [160, 190, 210],
        hi: [255, 255, 255],
        period: 1800,
        effects: {
          pulse: { color: [120, 210, 255], thickness: 6, intervalMul: 1.35 },
          sparks: { count: 140 },
          gears: {
            rotationMs: 45000,
            layout: [
              { x: 0.15, y: 0.78, r: 0.22, teeth: 12, dir: 1 },
              { x: 0.40, y: 0.82, r: 0.30, teeth: 18, dir: -1 },
              { x: 0.67, y: 0.78, r: 0.22, teeth: 12, dir: 1 },
              { x: 0.92, y: 0.82, r: 0.30, teeth: 18, dir: -1 }
            ]
          },
          diffuse: { color: [110, 160, 220], alpha: 0.05 }
        },
        bg: ['#04070b', '#0d1116', '#151c24']
      },
      desc: '拉絲鋼與冰藍霓光：銀藍 LED 呼吸、雙列齒輪與微光離子霧，1.8s 節奏。'
    },

    grimRequiem: {
      label: '死神．幽冥鎌歌',
      selectLabel: '死神．幽冥鎌歌',
      cssSkin: '死神．幽冥鎌歌',
      lifeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="grim-scythe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f9f9fb" />
            <stop offset="45%" stop-color="#d6d7dd" />
            <stop offset="100%" stop-color="#6b6f7a" />
          </linearGradient>
          <radialGradient id="grim-glow" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stop-color="rgba(120,250,200,0.9)" />
            <stop offset="60%" stop-color="rgba(90,150,160,0.2)" />
            <stop offset="100%" stop-color="rgba(10,20,30,0)" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill="#05070a" stroke="#7af2d7" stroke-width="1.6" />
        <path d="M46 14c-10.2-1.8-18.6 2.6-23.8 10.5l-6.2 9.6 5 3.2 5.6-8.4c3-4.5 7.6-7.4 12.9-8.4l2.7 8.6 6.8-1.7z" fill="url(#grim-scythe)" stroke="#ecf4f8" stroke-width="1.4" />
        <path d="M28 30l-7.5 23.5" stroke="#423638" stroke-width="3.2" stroke-linecap="round" />
        <circle cx="32" cy="32" r="18" fill="url(#grim-glow)" />
        <circle cx="40" cy="24" r="3.4" fill="#0fffd8" opacity="0.9" />
      </svg>`,
      cssVars: { '--fxViz': '1' },
      canvas: {
        base: [100, 255, 200],
        hi: [255, 255, 255],
        period: 2400,
        effects: {
          embers: { count: 160, omega: -0.0016 },
          web: { radials: 9, alpha: 0.08, period: 26000, lineWidth: 1.6, color: '#6cf0c8' },
          slicer: { intervalMs: 3600, lifeMs: 720, widthMul: 0.42, color: 'rgba(160,255,230,0.35)' },
          ruins: { layers: 4, haze: 0.22 }
        },
        bg: ['#010203', '#070b12', '#0e1220']
      },
      desc: '深青冥界：幽光 LED 呼吸、鎌影裂隙與飄移靈火，2.4s 緩步。'
    },

    sacredAurora: {
      label: '神聖．黎明聖芒',
      selectLabel: '神聖．黎明聖芒',
      cssSkin: '神聖．黎明聖芒',
      lifeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img">
        <defs>
          <radialGradient id="holy-core" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="55%" stop-color="#ffe8a6" />
            <stop offset="100%" stop-color="#f5c76a" />
          </radialGradient>
          <linearGradient id="holy-ring" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fff7d6" />
            <stop offset="100%" stop-color="#e0a03a" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="24" fill="url(#holy-ring)" stroke="#fff6d6" stroke-width="2" />
        <path d="M32 10L36.5 24.5L52 24.5L39.5 33.5L44 48L32 39.5L20 48L24.5 33.5L12 24.5L27.5 24.5Z" fill="url(#holy-core)" stroke="rgba(255,255,255,0.85)" stroke-width="1.6" />
        <circle cx="32" cy="32" r="6" fill="#fffef9" />
      </svg>`,
      cssVars: { '--fxViz': '1', '--panelPattern': 'none' },
      canvas: {
        base: [255, 214, 140],
        hi: [255, 255, 255],
        period: 2100,
        effects: {
          stars: { countScale: 1.3, twinkle: true, sizeMin: 1.4, sizeMax: 3.8, brightness: 1.3 },
          hexagram: { radiusMul: 0.46, rotationPeriodMs: 28000, color: '#ffe4a8', strokePx: 2.6 },
          scriptRing: { radiusMul: 0.60, rotationPeriodMs: 36000, strokePx: 2, strokeColor: '#fff5d8', alpha: 0.75 },
          pulse: { color: [255, 215, 160], thickness: 5, intervalMul: 1.1 },
          diffuse: { color: [255, 210, 160], alpha: 0.06 }
        },
        bg: ['#130e05', '#24190b', '#3b220f']
      },
      desc: '晨曦金輝：暖白聖徽 LED、旋轉聖環與星芒緞幕，2.1s 呼吸。'
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
