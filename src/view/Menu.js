class Menu {
  constructor() {
    this.containerElement = document.querySelector('menu')
    this.newGameCallback
  }

  show({ newGameCallback }) {
    this.newGameCallback = newGameCallback
    this.containerElement.classList.remove('hidden')
    this.containerElement.querySelector('button').addEventListener('click', this.newGameCallback)
  }

  hide() {
    this.containerElement.querySelector('button').addEventListener('click', this.newGameCallback)
    this.containerElement.classList.add('hidden')
  }
}

export default Menu
