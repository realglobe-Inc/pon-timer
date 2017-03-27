'use strict'

const ponTimer = require('pon-timer')

async function tryExample () {
  let timer = ponTimer()
  timer.tick()
  /* ... */
  let millisecondsFromLastTick = timer.tick()
  console.log(`The task took ${millisecondsFromLastTick}ms`)
}

tryExample()
