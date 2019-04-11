import Round from './game/Round'
import RoundStatistic from './game/RoundStatistic'
import KeyboardController from './system/KeyboardController'
import Canvas from './view/Canvas'
import Menu from './view/Menu'
import HUD from './view/HUD'
import config from './config'

class App {
  constructor() {
    this.canvas = new Canvas()
    this.keyboardController = new KeyboardController()
    this.menu = new Menu()
    this.HUD = new HUD()

    this.onEndRound = this.onEndRound.bind(this)
    this.restart = this.restart.bind(this)
    this.updateHUD = this.updateHUD.bind(this)
  }

  onEndRound() {
    this.canvas.fade()
    this.keyboardController.unlisten()
    this.menu.show({ newGameCallback: this.restart })
  }

  restart() {
    this.menu.hide()
    this.canvas.clean()
    this.start()
  }

  start() {
    this.roundStatistic = new RoundStatistic(config.levels)
    this.round = new Round(config, this.roundStatistic, this.canvas, this.keyboardController)
    this.round.onEndGame(this.onEndRound)
    this.canvas.unfade()
    this.keyboardController.listen()
    this.round.start()

    this.roundStatistic.listen(this.updateHUD)
    this.updateHUD()
  }

  updateHUD() {
    this.HUD.setLevel(this.roundStatistic.level)
    this.HUD.setScore(this.roundStatistic.point)
  }
}

export default App
