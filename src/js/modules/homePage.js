import {homeContentBtn, jsHomeEl, widthScreen} from '../utils/constants'

export default function homePage() {
  if (!homeContentBtn) return false

  if (widthScreen <= 575) {
    jsHomeEl.append(homeContentBtn)
  }
}
