'use strict'

const ponTimer = require('pon-timer')

async function tryExample () {
  let timer = ponTimer()
  timer.tick('project:your-task-name') // Start tick to measure
  /* ... */
  let took = timer.tick('project:your-task-name') // Measure from last tick
  console.log(`The task took ${took}ms`)
}

tryExample()
