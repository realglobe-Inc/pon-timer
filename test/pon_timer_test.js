/**
 * Test case for ponTimer.
 * Runs with mocha.
 */
'use strict'

const PonTimer = require('../lib/pon_timer.js')
const { ok } = require('assert')
const co = require('co')

describe('pon-timer', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon timer', () => co(function * () {
    let timer = new PonTimer({})
    ok(timer)
    timer.tick()
    yield timer.sleep(100)
    ok(timer.tick() >= 100)
  }))
})

/* global describe, before, after, it */
