import PointList from '../../geometry/PointList'

class Food {
  constructor() {
    this.pointList = new PointList()
    this.max = null
  }

  setMax(max) {
    this.max = max
  }

  add(point) {
    this.pointList.push(point)
  }

  remove(point) {
    this.pointList.remove(point)
  }

  getCount() {
    return this.pointList.length()
  }
}

export default Food
