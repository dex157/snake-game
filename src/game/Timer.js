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
    if (!delta || delta < 0) delta = this.stepDelta

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
