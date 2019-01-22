const formatCounterTime = (seconds) => {
  let hour = Math.floor(seconds / 3600)
  let minute = Math.floor(seconds / 60)
  let second = Math.floor(seconds - minute * 60)
  hour = (hour >= 10) ? hour : `0${hour}`
  minute = (minute >= 10) ? minute : `0${minute}`
  second = (second >= 10) ? second : `0${second}`
  return `${hour}:${minute}:${second}`
}

export {
  formatCounterTime,
}

export default {
  formatCounterTime,
}
