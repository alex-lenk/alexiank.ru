import App from './core/App'
import ToggleMenu from './components/toggleMenu.components'
import HomePage from './components/homePage'

const app = new App([
  ToggleMenu,
  HomePage
])

app.run()
