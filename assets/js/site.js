document.addEventListener('DOMContentLoaded', function () {
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
