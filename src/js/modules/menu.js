import throttle from '../generic.js'

(function() {

  const menu = {
    btn: document.querySelector('.js-header-nav-btn'),
    list: document.querySelector('.js-header-nav-menu')
  }

  const state = {
    isActive: false
  }

  initHandlers()

  function resetState() {
    state.isActive = false
  }

  function initHandlers() {
    menu.btn.addEventListener('click', toggleMenu)
    document.addEventListener('click', e => {
      if (!menu.list.contains(e.target) && e.target != menu.btn) {
        hideMenu()
      }

      if (e.target.classList.contains('header-nav-adaptive__link')) {
        hideMenu()
      }
    })
    window.addEventListener('resize', throttle(() => {

      if (document.body.clientWidth > 992) {
        resetState()
        hideMenu()
      }
    }, 250))
  }

  function toggleMenu() {
    state.isActive ? hideMenu() : showMenu()
  }

  function showMenu() {
    state.isActive = true
    menu.list.classList.add('header-nav-adaptive_visible')
  }

  function hideMenu() {
    state.isActive = false
    menu.list.classList.remove('header-nav-adaptive_visible')
  }

}())

