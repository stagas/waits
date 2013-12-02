
/**
 * Example.
 */

var waits = require('./');

var i = 0;

var fn = waits(next);

async(fn());
async(fn());
async(fn());
async(fn(function(x){
  i += x;
}));

function next(){
  console.log(i); // => 7
}

function async(fn){
  setTimeout(fn, Math.random() * 1000, i++);
}
