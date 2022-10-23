import {jsToggleMenu, body} from '../utils/constants'

export default function toggleMenu() {
  jsToggleMenu.addEventListener('click', () => toggleClassMenu())
}

function toggleClassMenu() {
  body.classList.toggle('nav__open')
  jsToggleMenu.classList.toggle('header__toggle--open')
}
