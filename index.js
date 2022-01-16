// add a * to make it a generator
function* count() {
  //yield means pause
  yield 1;
  yield;
  yield 3;
}

// this will return the generator object
var generator = count();

// this has a property called next
generator.next();
console.log(generator.next(), generator.next(), generator.next())

function* add() {
  const num = yield;
  yield 2 + num;
  yield 4 + num;
}

var generator = add();

console.log(generator.next());
console.log(generator.next(2));
console.log(generator.next());
console.log(generator.next());

function* forever(num) {
  // this will only run when I call generator.next()
  while (true) {
    num = yield 2 + num;
  }
}

function* outer() {
  yield 1;
  yield* inner();
  yield 2;
}

function* inner() {
  yield "a";
  yield "b";
}