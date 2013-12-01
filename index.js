
/*!
 *
 * waits
 *
 * callback factory factory that proceeds when all callback
 *
 * MIT
 *
 */

/**
 * Expose `waits`.
 */

module.exports = waits;

/**
 * Factories a callback factory that will
 * call `next` when all callback.
 *
 * @param {Function} next
 * @return {Function}
 * @api public
 */

function waits(next){
  var c = 0;
  return function(){
    c++;
    return function(){
      --c || next();
    };
  };
}
