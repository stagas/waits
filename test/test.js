
/**
 * Test.
 */

var assert = require('assert');
var waits = require('../');

var i = 0;

var fn = waits(next);

async(fn());
async(fn());
async(fn());
async(fn(function(x){
  i += x;
}));

function next(){
  assert(7 === i);
  console.log('OK');
}

function async(fn){
  setTimeout(fn, Math.random() * 1000, i++);
}
