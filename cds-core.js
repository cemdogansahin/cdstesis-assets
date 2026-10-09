/**
 * CDS Tesis Yönetimi ve Enerji Danışmanlığı (cdstesis.com.tr)
 * Central Core Runtime & Dynamic Widgets (CDN Asset)
 * Author: Cem Doğan Şahin
 * Version: 1.0.0
 */

(function () {
  'use strict';

  // 1. CSS Auto-Loader
  function loadStylesheet() {
    var cssId = 'cds-core-css';
    if (!document.getElementById(cssId)) {
      var link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://cemdogansahin.github.io/cdstesis-assets/cds-core.css';
      document.head.appendChild(link);
    }
  }

  // 2. Configuration
  var CDS_CONFIG = {
    googleFormUrl: '', // Google Form formResponse endpoint when configured
    entryName: 'entry.123456789',
    entryEmail: 'entry.987654321',
    entryDistrict: 'entry.555555555'
  };

  // 3. Modal Controls
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

  // 4. Form Submission Handler
  window.handleCdsSubscribe = function (event, formType) {
    event.preventDefault();
    var form = event.target;
    var name = form.querySelector('[name="name"]').value;
    var email = form.querySelector('[name="email"]').value;
    var district = form.querySelector('[name="district"]').value;
    var successBox = formType === 'footer'
      ? document.getElementById('cdsFooterSuccess')
      : document.getElementById('cdsModalSuccess');

    // Google Form Submission
    if (CDS_CONFIG.googleFormUrl && !CDS_CONFIG.googleFormUrl.includes('ORNEK')) {
      try {
        var formData = new FormData();
        formData.append(CDS_CONFIG.entryName, name);
        formData.append(CDS_CONFIG.entryEmail, email);
        formData.append(CDS_CONFIG.entryDistrict, district);
        fetch(CDS_CONFIG.googleFormUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
      } catch (err) {
        console.warn('[CDS] Form transmit err:', err);
      }
    }

    // LocalStorage Backup
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

  // 5. DOM Initialization
  function initCdsWidgets() {
    loadStylesheet();

    // A. Mount Embedded Footer Card if target exists and not already rendered
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

    // B. Mount Floating Button & Modal if not present
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

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCdsWidgets);
  } else {
    initCdsWidgets();
  }
})();
