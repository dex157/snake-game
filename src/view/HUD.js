class HUD {
  constructor() {
    this.level = null
    this.points = null
    this._container = document.querySelector('#hud')
  }

  setLevel(lvl) {
    this._container.querySelector('#level').innerHTML = `Level: ${lvl}`
  }

  setScore(score) {
    this._container.querySelector('#score').innerHTML = `Score: ${score}`
  }
}

export default HUD
