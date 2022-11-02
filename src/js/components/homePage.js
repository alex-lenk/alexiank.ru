import {homeContentBtn, jsHomeEl, widthScreen} from '../constants'
import Component from '../core/Component'

export default class HomePage extends Component {
  constructor() {
    super('HomePage')
  }

  trigger() {
    if (!homeContentBtn) return false
    if (widthScreen <= 575) {
      jsHomeEl.append(homeContentBtn)
    }
  }
}
