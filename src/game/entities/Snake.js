import Point from '../../geometry/Point'
import PointList from '../../geometry/PointList'

class Snake {
  constructor(size, headPosition) {
    this.tail
    this.head
    this.body
    this.pointList = new PointList()

    this.direction = getRandomDirection()

    for (let i = 0; i < size; i++) {
      const snakeCeil = headPosition.clone()

      switch (this.direction) {
        case 'up':
          snakeCeil.y += i
          break
        case 'down':
          snakeCeil.y -= i
          break
        case 'left':
          snakeCeil.x += i
          break
        case 'right':
          snakeCeil.x -= i
          break
      }
      this.pointList.push(snakeCeil)
    }

    this.tail = this.pointList.points[this.pointList.points.length - 1]
    this.head = this.pointList.points[0]
  }

  setDirection(newDirection) {
    const isOppositeDirection =
      (newDirection === 'up' && this.direction === 'down') ||
      (newDirection === 'down' && this.direction === 'up') ||
      (newDirection === 'left' && this.direction === 'right') ||
      (newDirection === 'right' && this.direction === 'left')

    if (!isOppositeDirection) {
      this.direction = newDirection
    }
  }

  move() {
    this.pointList.points.unshift(this.tail)

    switch (this.direction) {
      case 'up':
        this.tail.x = this.head.x
        this.tail.y = this.head.y - 1
        break
      case 'down':
        this.tail.x = this.head.x
        this.tail.y = this.head.y + 1
        break
      case 'left':
        this.tail.x = this.head.x - 1
        this.tail.y = this.head.y
        break
      case 'right':
        this.tail.x = this.head.x + 1
        this.tail.y = this.head.y
        break
    }
    this.tail = this.pointList.points.splice(this.pointList.points.length - 1, 1)
    this.head = this.pointList.points[0]
  }
}

function getRandomDirection() {
  return ['up', 'down', 'left', 'right'][Math.round(Math.random() * 3.499)]
}

export default Snake
