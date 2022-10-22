import replace from 'gulp-replace' // Поиск и замена
import plumber from 'gulp-plumber' // Обработка ошибок
import notify from 'gulp-notify' // Сообщения
import browserSync from 'browser-sync' // Сервер
import newer from 'gulp-newer' // Проверка обновления файлов
import ifPlugin from 'gulp-if' // Условное ветление в задачах

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin
}
