import * as flsFunctions from './modules/isWebp'
import toggleMenu from './modules/toggleMenu'

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp()

  toggleMenu()
})

/* Делегирование события, ловим любой клик */
/*
document.addEventListener('click', ({target}) => {
})
*/
