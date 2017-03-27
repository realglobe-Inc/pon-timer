/**
 * Timer for pon
 * @module pon-timer
 */

'use strict'

const create = require('./create')
const PonTimer = require('./pon_timer')

let lib = create.bind(this)

Object.assign(lib, PonTimer, {
  create,
  PonTimer
})

module.exports = lib
