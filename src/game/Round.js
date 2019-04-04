import PoligonMap from '../geometry/PoligonMap'
import Snake from './entities/Snake'
import Field from './entities/Field'
import Food from './entities/Food'
import Timer from './Timer'

class Round {
  constructor(config, canvas, keyboardController) {
    this.config = config
    this.canvas = canvas
    this.keyboardController = keyboardController

    this.snake = new Snake()
    this.field = new Field(config.field.width, config.field.height)
    this.food = new Food()

    this.poligonMap = new PoligonMap(config.field.width, config.field.height)

    this.timer = new Timer()
    this.timer.stepDelta = config.stepMS
    this.timer.onTimeout(this.step)

    this.step = this.step.bind(this)
  }

  start() {
    this.timer.start()
  }

  step() {}

  end() {}
}

export default Round
