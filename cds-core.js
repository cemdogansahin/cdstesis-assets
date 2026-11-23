/**
 * CDS Tesis Yönetimi ve Enerji Danışmanlığı (cdstesis.com.tr)
 * Central Core Runtime & Dynamic Widgets (CDN Asset)
 * Author: Cem Doğan Şahin
 * Version: 2.0.0 (AdSense Clean & Verified Architecture)
 */

(function () {
  'use strict';

  // 1. Synchronous CSS Injector (Zero-latency styling)
  function injectStyles() {
    var cssId = 'cds-core-css';
    if (!document.getElementById(cssId)) {
      var style = document.createElement('style');
      style.id = cssId;
      style.textContent = `
        .cds-widget-wrap, .cds-widget-wrap * { box-sizing: border-box; }
        
        .cds-footer-sub-card {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #0f2b48 0%, #1f4e79 100%);
          color: #ffffff;
          border-radius: 12px;
          padding: 26px 22px;
          margin: 20px auto 25px auto;
          max-width: 760px;
          box-shadow: 0 8px 24px rgba(15, 43, 72, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.12);
          text-align: left;
        }

        .cds-sub-badge {
          display: inline-block;
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.35);
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .cds-footer-sub-card h3 {
          margin: 0 0 6px 0;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 700;
          color: #ffffff;
        }

        .cds-footer-sub-card p.cds-sub-desc {
          margin: 0 0 16px 0;
          font-size: 13.5px;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .cds-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .cds-cta-btn-primary {
          background: #f59e0b;
          color: #0f2b48 !important;
          font-weight: 700;
          font-size: 13.5px;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .cds-cta-btn-primary:hover {
          background: #fbbf24;
          transform: translateY(-1px);
        }

        .cds-cta-btn-secondary {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.28);
          font-weight: 600;
          font-size: 13.5px;
          padding: 10px 16px;
          border-radius: 6px;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .cds-cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.22);
          transform: translateY(-1px);
        }

        @media (max-width: 639px) {
          .cds-cta-actions { flex-direction: column; }
          .cds-cta-btn-primary, .cds-cta-btn-secondary { width: 100%; justify-content: center; }
        }

        /* Global UI Template Fixes */
        body.page-view .widget.Blog .post-title,
        body.page-view .post-title,
        body.page-view .widget.Blog .post-header-line-1,
        body.static_page .widget.Blog .post-title,
        body.static_page .widget.Blog .post-header-line-1 {
          display: none !important;
        }
        .bg-photo, .bg-photo-overlay {
          background-image: none !important;
        }
        .widget.Label, #Label1 {
          display: none !important;
        }
        .widget.PopularPosts {
          margin: 30px auto;
          max-width: 900px;
          padding: 24px;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
        }
        .widget.PopularPosts h3.title {
          font-size: 18px;
          font-weight: 700;
          color: #1f4e79;
          border-bottom: 2px solid #f59e0b;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }
        .widget.PopularPosts ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .widget.PopularPosts li {
          padding-bottom: 14px;
          border-bottom: 1px solid #f1f5f9;
        }
        .widget.PopularPosts li:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .widget.PopularPosts .item-title a {
          color: #0f172a;
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .widget.PopularPosts .item-title a:hover {
          color: #1f4e79;
        }
        .widget.PopularPosts .item-snippet {
          font-size: 13px;
          color: #64748b;
          margin-top: 5px;
          line-height: 1.5;
        }

        /* Live Energy & Commodity Ticker Tape (Financial TV Marquee) */
        .cds-ticker-tape {
          box-sizing: border-box;
          max-width: 1040px;
          margin: 0 auto 18px auto;
          background: #091728;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(9, 23, 40, 0.12);
          border: 1px solid #1e3a5f;
          height: 40px;
          min-height: 40px;
          max-height: 40px;
          display: flex;
          align-items: center;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          user-select: none;
        }

        .cds-ticker-badge {
          background: #040c17;
          color: #38bdf8;
          height: 100%;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          flex-shrink: 0;
          z-index: 4;
          border-right: 1px solid rgba(56, 189, 248, 0.2);
        }

        .cds-ticker-dot {
          width: 8px;
          height: 8px;
          background-color: #ef4444;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #ef4444;
          animation: cdsDotPulse 1.8s infinite ease-in-out;
        }

        @keyframes cdsDotPulse {
          0% { transform: scale(0.9); opacity: 0.7; box-shadow: 0 0 4px #ef4444; }
          50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 10px #ef4444; }
          100% { transform: scale(0.9); opacity: 0.7; box-shadow: 0 0 4px #ef4444; }
        }

        .cds-ticker-view {
          flex: 1;
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          mask-image: linear-gradient(to right, transparent 0%, black 16px, black calc(100% - 16px), transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 16px, black calc(100% - 16px), transparent 100%);
        }

        .cds-ticker-track {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: cdsMarquee 45s linear infinite;
        }

        .cds-ticker-tape:hover .cds-ticker-track,
        .cds-ticker-tape:focus-within .cds-ticker-track {
          animation-play-state: paused;
        }

        @keyframes cdsMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .cds-ticker-group {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cds-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0 16px;
          font-size: 12px;
          line-height: 1;
          color: #f1f5f9;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cds-ticker-item .t-icon {
          font-size: 13px;
          margin-right: 1px;
        }

        .cds-ticker-item .t-lbl {
          color: #94a3b8;
          font-weight: 700;
          letter-spacing: 0.3px;
          font-size: 11px;
        }

        .cds-ticker-item .t-val {
          color: #ffffff;
          font-weight: 800;
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }

        .cds-ticker-item .t-up {
          color: #4ade80;
          background: rgba(74, 222, 128, 0.15);
          padding: 2px 5px;
          border-radius: 3px;
          font-size: 10.5px;
          font-weight: 700;
        }

        .cds-ticker-item .t-down {
          color: #f87171;
          background: rgba(248, 113, 113, 0.15);
          padding: 2px 5px;
          border-radius: 3px;
          font-size: 10.5px;
          font-weight: 700;
        }

        .cds-ticker-item .t-tag {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.15);
          padding: 2px 5px;
          border-radius: 3px;
          font-size: 10.5px;
          font-weight: 700;
        }

        .cds-ticker-link {
          background: #040c17;
          color: #38bdf8;
          height: 100%;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          flex-shrink: 0;
          z-index: 4;
          border-left: 1px solid rgba(56, 189, 248, 0.2);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cds-ticker-link:hover {
          background: #0c2035;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .cds-ticker-tape {
            margin: 0 0 14px 0;
            border-radius: 0;
            border-left: none;
            border-right: none;
            height: 36px;
            min-height: 36px;
            max-height: 36px;
          }
          .cds-ticker-badge {
            padding: 0 10px;
            font-size: 10px;
          }
          .cds-ticker-link {
            display: none;
          }
          .cds-ticker-item {
            padding: 0 12px;
            font-size: 11.5px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // 2. DOM Initialization (Clean, AdSense-Safe, Zero Fake Forms & Zero Floating Overlay)
  function initCdsWidgets() {
    injectStyles();

    // A. Mount Clean Corporate Engineering Resource Card (Replaces old localStorage-only form)
    var footerMount = document.getElementById('cds-footer-sub-card-mount');
    if (footerMount && !document.getElementById('cdsFooterResourceCard')) {
      footerMount.innerHTML = `
        <div class="cds-footer-sub-card" id="cdsFooterResourceCard">
          <div class="cds-sub-badge">CDS Tesis Yönetimi &amp; Enerji Danışmanlığı</div>
          <h3>Mühendislik Rehberleri ve Canlı Enerji Araçları</h3>
          <p class="cds-sub-desc">
            İzmir ve Türkiye genelindeki site yönetimleri, apartman yöneticileri ve kat malikleri için hazırlanan tüm teknik rehberlere, interaktif tasarruf simülatörlerine ve güncel enerji tarifelerine doğrudan ulaşabilirsiniz.
          </p>
          <div class="cds-cta-actions">
            <a href="/p/rehberler.html" class="cds-cta-btn-primary">📚 Tüm Mühendislik Rehberleri</a>
            <a href="/p/izmir-turkiye-enerji-fiyat-gostergesi.html" class="cds-cta-btn-secondary">📊 Canlı Enerji Fiyatları</a>
            <a href="/p/iletisim-ve-ucretsiz-kesif.html" class="cds-cta-btn-secondary">✉️ Ücretsiz Ön İnceleme &amp; İletişim</a>
          </div>
        </div>
      `;
    }

    // B. Clean Navigation & Footer: Remove discontinued Sektor Haberleri links & add Rehberler
    try {
      // Remove Sektor Haberleri from any nav list
      var deadNavLinks = document.querySelectorAll('a[href*="sektor-haberleri"]');
      deadNavLinks.forEach(function (a) {
        if (a.parentElement && a.parentElement.tagName === 'LI') {
          a.parentElement.remove();
        } else {
          // Clean adjacent middot separator in footer paragraphs
          var prev = a.previousSibling;
          var next = a.nextSibling;
          if (next && next.nodeType === 3 && next.nodeValue.indexOf('·') !== -1) {
            next.nodeValue = next.nodeValue.replace(/\s*·\s*/, ' ');
          } else if (prev && prev.nodeType === 3 && prev.nodeValue.indexOf('·') !== -1) {
            prev.nodeValue = prev.nodeValue.replace(/\s*·\s*$/, ' ');
          }
          a.remove();
        }
      });

      var guidesUrl = '/p/rehberler.html';
      var energyUrl = '/p/izmir-turkiye-enerji-fiyat-gostergesi.html';
      var pageLists = document.querySelectorAll('.widget.PageList ul, #PageList2 ul, nav ul');
      pageLists.forEach(function (ul) {
        if (!ul.querySelector('a[href*="rehberler.html"]')) {
          var liG = document.createElement('li');
          liG.innerHTML = '<a href="' + guidesUrl + '">Rehberler</a>';
          // Insert right after Ana Sayfa if present
          var firstLi = ul.querySelector('li');
          if (firstLi && firstLi.nextSibling) {
            ul.insertBefore(liG, firstLi.nextSibling);
          } else {
            ul.appendChild(liG);
          }
        }
        if (!ul.querySelector('a[href*="enerji-fiyat"]')) {
          var liE = document.createElement('li');
          liE.innerHTML = '<a href="' + energyUrl + '">Enerji Fiyatları</a>';
          ul.appendChild(liE);
        }
      });

      var footerParas = document.querySelectorAll('footer p, .footer p, #HTML3 p');
      footerParas.forEach(function (p) {
        if (p.querySelector('a[href*="kvkk-aydnlatma-metni"]') && !p.querySelector('a[href*="rehberler.html"]')) {
          var sep1 = document.createTextNode(' · ');
          var aG = document.createElement('a');
          aG.href = guidesUrl;
          aG.style.color = '#1f4e79';
          aG.textContent = 'Tüm Rehberler';
          p.appendChild(sep1);
          p.appendChild(aG);

          if (!p.querySelector('a[href*="enerji-fiyat"]')) {
            var sep2 = document.createTextNode(' · ');
            var aE = document.createElement('a');
            aE.href = energyUrl;
            aE.style.color = '#1f4e79';
            aE.textContent = 'Enerji Fiyatları';
            p.appendChild(sep2);
            p.appendChild(aE);
          }
        }
      });
    } catch (e) {
      console.warn('[CDS Core] Nav cleanup/injection skipped:', e);
    }

    // Dynamic Link Normalizer: Prevent Blogger blogspot.com redirect issues
    try {
      var domainLinks = document.querySelectorAll('a[href*="tesisyonetimdanismanlik.blogspot.com"]');
      domainLinks.forEach(function(link) {
        link.href = link.href.replace('tesisyonetimdanismanlik.blogspot.com', 'www.cdstesis.com.tr');
      });
    } catch (e) {
      console.warn('[CDS Core] Link normalization skipped:', e);
    }

    // Mount Live Commodity & Energy Ticker Tape
    try {
      mountLiveEnergyTicker();
    } catch (e) {
      console.warn('[CDS Core] Live energy ticker mount skipped:', e);
    }
  }

  // 5. Mount Live Energy & Commodity Ticker Tape (Seamless Financial Marquee Tape)
  function mountLiveEnergyTicker() {
    if (document.getElementById('cdsLiveEnergyTicker')) return;
    var mountTarget = document.getElementById('main') || document.querySelector('main');
    if (!mountTarget) return;

    var initialItems = [
      { id: 'brent', name: 'BRENT', icon: '🛢️', val: '$91.11', chg: '+0.45%', trend: 'up' },
      { id: 'natgas', name: 'DOĞALGAZ (HH)', icon: '🔥', val: '$3.22', chg: '+1.10%', trend: 'up' },
      { id: 'copper', name: 'BAKIR', icon: '🥉', val: '$6.32/lb', chg: '-0.25%', trend: 'down' },
      { id: 'gold_gram', name: 'GRAM ALTIN', icon: '🥇', val: '6.643 ₺', chg: '+0.55%', trend: 'up' },
      { id: 'silver', name: 'GÜMÜŞ', icon: '🥈', val: '$52.80', chg: '+0.65%', trend: 'up' },
      { id: 'usd_try', name: 'USD/TRY', icon: '💵', val: '50.20 ₺', chg: '+0.15%', trend: 'up' },
      { id: 'eur_try', name: 'EUR/TRY', icon: '💶', val: '56.25 ₺', chg: '-0.08%', trend: 'down' },
      { id: 'motorin', name: 'MOTORİN (İZMİR)', icon: '⛽', val: '97.02 ₺/Lt', tag: 'OPET', trend: 'neutral' },
      { id: 'benzin95', name: 'BENZİN 95 (İZMİR)', icon: '🚗', val: '76.39 ₺/Lt', tag: 'OPET', trend: 'neutral' },
      { id: 'epias_ptf', name: 'EPİAŞ PTF', icon: '⚡', val: '3.826 ₺/MWh', tag: 'Spot', trend: 'neutral' },
      { id: 'izmirgaz', name: 'İZMİRGAZ K1', icon: '🏠', val: '1.68 ₺/kWh', tag: 'Konut', trend: 'neutral' },
      { id: 'izjet', name: 'İZJET JEOTERMAL', icon: '♨️', val: '24.50 ₺/m²', tag: 'Bölgesel', trend: 'neutral' }
    ];

    function buildGroupHtml(items) {
      return items.map(function (item) {
        var badgeHtml = '';
        if (item.chg) {
          var cls = item.trend === 'down' ? 't-down' : 't-up';
          var arrow = item.trend === 'down' ? '▼ ' : '▲ ';
          badgeHtml = '<span class="' + cls + '" data-chg="' + item.id + '">' + arrow + item.chg + '</span>';
        } else if (item.tag) {
          badgeHtml = '<span class="t-tag" data-chg="' + item.id + '">' + item.tag + '</span>';
        }
        return '<div class="cds-ticker-item" data-id="' + item.id + '">' +
          '<span class="t-icon">' + item.icon + '</span>' +
          '<span class="t-lbl">' + item.name + ':</span>' +
          '<span class="t-val" data-val="' + item.id + '">' + item.val + '</span>' +
          badgeHtml +
        '</div>';
      }).join('');
    }

    var groupHtml = buildGroupHtml(initialItems);

    var tickerTape = document.createElement('div');
    tickerTape.id = 'cdsLiveEnergyTicker';
    tickerTape.className = 'cds-ticker-tape';
    tickerTape.setAttribute('role', 'region');
    tickerTape.setAttribute('aria-label', 'Canlı Enerji ve Emtia Piyasaları');

    tickerTape.innerHTML =
      '<div class="cds-ticker-badge">' +
        '<span class="cds-ticker-dot"></span>' +
        '<span>CANLI PİYASA</span>' +
      '</div>' +
      '<div class="cds-ticker-view">' +
        '<div class="cds-ticker-track" id="cdsTickerTrack">' +
          '<div class="cds-ticker-group" id="cdsTickerGroup1">' + groupHtml + '</div>' +
          '<div class="cds-ticker-group" id="cdsTickerGroup2" aria-hidden="true">' + groupHtml + '</div>' +
        '</div>' +
      '</div>' +
      '<a href="/p/izmir-turkiye-enerji-fiyat-gostergesi.html" class="cds-ticker-link" title="Tüm Enerji ve Emtia Fiyatlarını İncele">' +
        '<span>Tüm Piyasalar</span>' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>' +
      '</a>';

    mountTarget.insertBefore(tickerTape, mountTarget.firstChild);

    function updateValue(id, newVal, newChg, newTrend) {
      var vEls = document.querySelectorAll('#cdsLiveEnergyTicker [data-val="' + id + '"]');
      for (var i = 0; i < vEls.length; i++) {
        vEls[i].textContent = newVal;
      }
      if (newChg) {
        var cEls = document.querySelectorAll('#cdsLiveEnergyTicker [data-chg="' + id + '"]');
        for (var j = 0; j < cEls.length; j++) {
          cEls[j].className = newTrend === 'down' ? 't-down' : (newTrend === 'up' ? 't-up' : 't-tag');
          var prefix = (newTrend === 'down' ? '▼ ' : (newTrend === 'up' ? '▲ ' : ''));
          cEls[j].textContent = prefix + newChg;
        }
      }
    }

    // Refresh live market rates dynamically on page load & periodically
    function refreshLiveRates() {
      // 1. Live Currencies (USD/TRY, EUR/TRY)
      try {
        fetch('https://open.er-api.com/v6/latest/USD')
          .then(function (res) { return res.json(); })
          .then(function (d) {
            if (d && d.rates && d.rates.TRY) {
              var tryRate = d.rates.TRY;
              updateValue('usd_try', tryRate.toFixed(2) + ' ₺');
              if (d.rates.EUR) {
                var eurTry = tryRate / d.rates.EUR;
                updateValue('eur_try', eurTry.toFixed(2) + ' ₺');
              }
              // Update Gold & Silver with live USD/TRY rate
              fetchGoldPrices(tryRate);
            }
          }).catch(function () {});
      } catch (e) {}

      // 2. Local Tariffs, Fuel & Commodity Feed from CDS CDN
      try {
        fetch('https://cemdogansahin.github.io/cdstesis-assets/data/enerji_fiyatlari.json?t=' + Date.now())
          .then(function (res) { return res.json(); })
          .then(function (d) {
            if (d && d.live_ticker_feed && d.live_ticker_feed.items) {
              d.live_ticker_feed.items.forEach(function (it) {
                if (it.id && it.val) {
                  updateValue(it.id, it.val, it.chg, it.trend);
                }
              });
            }
          }).catch(function () {});
      } catch (e) {}
    }

    function fetchGoldPrices(tryRate) {
      try {
        fetch('https://api.gold-api.com/price/XAU')
          .then(function (res) { return res.json(); })
          .then(function (g) {
            if (g && g.price) {
              var goldOns = g.price;
              if (tryRate) {
                var gramAltin = (goldOns / 31.1034768) * tryRate;
                updateValue('gold_gram', Math.round(gramAltin).toLocaleString('tr-TR') + ' ₺');
              }
            }
          }).catch(function () {});

        fetch('https://api.gold-api.com/price/XAG')
          .then(function (res) { return res.json(); })
          .then(function (s) {
            if (s && s.price) {
              updateValue('silver', '$' + s.price.toFixed(2));
            }
          }).catch(function () {});
      } catch (e) {}
    }

    // Trigger immediate refresh on load and setup periodic sync
    refreshLiveRates();
    setInterval(refreshLiveRates, 60000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCdsWidgets);
  } else {
    initCdsWidgets();
  }
})();
