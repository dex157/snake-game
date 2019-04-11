class PointList {
  constructor(points = []) {
    this.points = points
  }

  push(point) {
    this.points.push(point)
  }

  isIntersectPoint(point) {
    return this.points.find(({ x, y }) => point.x === x && point.y === y) !== undefined
  }
}

export default PointList
