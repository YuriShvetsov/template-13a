{

  const reviews = document.querySelector('.js-reviews-slider')
  const elements = initElements()
  const state = initState()

  INIT()

  function INIT() {
    setWidth(state.slideWidth)
    initHandlersControls()
  }

  function initElements() {
    return {
      items: reviews.querySelectorAll('.js-reviews-slider-item'),
      controls: {
        prev: reviews.querySelector('.js-reviews-slider-prev-btn'),
        next: reviews.querySelector('.js-reviews-slider-next-btn')
      },
      track: reviews.querySelector('.js-reviews-slider-track'),
      wrapper: reviews.querySelector('.js-reviews-slider-wrapper')
    }
  }

  function initState() {
    return {
      length: elements.items.length,
      curPos: 0,
      curSlide: 0,
      slideWidth: elements.wrapper.clientWidth
    }
  }

  function setWidth(width) {
    elements.track.style.width = width * elements.items.length + 'px'
    elements.items.forEach(item => {
      item.style.width = width + 'px'
    })
  }

  function initHandlersControls() {
    let down = false
    elements.controls.prev.addEventListener('click', showPrevSlide)
    elements.controls.next.addEventListener('click', showNextSlide)
    document.addEventListener('keydown', e => {
      if (down) return
      down = true

      if (e.keyCode == 37) {
        showPrevSlide()
      }

      if (e.keyCode == 39) {
        showNextSlide()
      }

      setTimeout(function () {
        down = false
      }, 800)
    })
  }

  function showPrevSlide() {
    if (state.curPos === 0) return

    state.curSlide--
    state.curPos = -state.curSlide * state.slideWidth
    elements.track.style.transform = `translateX(${state.curPos}px)`
  }

  function showNextSlide() {
    if (state.curPos === -state.slideWidth * (state.length - 1)) return

    state.curSlide++
    state.curPos = -state.curSlide * state.slideWidth
    elements.track.style.transform = `translateX(${state.curPos}px)`
  }

  function updateSizes() {
    state.slideWidth = elements.wrapper.clientWidth
    state.curPos = -state.curSlide * state.slideWidth
    elements.track.style.transform = `translateX(${state.curPos}px)`
    setWidth(state.slideWidth)
  }

  window.addEventListener('resize', updateSizes)

}