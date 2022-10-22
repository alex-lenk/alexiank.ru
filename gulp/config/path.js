import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
  build: {
    js: `${buildFolder}/assets/js/`,
    css: `${buildFolder}/assets/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/img/`,
    fonts: `${buildFolder}/assets/fonts/`,
    favicons: `${buildFolder}/assets/favicons/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    favicons: `${srcFolder}/favicons/**/*.*`,
    svgIcons: `${srcFolder}/icons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,webp}`,
    favicons: `${srcFolder}/favicons/**/*.*`
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}
