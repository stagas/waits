
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

function next(){
  console.log(i); // => 3
}

function async(fn){
  i++;
  setTimeout(fn, Math.random() * 1000);
}
```

## API

### fn = waits(next)

Factories a callback factory that will
call `next` when all callback.

## Is it any good?

To describe it you need to use 'factory' and 'callback' twice
in a sentence. So, yes, it must be good.

## License

MIT
