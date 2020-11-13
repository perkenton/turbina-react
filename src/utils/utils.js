const throttle = (callback, limit) => {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  }
}

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const second = Math.floor(time % 60);
  const seconds = second < 9 ? `0${second}` : second

  return `${minutes}:${seconds}`
}

export {throttle, formatTime};