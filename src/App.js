import Round from './game/Round'
import KeyboardController from './system/KeyboardController'
import Canvas from './view/Canvas'
import Menu from './view/Menu'
import config from './config'

class App {
  constructor() {
    this.canvas = new Canvas()
    this.keyboardController = new KeyboardController()
    this.menu = new Menu()

    this.onEndRound = this.onEndRound.bind(this)
    this.restart = this.restart.bind(this)
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
    this.round = new Round(config, this.canvas, this.keyboardController)
    this.round.onEndGame(this.onEndRound)
    this.canvas.unfade()
    this.keyboardController.listen()
    this.round.start()
  }
}

export default App
