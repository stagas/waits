
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

function next(){
  assert(3 === i);
  console.log('OK');
}

function async(fn){
  i++;
  setTimeout(fn, Math.random() * 1000);
}
