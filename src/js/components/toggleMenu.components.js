import {jsToggleMenu, body} from '../constants'
import Component from '../core/Component'

export default class ToggleMenu extends Component {
  constructor() {
    super('ToggleMenu')
  }

  trigger() {
    if (!jsToggleMenu) return false
    jsToggleMenu.addEventListener('click', () => ToggleMenu.toggleClassMenu())
  }

  static toggleClassMenu() {
    body.classList.toggle('nav__open')
    jsToggleMenu.classList.toggle('toggle-nav--open')
  }
}
