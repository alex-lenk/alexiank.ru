import {jsToggleMenu, body} from '../utils/constants'

export default function toggleMenu() {
  if (!jsToggleMenu) return false
  jsToggleMenu.addEventListener('click', () => toggleClassMenu())
}

function toggleClassMenu() {
  body.classList.toggle('nav__open')
  jsToggleMenu.classList.toggle('toggle-nav--open')
}
