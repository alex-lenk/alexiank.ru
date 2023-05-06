export default function initNavbarToggle() {
  const jsNavbar = document.querySelector('.js-navbar');

  if (!jsNavbar) return false;

  const jsNavbarToggle = jsNavbar.querySelector('.js-navbar__toggle');

  jsNavbarToggle.addEventListener('click', () => jsNavbar.classList.toggle('navbar__open'));
}
