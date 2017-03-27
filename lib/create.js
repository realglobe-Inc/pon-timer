/**
 * Create a PonTimer instance
 * @function create
 * @param {...*} args
 * @returns {PonTimer}
 */
'use strict'

const PonTimer = require('./pon_timer')

/** @lends create */
function create (...args) {
  return new PonTimer(...args)
}

module.exports = create
