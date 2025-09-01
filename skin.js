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

    bunny: {
      label: '兔兔．奶油雲朵',
      selectLabel: '兔兔．奶油雲朵',
      cssSkin: '兔兔．奶油雲朵',
      canvas: {
        base: [255, 244, 234],
        hi: [255, 217, 230],
        period: 3200,
        effects: {
          clouds: { count: 7, sizePx: 300, speed: 0.003, alpha: 0.20, lifeMs: 30000, fadeInMs: 6000, fadeOutMs: 8000 },
          stars: { count: 38, brightness: 0.85 },
          ledStrip: { period: 3200, hi: [255, 182, 193], lo: [255, 244, 234], segment: 28 },
          bgVignette: true
        },
        bg: ['#0B1430', '#0D1E4A', '#1B4C8E']
      },
      desc: '粉嫩清新：奶油雲層霧散、星點柔和；LED 粉白→蜜桃 3.2s 呼吸。'
    },

    flame: {
      label: '烈焰．星火風暴',
      selectLabel: '烈焰．星火風暴',
      cssSkin: '烈焰．星火風暴',
      canvas: {
        base: [255, 150, 110],
        hi: [255, 250, 240],
        period: 2100,
        effects: {
          embers: { mode: 'vortex', count: 360, sizeMin: 1.0, sizeMax: 2.4, tail: 7, twinkle: true, omega: 0.0020, center: [0.5, 0.50], noise: 0.12 }
        },
        bg: ['#150807', '#0d0504', '#080404']
      },
      desc: '星火旋渦：火焰粒子繞中央龍捲；生命改為🔥，UI 燃邊微閃。2.1s。'
    },

    knight: {
      label: '騎士．白銀劍光',
      selectLabel: '騎士．白銀劍光',
      cssSkin: '騎士．白銀劍光',
      canvas: {
        base: [176, 196, 222],
        hi: [235, 238, 245],
        period: 2300,
        effects: {
          pulse: { rings: 5, thickness: 5, strength: 0.22, color: [235, 238, 245], speedFactor: 1.0, intervalMul: 1.0, microRipples: 2, dash: true, ringDelayMs: 0 },
          shards: { count: 9, alpha: 0.12, speed: 0.06, width: 1.2, lenMin: 70, lenMax: 180, drift: 0.12, angleDeg: -18 }
        },
        bg: ['#0D0D0F', '#0B0B0D', '#0A0A0C']
      },
      desc: '高貴正義：冷白漸層＋銀光流動；Pulse 白光規律閃動，Shards 劍光稀疏。2.3s。'
    },

    magic: {
      label: '魔法．金耀日蝕',
      selectLabel: '魔法．金耀日蝕',
      cssSkin: '魔法．金耀日蝕',
      canvas: {
        base: [255, 228, 168],
        hi: [255, 210, 122],
        period: 3500,
        effects: {
          hexagram: { strokePx: 2.8, color: '#FFD27A', rotationPeriodMs: 24000, fadeUpMs: 9000, fadeDownMs: 3000, radiusMul: 0.44 },
          scriptRing: { strokePx: 1.6, strokeColor: '#FFD27A', color: '#FFD27A', breathMs: 6000, rotationPeriodMs: 24000, radiusMul: 0.58, alpha: 0.72, fontPx: 12, count: 84, ticks: 42 },
          sparks: { count: 10, size: 1.4 }
        },
        bg: ['#0E0C08', '#0B0A07', '#0A0906']
      },
      desc: '日蝕聖環：六芒星與咒文圈交織，LED 金絲亮點（3.5s）。'
    },

    demon: {
      label: '魔王．終焉寂滅',
      selectLabel: '魔王．終焉寂滅',
      cssSkin: '魔王．終焉寂滅',
      canvas: {
        base: [14, 14, 14],
        hi: [255, 69, 0],
        period: 3000,
        effects: {
          ruins: { layers: 3, haze: 0.22 },
          nuke: { intervalMs: 13000, flashMs: 220 },
          slicer: { widthMul: 0.333, intervalMs: 3000, burstEveryMs: 30000, burstIntervalMs: 200, lifeMs: 500, color: 'rgba(190,0,30,0.35)', edge: 'rgba(255,120,140,0.55)' },
          diffuse: { cycleMs: 40000, expandMs: 30000, retractMs: 10000 },
          ledStrip: { hi: [255,69,0], lo: [96,96,96], period: 3200, segment: 26, hitFlash: true }
        },
        bg: ['#0E0E0E', '#1A1A1A', '#0E0E0E']
      },
      desc: '廢墟鐵影＋殘光：遠景廢墟陰影、偶爾核爆殘光；LED 灰→橘，擊中瞬白閃。'
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
  };
})();