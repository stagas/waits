
/**
 * Example.
 */

var waits = require('./');

var i = 0;

var fn = waits(next);

async(fn());
async(fn());
async(fn());

function next(){
  console.log(i); // => 3
}

function async(fn){
  i++;
  setTimeout(fn, Math.random() * 1000);
}
