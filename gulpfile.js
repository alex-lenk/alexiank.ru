import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Импорт задач
import { favicons } from './gulp/tasks/favicons.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { fontStyle } from './gulp/tasks/fonts.js'
import { sprite } from './gulp/tasks/sprite.js'

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.favicons, favicons)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}

export { sprite }

const mainTasks = gulp.series(gulp.parallel(fontStyle, favicons, html, scss, js, images))

const dev = gulp.series(mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(mainTasks)

export { dev }
export { build }

gulp.task('default', dev)
