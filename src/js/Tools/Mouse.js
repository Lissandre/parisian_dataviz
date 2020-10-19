import EventEmitter from './EventEmitter.js'

export default class Mouse extends EventEmitter {
  constructor() {
    // Get parent methods
    super()

    // Set up
    this.position = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
    this.oldPosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
    document.addEventListener('mousemove', (_event) => {this.mousemove(_event)})
  }
  // on('mousemove')
  mousemove(_event) {
    this.oldPosition = this.position
    this.position = {
      x: _event.clientX, 
      y: _event.clientY
    }
    this.delta = {
      x: this.position.x - this.oldPosition.x,
      y: this.position.y - this.oldPosition.y
    }
    console.log(this.delta.x, this.delta.y);
    this.trigger('mousemove')
  }
  // Cancel animation frame
  stop() {
    document.removeEventListener('mousemove')
  }
}