'use strict';
const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
navToggle.addEventListener('click', function () {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
