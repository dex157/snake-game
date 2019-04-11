import Snake from './entities/Snake'
import Field from './entities/Field'
import Food from './entities/Food'
import PointList from '../geometry/PointList'

function entityToView(entity) {
  if (entity && entity.pointList instanceof PointList) {
    if (entity instanceof Snake) {
      return [entity.pointList, { borderColor: 'black', backgroundColor: 'transparent' }]
    } else if (entity instanceof Field) {
      return [entity.pointList, { borderColor: 'black', backgroundColor: 'black' }]
    } else if (entity instanceof Food) {
      return [entity.pointList, { borderColor: 'red', backgroundColor: 'red' }]
    } else {
      return [entity.pointList, { borderColor: 'green', backgroundColor: 'green' }]
    }
  } else {
    throw new Error('arg[0] hasn\'t property pointList or undefined')
  }
}

export default entityToView
