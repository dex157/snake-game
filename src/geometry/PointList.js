class PointList {
  concat(pointList) {
    return new PointList(this.points.concat(pointList.points))
  }

  constructor(points = []) {
    this.points = points
  }

  push(point) {
    this.points.push(point)
  }

  isIntersectPoint(point) {
    return this.points.find(({ x, y }) => point.x === x && point.y === y) !== undefined
  }

  remove(point) {
    this.points = this.points.filter(p => p.x !== point.x && p.y !== point.y)
  }

  length() {
    return this.points.length
  }
}

export default PointList
