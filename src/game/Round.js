import Snake from './entities/Snake'
import Field from './entities/Field'
import Food from './entities/Food'
import Point from '../geometry/Point'
import enitityToView from './entityToView'
import Timer from './Timer'

class Round {
  constructor(config, roundStatistic, canvas, keyboardController) {
    this.config = config
    this.canvas = canvas
    this.roundStatistic = roundStatistic
    this.onEndGameCallback
    this.keyboardController = keyboardController

    this.step = this.step.bind(this)

    this.field = new Field(config.field.width, config.field.height)
    const fieldCenter = this.field.getCenter()
    this.snake = new Snake(config.startSnakeSize, fieldCenter)

    this.food = new Food()
    this.food.setMax(this.roundStatistic.food)

    this.timer = new Timer()
    this.timer.stepDelta = this.roundStatistic.stepMS
    this.timer.onTimeout(this.step)
  }

  onEndGame(callback) {
    this.onEndGameCallback = callback
  }

  start() {
    this.addFood()

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
      return this.end()
    } else if (this.snake.isSuicide()) {
      return this.end()
    } else if (this.food.pointList.isIntersectPoint(this.snake.head)) {
      this.food.remove(this.snake.head)
      this.roundStatistic.addPoints()
      this.food.setMax(this.roundStatistic.food)
      this.timer.stepDelta = this.roundStatistic.stepMS
      this.addFood()
      this.snake.grow()
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

  addFood() {
    while (this.food.getCount() < this.roundStatistic.food) {
      const freePoint = Point.getFreePoint(
        this.config.field.width,
        this.config.field.height,
        this.snake.pointList.concat(this.field.pointList).concat(this.food.pointList).points
      )
      this.food.add(freePoint)
    }
  }
}

export default Round
