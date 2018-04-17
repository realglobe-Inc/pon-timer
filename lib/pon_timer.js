/**
 * Timer for pon
 * @augments AsTimer
 * @class PonTimer
 */
'use strict'

const { AsTimer } = require('astimer')

/** @lends PonTimer */
class PonTimer extends AsTimer {

  constructor () {
    super(...arguments)
    this._ticks = {}
  }

  /**
   * Returns time passed from last tick
   * @param {string} [name='default'] - Tick name
   * @returns {?number} Milliseconds from last tick. Null for first time
   */
  tick (name = 'default') {
    const last = this._ticks[ name ]
    const now = new Date()
    this._ticks[ name ] = now
    return last ? now - last : null
  }
}

module.exports = PonTimer
