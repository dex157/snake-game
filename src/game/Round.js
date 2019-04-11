import Snake from './entities/Snake'
import Field from './entities/Field'
import Food from './entities/Food'
import enitityToView from './entityToView'
import Timer from './Timer'

class Round {
  constructor(config, canvas, keyboardController) {
    this.config = config
    this.canvas = canvas
    this.onEndGameCallback
    this.keyboardController = keyboardController

    this.field = new Field(config.field.width, config.field.height)
    const fieldCenter = this.field.getCenter()
    this.snake = new Snake(config.startSnakeSize, fieldCenter)
    this.food = new Food()

    this.timer = new Timer()
    this.timer.stepDelta = config.stepMS

    this.step = this.step.bind(this)
    this.timer.onTimeout(this.step)
  }

  onEndGame(callback) {
    this.onEndGameCallback = callback
  }

  start() {
    this.canvas.addElements(enitityToView(this.field))
    this.canvas.addElements(enitityToView(this.snake))
    this.canvas.addElements(enitityToView(this.food))

    this.canvas.render().then(() => {
      this.timer.start()
    })
  }

  step() {
    if (this.keyboardController.lastPressedArrow != null) {
      this.snake.setDirection(this.keyboardController.lastPressedArrow)
    }

    this.snake.move()

    if (this.field.pointList.isIntersectPoint(this.snake.head)) {
      this.end()
      return
    }

    this.canvas.addElements(enitityToView(this.field))
    this.canvas.addElements(enitityToView(this.snake))
    this.canvas.addElements(enitityToView(this.food))

    this.canvas.render().then(() => {
      this.timer.start()
    })
  }

  end() {
    this.onEndGameCallback()
  }
}

export default Round
