module.exports = {
  style: {
    window: {
      position: 'fixed',
      height: '500px',
      width: '40vw',
      top: '15vh',
      right: '30vw',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, .4)',
      // transition: 'top .3s, right .3s',
    },
    tool: {
      position: 'absolute',
      backgroundColor: 'white',
      width: '100%',
      height: '30px',
      borderBottom: '1px solid black',
      cursor: 'move',
    },
    toolBtn: {
      float: 'right',
      padding: '3px',
      border: '1px solid black',
      cursor: 'pointer',
    },
    title: {
      fontSize: '1.5rem',
    }
  },

  _getDraggableWindow: function(window) {
    const dRec = {
      x: undefined,
      y: undefined,
    };

    window.on('mousedown', '.tool', function(e) {
      const p = window.position()
      dRec.x = p.left - e.pageX
      dRec.y = p.top - e.pageY


      $('body').on('mousemove', function(e) {

        window.css('top', e.pageY +  dRec.y)
        window.css('left', e.pageX +  dRec.x)
        console.log(p.top);
      })
    })

    $('body').on('mouseup', function(e) {
      $('body').off('mousemove')
    })

    return window
  },

  getWindow: function() {
    const window = $('<div class="window">').css(this.style.window)
    const tool = $('<div class="tool">').css(this.style.tool)
    const title = $('<span>').css(this.style.title)
    const min = $('<span>').css(this.style.toolBtn)

    title.text('Window')
    min.text('-')
    tool.append(title, min)
    window.append(tool)

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

    return this._getDraggableWindow(window)
  }
}
