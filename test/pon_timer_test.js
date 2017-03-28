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
    timer.tick('foo')
    yield timer.sleep(100)
    timer.tick('bar')
    yield timer.sleep(100)
    ok(timer.tick('foo') >= 200)
    ok(timer.tick('bar') <= 200)
  }))
})

/* global describe, before, after, it */
