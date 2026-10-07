/* ========================================
   GOOGLE ANALYTICS 4
   ======================================== */

(function () {
  'use strict';

  function getMeasurementId() {
    var meta = document.querySelector('meta[name="ga4-measurement-id"]');
    if (meta && meta.content) {
      return meta.content.trim();
    }
    if (window.GA4_MEASUREMENT_ID) {
      return window.GA4_MEASUREMENT_ID.trim();
    }
    return null;
  }

  function loadGtag(measurementId) {
    if (window.gtagLoaded) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
      anonymize_ip: true
    });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    script.onerror = function () {
      console.warn('GA4: Failed to load Google tag');
    };
    document.head.appendChild(script);

    window.gtagLoaded = true;
  }

  function trackEvent(eventName, parameters) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters || {});
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...parameters });
    }
  }

  function init() {
    var measurementId = getMeasurementId();

    if (!measurementId) {
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        console.warn('GA4: Measurement ID not configured. Set meta[name="ga4-measurement-id"] or window.GA4_MEASUREMENT_ID');
      }
      return;
    }

    if (!/^G-[A-Z0-9]+$/.test(measurementId)) {
      console.warn('GA4: Invalid Measurement ID format:', measurementId);
      return;
    }

    loadGtag(measurementId);

    window.HillviewAnalytics = {
      trackEvent: trackEvent,
      trackBookingClick: function () { trackEvent('booking_click'); },
      trackPhoneClick: function () { trackEvent('phone_click'); },
      trackEmailClick: function () { trackEvent('email_click'); },
      trackFormStart: function (formId) { trackEvent('form_start', { form_id: formId }); },
      trackFormSubmit: function (formId) { trackEvent('form_submit', { form_id: formId }); }
    };

    setupAutoTracking();
  }

  function setupAutoTracking() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;

      var href = link.getAttribute('href') || '';

      if (href.indexOf('book.nookal.com') !== -1 || link.hasAttribute('data-booking-btn')) {
        window.HillviewAnalytics && window.HillviewAnalytics.trackBookingClick();
      } else if (href.indexOf('tel:') === 0) {
        window.HillviewAnalytics && window.HillviewAnalytics.trackPhoneClick();
      } else if (href.indexOf('mailto:') === 0) {
        window.HillviewAnalytics && window.HillviewAnalytics.trackEmailClick();
      }
    });

    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
      var formId = form.id || form.getAttribute('name') || 'unknown';
      var hasInteracted = false;

      form.addEventListener('focusin', function () {
        if (!hasInteracted) {
          hasInteracted = true;
          window.HillviewAnalytics && window.HillviewAnalytics.trackFormStart(formId);
        }
      });

      form.addEventListener('submit', function () {
        window.HillviewAnalytics && window.HillviewAnalytics.trackFormSubmit(formId);
      });
    });
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();