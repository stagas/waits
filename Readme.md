
# waits

callback factory factory that proceeds when all callback

## Installing

`npm install waits`

## Example

```js
var waits = require('waits');

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
```

## API

### fn = waits(next)

Factories a callback factory that will
call `next` when all callback.

### callback = fn([cb])

Returns the callback, optionally pass `cb` to handle results if needed.

## Is it any good?

To describe it you need to use 'factory' and 'callback' twice
in a sentence. So, yes, it must be good.

## License

MIT
