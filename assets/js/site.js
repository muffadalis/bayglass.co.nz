document.addEventListener('DOMContentLoaded', function () {
  // Measure this browser's scroll bar width (0 where scroll bars float, e.g. phones/Macs)
  // and expose it as --sbw, so embedded forms can push their scroll bar out of view.
  var probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll';
  document.body.appendChild(probe);
  document.documentElement.style.setProperty('--sbw', (probe.offsetWidth - probe.clientWidth) + 'px');
  document.body.removeChild(probe);

  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var toggle = document.getElementById('mobile-menu-toggle');
  var closeBtn = document.getElementById('mobile-menu-close');
  var drawer = document.getElementById('mobile-menu-drawer');
  var backdrop = document.getElementById('mobile-menu-backdrop');

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && drawer && backdrop) {
    toggle.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
  }

  // Cookie notice — slide it in unless the visitor already dismissed it.
  var cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    var cookieAccepted;
    try {
      cookieAccepted = localStorage.getItem('cookie-consent');
    } catch (e) {}

    if (cookieAccepted !== 'accepted') {
      cookieBanner.classList.remove('translate-y-full');
    }

    var cookieAcceptBtn = document.getElementById('cookie-banner-accept');
    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', function () {
        cookieBanner.classList.add('translate-y-full');
        try {
          localStorage.setItem('cookie-consent', 'accepted');
        } catch (e) {}
      });
    }
  }

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  // Photo carousels — home hero + each service page's own gallery. Same
  // markup and behaviour for both: cross-fading slides, arrows, dots,
  // autoplay that restarts whenever a visitor takes manual control.
  var carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(function (carousel) {
    var slides = carousel.querySelectorAll('[data-carousel-slide]');
    var dots = carousel.querySelectorAll('[data-carousel-dot]');
    var count = slides.length;
    if (count < 2) return;

    var index = 0;
    var timer;

    function render() {
      slides.forEach(function (slide, i) {
        var active = i === index;
        slide.classList.toggle('opacity-100', active);
        slide.classList.toggle('opacity-0', !active);
        slide.classList.toggle('pointer-events-auto', active);
        slide.classList.toggle('pointer-events-none', !active);
      });
      dots.forEach(function (dot, i) {
        dot.setAttribute('data-active', i === index ? 'true' : 'false');
      });
    }

    function goTo(next) {
      index = (next + count) % count;
      render();
    }

    function restartAutoplay() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(index + 1); }, 6000);
    }

    var prevBtn = carousel.querySelector('[data-carousel-prev]');
    var nextBtn = carousel.querySelector('[data-carousel-next]');
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(index - 1); restartAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(index + 1); restartAutoplay(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); restartAutoplay(); });
    });

    render();
    restartAutoplay();
  });

  // Hidden hero slides wait for the page to finish loading before fetching
  // their background photo, so the first slide paints sooner.
  window.addEventListener('load', function () {
    document.querySelectorAll('[data-bg-class]').forEach(function (el) {
      el.classList.add(el.getAttribute('data-bg-class'));
    });
  });

  // Contact form — Web3Forms. The form's plain action/method already work
  // without JS; this just upgrades it to an inline status message instead
  // of navigating away.
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var statusEl = document.getElementById('contact-form-status');
    var submitBtn = contactForm.querySelector('button[type="submit"]');
    var submitLabel = submitBtn ? submitBtn.textContent : '';

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      fetch(contactForm.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(contactForm),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          statusEl.classList.remove('hidden', 'text-red-600');
          if (result.success) {
            statusEl.textContent = "Thanks — we've got your message and will be in touch soon.";
            statusEl.classList.add('text-primary');
            contactForm.reset();
          } else {
            throw new Error(result.message || 'Something went wrong.');
          }
        })
        .catch(function () {
          statusEl.classList.remove('hidden', 'text-primary');
          statusEl.classList.add('text-red-600');
          statusEl.textContent = 'Something went wrong sending that — please call us instead, or try again.';
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitLabel;
          }
        });
    });
  }
});

// ---------- GA4 event tracking: phone clicks, email clicks, enquiry form ----------
(function () {
  function track(name, params) {
    if (typeof window.gtag === 'function') {
      params = params || {};
      params.transport_type = 'beacon';
      window.gtag('event', name, params);
    }
  }

  // Phone and email links, anywhere on the site (header, footer, content, 404).
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href.indexOf('tel:') === 0) {
      track('phone_click', { link_text: (a.textContent || '').trim().slice(0, 60), link_url: href });
    } else if (href.indexOf('mailto:') === 0) {
      track('email_click', { link_text: (a.textContent || '').trim().slice(0, 60), link_url: href });
    }
  }, true);

  // Fergus enquiry form: the form is in a cross-site iframe, so we cannot see the submit itself.
  // The first click into the form is tracked as form_start. The real conversion (generate_lead)
  // fires on /thank-you/ once Fergus redirects there after a submission.
  var started = false;
  var watch = null;
  function formFocused() {
    var f = document.activeElement;
    return f && f.tagName === 'IFRAME' && f.title === 'Bay Glass enquiry form';
  }
  function checkForm() {
    if (!started && formFocused()) {
      started = true;
      track('form_start', { form_name: 'enquiry' });
      if (watch) clearInterval(watch);
    }
  }
  // Only the contact page has the form. Browsers differ on whether a click into a cross-site
  // iframe fires blur on our window, so also check which element has focus twice a second.
  if (document.querySelector('iframe[title="Bay Glass enquiry form"]')) {
    window.addEventListener('blur', function () { setTimeout(checkForm, 0); });
    watch = setInterval(checkForm, 500);
  }
})();
