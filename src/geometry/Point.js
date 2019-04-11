class Point {
  static getFreePoint(maxX, maxY, excludePoints = []) {
    const matrix = Array.from(new Array(maxY), () => Array.from(new Array(maxX), () => 0))
    // console.log(matrix, excludePoints)

    excludePoints.forEach(point => {
      matrix[point.y][point.x] = 1
    })

    const freePoints = []

    matrix.forEach((column, y) => {
      column.forEach((val, x) => {
        if (val === 0) {
          freePoints.push(new Point(x, y))
        }
      })
    })

    if (freePoints.length === 0) {
      return null
    }

    const freePoint = freePoints[Math.round(Math.random() * (freePoints.length - 1))]
    return freePoint
  }

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  clone() {
    return new Point(this.x, this.y)
  }
}

export default Point
