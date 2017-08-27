const fn = require('./fn.js')

const style = {
  body: {
    margin: '0',
  },
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
}

const container = $('<div class="container">').css(style.container)
const window = fn.getWindow();
const window1 = fn.getWindow();

container.append(window, window1)

$('body').css(style.body).append(container)
