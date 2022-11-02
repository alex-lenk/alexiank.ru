export default class App {
  #components

  constructor(settings) {
    this.#components = settings
  }

  run() {
    this.#components.forEach(instance => new instance().trigger())
  }
}
