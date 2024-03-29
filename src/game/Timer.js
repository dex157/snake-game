class Timer {
  constructor() {
    this.stepDelta = null
    this.timeoutCallback = null
    this.timeoutId = null
    this.beforeStepTS = null

    this.handleTimeout = this.handleTimeout.bind(this)
  }

  setStepDelta(ms) {
    this.stepDelta = ms
  }

  start() {
    let delta

    if (this.beforeStepTS) {
      delta = this.stepDelta - (Date.now() - this.beforeStepTS)
    }
    delta = Math.max(0, delta)

    setTimeout(this.handleTimeout, delta)
  }

  onTimeout(callback) {
    this.timeoutCallback = callback
  }

  handleTimeout() {
    this.beforeStepTS = Date.now()
    this.timeoutCallback()
  }
}

export default Timer
