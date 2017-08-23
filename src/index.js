const style = {
  body: {
    margin: '0',
  },
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  window: {
    position: 'absolute',
    height: '60vh',
    width: '40vw',
    top: '15vh',
    left: '30vw',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, .4)',
    transition: 'height 3s',
  },
  tool: {
    height: '30px',
    borderBottom: '1px solid black',
  },
  toolBtn: {
    float: 'right',
    padding: '3px',
    border: '1px solid black',
    cursor: 'pointer',
  },
  title: {
    fontSize: '1.5rem'
  }
}

const container = $('<div class="container">').css(style.container)
const tool = $('<div class="tool">').css(style.tool)
const window = $('<div class="window">').css(style.window)
const min = $('<span>').css(style.toolBtn)
const title = $('<span>').css(style.title)

title.text('Window')
min.text('-')
tool.append(title, min)
window.append(tool)
container.append(window)

min.click(function() {
  window.css({height: '30px'})
});

$('body').css(style.body).append(container)
