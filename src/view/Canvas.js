class Canvas {
  constructor() {
    this._container = document.querySelector('game')
    this.nextRenderPoints = []
  }

  addElements([pointList, { backgroundColor, borderColor }]) {
    this.nextRenderPoints.push([pointList, { backgroundColor, borderColor }])
  }

  render() {
    return new Promise(resolve => {
      window.requestAnimationFrame(() => {
        this.clean()

        for (let i = 0; i < this.nextRenderPoints.length; i++) {
          const pointList = this.nextRenderPoints[i][0]
          const styles = this.nextRenderPoints[i][1]

          pointList.points.forEach(point => {
            const div = document.createElement('div')
            div.classList.add('poligon')

            Object.keys(styles).forEach(styleName => {
              div.style[styleName] = styles[styleName]
            })

            div.style.left = `${point.x * 10}px`
            div.style.top = `${point.y * 10}px`

            this._container.appendChild(div)
          })
        }

        this.nextRenderPoints = []
        resolve()
      })
    })
  }

  fade() {
    this._container.classList.add('fade')
  }
  unfade() {
    this._container.classList.remove('fade')
  }

  clean() {
    this._container.innerHTML = ''
  }
}

export default Canvas
