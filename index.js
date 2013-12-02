
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
  return function(fn){
    c++;
    return function(){
      fn && fn.apply(this, arguments);
      --c || next();
    };
  };
}
