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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCdsWidgets);
  } else {
    initCdsWidgets();
  }
})();
