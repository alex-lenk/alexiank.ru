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
    stackBuild: `${srcFolder}/assets/img/`,
  },
  src: {
    js: `${srcFolder}/js/index.js`,
    images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,webp}`,
    imagesSrc: `${srcFolder}/assets/`,
    svg: `${srcFolder}/assets/img/**/*.svg`,
    scss: `${srcFolder}/scss/styles.scss`,
    html: `${srcFolder}/*.html`,
    fonts: `${srcFolder}/assets/fonts/**/*.*`,
    favicons: `${srcFolder}/assets/favicons/**/*.*`,
    svgIcons: `${srcFolder}/assets/icons/*.svg`,
    stackSrc: `${srcFolder}/assets/stack/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,svg,webp}`
  },
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}
