import Round from './game/Round'
import Canvas from './view/Canvas'
import config from './config'

function main() {
  const canvas = new Canvas()
  const round = new Round(config, canvas)

  round.start()
}

main()
