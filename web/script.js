/* ============================================================
   Festival Tech del Futuro — script.js
   Vanilla JS: nav toggle, active link highlight,
   back-to-top, smooth scroll, form validation
   ============================================================ */

(function () {
  'use strict';

  /* ---------- DOM references ---------- */
  const navToggle  = document.getElementById('navToggle');
  const mainNav    = document.getElementById('mainNav');
  const navLinks   = mainNav ? mainNav.querySelectorAll('a') : [];
  const backToTop  = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  /* ---------- Mobile nav toggle ---------- */
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const expanded = mainNav.classList.contains('open');
      navToggle.classList.toggle('is-open', !expanded);
      mainNav.classList.toggle('open', !expanded);
    });

    /* Close nav when a link is clicked */
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        mainNav.classList.remove('open');
      });
    });

    /* Close nav on outside click */
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('is-open');
        mainNav.classList.remove('open');
      }
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = Array.from(document.querySelectorAll('section[id], div[id]'))
    .filter(function (el) {
      return ['inicio', 'actividades', 'fichas', 'contacto'].includes(el.id);
    });

  function updateActiveLink() {
    var scrollY = window.scrollY + 90;
    var current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ---------- Back to top button ---------- */
  function handleScroll() {
    updateActiveLink();
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ---------- Form validation ---------- */
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = validateForm();
      if (valid && formSuccess) {
        formSuccess.hidden = false;
        contactForm.reset();
        /* Re-hide success message after 6s */
        setTimeout(function () {
          formSuccess.hidden = true;
        }, 6000);
      }
    });

    /* Live validation on blur */
    var inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(function (input) {
      input.addEventListener('blur', function () {
        validateField(input);
      });
      input.addEventListener('input', function () {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
  }

  function validateForm() {
    var valid = true;
    var inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(function (input) {
      if (!validateField(input)) {
        valid = false;
      }
    });
    return valid;
  }

  function validateField(input) {
    var errorEl = input.parentElement.querySelector('.field-error');
    var message = '';

    if (input.required && !input.value.trim()) {
      message = 'Este campo es obligatorio.';
    } else if (input.type === 'email' && input.value.trim()) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value.trim())) {
        message = 'Introduce una dirección de correo válida.';
      }
    } else if (input.type === 'number' && input.value) {
      var num = parseInt(input.value, 10);
      var min = input.min ? parseInt(input.min, 10) : null;
      var max = input.max ? parseInt(input.max, 10) : null;
      if (min !== null && num < min) {
        message = 'La edad mínima es ' + min + ' años.';
      } else if (max !== null && num > max) {
        message = 'La edad máxima es ' + max + ' años.';
      }
    } else if (input.type === 'checkbox' && input.required && !input.checked) {
      message = 'Debes aceptar la política de privacidad.';
    }

    if (errorEl) {
      errorEl.textContent = message;
    }
    input.classList.toggle('error', message !== '');
    return message === '';
  }

  /* ---------- Keyboard accessibility: close nav with Escape ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
      navToggle.classList.remove('is-open');
      mainNav.classList.remove('open');
      navToggle.focus();
    }
  });

})();
