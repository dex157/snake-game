import App from './App'

function main() {
  const app = new App()
  app.start()
}

function onContentLoaded() {
  document.removeEventListener('DOMContentLoaded', onContentLoaded)
  main()
}

document.addEventListener('DOMContentLoaded', onContentLoaded)
