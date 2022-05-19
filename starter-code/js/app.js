'use strict';
const alpha = ['index', 'destination', 'crew', 'technology'];
let beta;

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
for (let i = 0; i < 4; i++) {
  primaryNav.children[i].classList.remove('active');
  if (document.URL.indexOf(alpha[i]) > 0) {
    beta = i;
  }
}
primaryNav.children[beta].setAttribute('class', 'active');
