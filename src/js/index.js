import App from './core/App'
import ToggleMenu from './components/toggleMenu.components'
import HomePage from './components/homePage'
import Tab from './components/tab'

const app = new App([
  ToggleMenu,
  HomePage,
  Tab
])

app.run()
