class KeyboardController {
  constructor() {
    this.handleKeyEvent = this.handleKeyEvent.bind(this)
    this.lastPressedArrow = null
  }

  listen() {
    window.addEventListener('keydown', this.handleKeyEvent)
  }

  unlisten() {
    window.removeEventListener('keydown', this.handleKeyEvent)
  }

  handleKeyEvent(event) {
    switch (event.keyCode) {
      case 37:
        this.lastPressedArrow = 'left'
        break
      case 39:
        this.lastPressedArrow = 'right'
        break
      case 38:
        this.lastPressedArrow = 'up'
        break
      case 40:
        this.lastPressedArrow = 'down'
        break
    }
  }
}

export default KeyboardController
