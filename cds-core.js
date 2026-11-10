/**
 * CDS Tesis Yönetimi ve Enerji Danışmanlığı (cdstesis.com.tr)
 * Central Core Runtime & Dynamic Widgets (CDN Asset)
 * Author: Cem Doğan Şahin
 * Version: 1.0.1
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

        .cds-sub-form { display: flex; flex-direction: column; gap: 10px; }
        .cds-form-row { display: flex; flex-wrap: wrap; gap: 8px; }

        .cds-sub-input {
          flex: 1 1 180px;
          padding: 11px 13px;
          font-size: 13.5px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          outline: none;
          font-family: inherit;
          transition: all 0.2s;
        }

        .cds-sub-input:focus {
          background: rgba(255, 255, 255, 0.16);
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);
        }

        .cds-sub-input::placeholder { color: #94a3b8; }

        .cds-sub-select {
          flex: 1 1 150px;
          padding: 11px 12px;
          font-size: 13px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: #0f2b48;
          color: #ffffff;
          outline: none;
          font-family: inherit;
          cursor: pointer;
        }

        .cds-sub-btn {
          background: #f59e0b;
          color: #0f2b48;
          font-weight: 700;
          font-size: 13.5px;
          padding: 11px 20px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .cds-sub-btn:hover {
          background: #fbbf24;
          transform: translateY(-1px);
        }

        .cds-kvkk-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11.5px;
          line-height: 1.45;
          color: #94a3b8;
          margin-top: 3px;
        }

        .cds-kvkk-row input[type="checkbox"] {
          margin-top: 2px;
          cursor: pointer;
          accent-color: #f59e0b;
        }

        .cds-kvkk-row a { color: #fbbf24; text-decoration: underline; }

        .cds-sub-success {
          display: none;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #a7f3d0;
          padding: 12px 14px;
          border-radius: 6px;
          font-size: 13px;
          line-height: 1.5;
          margin-top: 6px;
        }

        .cds-floating-sub-btn {
          position: fixed;
          bottom: 22px;
          right: 22px;
          z-index: 99999;
          background: #1f4e79;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 10px 16px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(15, 43, 72, 0.35);
          transition: all 0.25s ease;
        }

        .cds-floating-sub-btn:hover {
          background: #0f2b48;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(15, 43, 72, 0.45);
        }

        .cds-pulse-dot {
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
          animation: cdsPulse 2s infinite;
        }

        @keyframes cdsPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(245, 158, 11, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
        }

        .cds-sub-modal-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          z-index: 100000;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .cds-sub-modal-backdrop.active { display: flex; }

        .cds-sub-modal-content {
          background: #ffffff;
          border-radius: 12px;
          max-width: 460px;
          width: 100%;
          padding: 26px 22px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          text-align: left;
        }

        .cds-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          border: none;
          font-size: 22px;
          color: #64748b;
          cursor: pointer;
          line-height: 1;
        }

        .cds-sub-modal-content h3 {
          margin: 0 0 6px 0;
          font-size: 19px;
          color: #1f4e79;
          font-weight: 700;
        }

        .cds-sub-modal-content p {
          margin: 0 0 14px 0;
          font-size: 13px;
          line-height: 1.5;
          color: #475569;
        }

        .cds-sub-modal-content .cds-sub-input {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .cds-sub-modal-content .cds-sub-input:focus {
          background: #ffffff;
          border-color: #1f4e79;
          box-shadow: 0 0 0 3px rgba(31, 78, 121, 0.15);
        }

        .cds-sub-modal-content .cds-sub-select {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .cds-sub-modal-content .cds-sub-btn {
          width: 100%;
          background: #1f4e79;
          color: #ffffff;
        }

        .cds-sub-modal-content .cds-sub-btn:hover { background: #0f2b48; }
        .cds-sub-modal-content .cds-kvkk-row { color: #64748b; }
        .cds-sub-modal-content .cds-kvkk-row a { color: #1f4e79; }

        @media (max-width: 639px) {
          .cds-form-row { flex-direction: column; }
          .cds-sub-btn { width: 100%; }
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

  // 2. Modal Controls
  window.openCdsSubModal = function () {
    var modal = document.getElementById('cdsSubModal');
    if (modal) modal.classList.add('active');
  };

  window.closeCdsSubModal = function () {
    var modal = document.getElementById('cdsSubModal');
    if (modal) modal.classList.remove('active');
  };

  window.closeCdsSubModalOnBackdrop = function (e) {
    if (e.target && e.target.id === 'cdsSubModal') {
      window.closeCdsSubModal();
    }
  };

  // 3. Form Submission Handler
  window.handleCdsSubscribe = function (event, formType) {
    event.preventDefault();
    var form = event.target;
    var name = form.querySelector('[name="name"]').value;
    var email = form.querySelector('[name="email"]').value;
    var district = form.querySelector('[name="district"]').value;
    var successBox = formType === 'footer'
      ? document.getElementById('cdsFooterSuccess')
      : document.getElementById('cdsModalSuccess');

    try {
      var subs = JSON.parse(localStorage.getItem('cds_subscribers') || '[]');
      subs.push({
        name: name,
        email: email,
        district: district,
        date: new Date().toISOString()
      });
      localStorage.setItem('cds_subscribers', JSON.stringify(subs));
    } catch (e) {}

    if (successBox) successBox.style.display = 'block';
    form.reset();

    if (formType === 'modal') {
      setTimeout(function () {
        window.closeCdsSubModal();
        if (successBox) successBox.style.display = 'none';
      }, 3500);
    }
  };

  // 4. DOM Initialization
  function initCdsWidgets() {
    injectStyles();

    // A. Mount Embedded Footer Card
    var footerMount = document.getElementById('cds-footer-sub-card-mount');
    if (footerMount && !document.getElementById('cdsFooterSubForm')) {
      footerMount.innerHTML = `
        <div class="cds-footer-sub-card">
          <div class="cds-sub-badge">📬 İzmir Siteleri Teknik & Hukuki Gündem</div>
          <h3>İzmir Siteleri İçin Enerji ve Tesis Bülteni</h3>
          <p class="cds-sub-desc">
            Narlıdere, Balçova, Urla ve çevre ilçelerdeki site yönetimleri ve kat malikleri için; merkezi sistem enerji analizleri, ortak alan tasarruf dengesi ve mevzuat güncellemeleri ayda en fazla iki kez e-posta kutunuzda. Spam içermez, dilediğiniz an tek tıkla ayrılabilirsiniz.
          </p>
          <form class="cds-sub-form" id="cdsFooterSubForm" onsubmit="handleCdsSubscribe(event, 'footer')">
            <div class="cds-form-row">
              <input type="text" name="name" class="cds-sub-input" placeholder="Adınız Soyadınız" required>
              <input type="email" name="email" class="cds-sub-input" placeholder="E-Posta Adresiniz" required>
              <select name="district" class="cds-sub-select">
                <option value="Narlıdere">Narlıdere</option>
                <option value="Balçova">Balçova</option>
                <option value="Urla">Urla</option>
                <option value="Güzelbahçe">Güzelbahçe</option>
                <option value="Karşıyaka">Karşıyaka</option>
                <option value="Bornova / Bayraklı">Bornova / Bayraklı</option>
                <option value="Diğer (İzmir)">Diğer (İzmir)</option>
              </select>
              <button type="submit" class="cds-sub-btn">
                <span>Takip Et</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
            <div class="cds-kvkk-row">
              <input type="checkbox" id="footerKvkk" required>
              <label for="footerKvkk">
                Bülten iletimi için iletişim verilerimin işlenmesini ve <a href="/p/kvkk-aydnlatma-metni.html" target="_blank">KVKK Aydınlatma Metni</a>'ni okuduğumu kabul ediyorum.
              </label>
            </div>
            <div class="cds-sub-success" id="cdsFooterSuccess">
              ✓ Kaydınız başarıyla alındı! İzmir sitelerine yönelik bağımsız mühendislik analizlerimizi e-posta adresinize ileteceğiz.
            </div>
          </form>
        </div>
      `;
    }

    // B. Mount Floating Button & Modal
    if (!document.getElementById('cdsOpenModalBtn')) {
      var modalContainer = document.createElement('div');
      modalContainer.className = 'cds-widget-wrap';
      modalContainer.innerHTML = `
        <button class="cds-floating-sub-btn" id="cdsOpenModalBtn" onclick="openCdsSubModal()">
          <span class="cds-pulse-dot"></span>
          <span>Duyuru & Bülten Takibi</span>
        </button>

        <div class="cds-sub-modal-backdrop" id="cdsSubModal" onclick="closeCdsSubModalOnBackdrop(event)">
          <div class="cds-sub-modal-content">
            <button class="cds-modal-close" onclick="closeCdsSubModal()" aria-label="Kapat">&times;</button>
            <div class="cds-sub-badge" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">İzmir Toplu Konut Analizleri</div>
            <h3>Enerji ve Tesis Bülteni'ne Katılın</h3>
            <p>
              Apartman ve sitenizde kat malikleri olarak doğru kararlar alabilmeniz için tarafsız mühendislik notları ve güncel mevzuat özetleri ayda iki kez e-postanızda.
            </p>
            <form class="cds-sub-form" id="cdsModalSubForm" onsubmit="handleCdsSubscribe(event, 'modal')">
              <input type="text" name="name" class="cds-sub-input" placeholder="Adınız Soyadınız" required>
              <input type="email" name="email" class="cds-sub-input" placeholder="E-Posta Adresiniz" required>
              <select name="district" class="cds-sub-select">
                <option value="" disabled selected>Bulunduğunuz İlçe / Bölge</option>
                <option value="Narlıdere">Narlıdere</option>
                <option value="Balçova">Balçova</option>
                <option value="Urla">Urla</option>
                <option value="Güzelbahçe">Güzelbahçe</option>
                <option value="Karşıyaka">Karşıyaka</option>
                <option value="Bornova / Bayraklı">Bornova / Bayraklı</option>
                <option value="Diğer (İzmir)">Diğer (İzmir)</option>
              </select>
              <div class="cds-kvkk-row">
                <input type="checkbox" id="modalKvkk" required>
                <label for="modalKvkk">
                  İletişim bilgilerimin işlenmesini ve <a href="/p/kvkk-aydnlatma-metni.html" target="_blank">KVKK Metni</a>'ni onaylıyorum.
                </label>
              </div>
              <button type="submit" class="cds-sub-btn">
                <span>Bültene Abone Ol</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
              <div class="cds-sub-success" id="cdsModalSuccess">
                ✓ Kaydınız başarıyla tamamlandı! Sektörel bültenlerimizde görüşmek üzere.
              </div>
            </form>
          </div>
        </div>
      `;
      document.body.appendChild(modalContainer);
    }

    // Dynamic Navigation Enhancer: Add Enerji Fiyatları to menus
    try {
      var targetUrl = '/p/izmir-turkiye-enerji-fiyat-gostergesi.html';
      var pageLists = document.querySelectorAll('.widget.PageList ul, #PageList2 ul, nav ul');
      pageLists.forEach(function(ul) {
        if (!ul.querySelector('a[href*="enerji-fiyat"]')) {
          var li = document.createElement('li');
          li.innerHTML = '<a href="' + targetUrl + '" style="font-weight:700; color:#1f4e79;">📊 Enerji Fiyatları</a>';
          ul.appendChild(li);
        }
      });

      var footerParas = document.querySelectorAll('footer p, .footer p');
      footerParas.forEach(function(p) {
        if (p.textContent.indexOf('Sektör Haberleri') !== -1 && !p.querySelector('a[href*="enerji-fiyat"]')) {
          var sep = document.createTextNode(' · ');
          var a = document.createElement('a');
          a.href = targetUrl;
          a.style.color = '#1f4e79';
          a.style.fontWeight = '700';
          a.textContent = '📊 Enerji Fiyatları';
          p.appendChild(sep);
          p.appendChild(a);
        }
      });
    } catch (e) {
      console.warn('[CDS Core] Nav link injection skipped:', e);
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
