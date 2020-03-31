function throttle(fn, timeout) {
  let isCalled = false

  return function() {
    if (isCalled) return

    fn.apply(null, arguments)
    isCalled = true

    setTimeout(() => isCalled = false, timeout)
  }
}

export default throttle