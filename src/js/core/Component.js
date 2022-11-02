export default class Component {
  constructor(type) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    this.type = type
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }
}
