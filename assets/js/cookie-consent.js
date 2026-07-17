/* ═══════════════════════════════════════════════════════════════════
   Banner de consentimento de cookies + Google Consent Mode v2
   Clock Engenharia — identidade visual (estilos em assets/css/style.css,
   bloco ".cookie-banner"). Requer o gtag() definido no <head> das páginas.

   Fluxo:
   - Enquanto o visitante não escolher, o Consent Mode fica "denied" (padrão
     definido no <head>) e o banner é exibido.
   - "Aceitar"  → analytics_storage = granted  (o GA4 passa a coletar).
   - "Recusar"  → mantém tudo denied.
   - A escolha fica salva em localStorage e o banner não reaparece.
═══════════════════════════════════════════════════════════════════ */
(function () {
  var CONSENT_KEY = 'clock_cookie_consent';

  function updateConsent(granted) {
    if (typeof gtag !== 'function') return;
    gtag('consent', 'update', {
      'analytics_storage': granted ? 'granted' : 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
  }

  var saved = null;
  try { saved = localStorage.getItem(CONSENT_KEY); } catch (e) {}

  // Já respondeu antes: aplica a escolha e não mostra o banner de novo.
  if (saved === 'granted') { updateConsent(true); return; }
  if (saved === 'denied')  { updateConsent(false); return; }

  function buildBanner() {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">' +
          'Usamos cookies para entender como você navega e melhorar sua ' +
          'experiência no site. ' +
          '<a href="politica-de-privacidade.html#cookies">Saiba mais</a>.' +
        '</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="btn-cookie btn-cookie--decline">Recusar</button>' +
          '<button type="button" class="btn-cookie btn-cookie--accept">Aceitar</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    // Anima a entrada no próximo frame.
    requestAnimationFrame(function () { banner.classList.add('is-visible'); });

    function close() {
      banner.classList.remove('is-visible');
      setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
    }

    banner.querySelector('.btn-cookie--accept').addEventListener('click', function () {
      try { localStorage.setItem(CONSENT_KEY, 'granted'); } catch (e) {}
      updateConsent(true);
      close();
    });

    banner.querySelector('.btn-cookie--decline').addEventListener('click', function () {
      try { localStorage.setItem(CONSENT_KEY, 'denied'); } catch (e) {}
      updateConsent(false);
      close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildBanner);
  } else {
    buildBanner();
  }
})();
