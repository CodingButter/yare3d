export default class Emitter {
  private events: any
  constructor() {
    this.events = {}
  }

  on(type, listener: any) {
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
  }

  emit(type: string, ...args: any[]) {
    if (this.events[type]) {
      this.events[type].forEach((listener: any) => {
        listener(...args)
      })
    }
  }
}
