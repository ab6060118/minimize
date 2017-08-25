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
    position: 'fixed',
    height: '500px',
    width: '40vw',
    top: '15vh',
    right: '30vw',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, .4)',
    transition: 'top .3s, right .3s',
  },
  tool: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
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
  if(window.data('min') == true) {
    tool.css({top: '0'})
    window.css({width: '40vw'})
    window.css({top: '15vh'})
    window.css({right: '30vw'})
    window.data('min', false)
  }
  else {
    tool.css({top: '-30px'})
    window.css({width: '180px'})
    window.css({top: '100vh'})
    window.css({right: '0'})
    window.data('min', true)
  }
});

$('body').css(style.body).append(container)
