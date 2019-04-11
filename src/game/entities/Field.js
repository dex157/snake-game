import Point from '../../geometry/Point'
import PointList from '../../geometry/PointList'

class Field {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.pointList = new PointList()

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (x === 0 || x === width - 1) this.pointList.push(new Point(x, y))
        else if (y === 0 || y === height - 1) this.pointList.push(new Point(x, y))
      }
    }
  }

  getCenter() {
    return new Point(Math.ceil(this.width / 2), Math.ceil(this.height / 2))
  }
}

export default Field
