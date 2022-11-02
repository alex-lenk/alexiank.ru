import Component from '../core/Component'
import {tabNav} from '../constants'

export default class Tab extends Component {
  constructor() {
    super('Tab')
  }

  trigger() {
    if (!tabNav) return false

    tabNav.addEventListener('click', ({target, currentTarget}) => {
      if (target.classList.contains('tab__nav-item--active')) return false

      const getActiveEl = currentTarget.querySelector('.tab__nav-item--active')
      const getIdActive = getActiveEl.dataset.tab
      const getTabId = target.dataset.tab

      if (!getTabId) {
        console.error(`не заполнен или отсутствует атрибут data-tab="id" у селектора ${getTabId.classList[0]}`)
        return false
      }

      Tab.toggleTabNav(target, getActiveEl)
      Tab.toggleTabContent(getIdActive, getTabId)
    })
  }

  static toggleTabNav(target, activeEl) {
    target.classList.add('tab__nav-item--active')
    activeEl.classList.remove('tab__nav-item--active')
  }

  static toggleTabContent(idActive, id) {
    const selectorIDActive = document.querySelector(idActive)
    const selectorID = document.querySelector(id)
    selectorIDActive.classList.remove('tab__content--active')
    selectorID.classList.add('tab__content--active')
  }
}
