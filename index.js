/**
   * Throws an error if a required parameter is not set.
   * @param {String} message Name of the parameter
   * @return {Error} Error message with the parameter name.
*/

function throwIfMissing (message) {
  throw new Error(`Missing parameter ${message}`)
}

/**
   * Plugin to limit the number of top level blocks
   *
   * @param {Object} options Object with settings
   * @param {Function} overLimitCb The function to be invoked on over limit
   * @param {Function} inLimitCb The function to be invoked on in limit
   * @return {Object} an object with keys that map to the Editor's parameters
*/

function topLevelBlockLimiter (options = throwIfMissing('options'), overLimitCb = throwIfMissing('overLimitCb'), inLimitCb) {
  if (!options.limit || isNaN(options.limit)) throw new Error('A limit is not set or is not a number')
  return {
    onChange (change) {
      var topLevelBlocksLength = props.value.document.nodes.size
      if (topLevelBlocksLength > options.limit) {
        overLimitCb(change)
      } else {
        if (inLimitCb) inLimitCb(change)
      }
    }
  }
}

export default topLevelBlockLimiter
