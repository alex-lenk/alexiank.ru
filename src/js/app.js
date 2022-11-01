import * as flsFunctions from './modules/isWebp'
import toggleMenu from './modules/toggleMenu'
import homePage from './modules/homePage'

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp()

  toggleMenu()
  homePage()
})
