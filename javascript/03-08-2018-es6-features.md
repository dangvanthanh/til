# ES6 Features

### Let and Const

Using `var`

```javascript
function test () {
  foo = 2

  for (var i = 0; i < 5; ++i) {
    var foo = i
  }
}



test()
console.log(foo) // foo is not defined
```

But if you using `let`

```javascript
function test () {
  foo = 2

  for (var i = 0; i < 5; ++i) {
    let foo = i
  }
}

test()
console.log(foo) // 2
```

Using `const`

```javascript
var foo = 3
foo = ['abc', 'def'] // foo is now bound to an array object

const bar = 3
bar = ['abc', 'def'] // TypeError: assignment to const variable
```

### Arrow functions and lexical this

```javascript
[5, 10, 15, 20].forEach(function (number, ind) {
  console.log(number)
}) 

// Using arrow functions
[5, 10, 15, 20].forEach((number, ind) => {
  console.log(number)
}) 
```

### Classes

```javascript
class Vehicle {
  constructor (type, color) {
    this.type = type
    this.color = color
  }

  get Color () {
    return color
  }
}
```

### Object-literal Improvements

```javascript
function getLaptop (make, model, year) {
  return {
    make,
    model,
    year
  }
}

getLaptop('Apple', 'Macbook', '2014') // { make: 'Apple', model: 'Macbook', year: '2014' }
```

### Template String Literals

```javascript
var city = 'Sai Gon'
var str = 'I bike around ' + city

let newStr = 'I bike around ${city}'
```

### Generators, iterators, iterables and for...of

#### Generators

```javascript
function* Counter () {
  let i = 0

  while (true) {
    const reset = yield i++
    if (reset) {
      i = 0
    }
  }
}

const gen = Counter()
console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next(true).value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
```

#### Iterators

```javascript
function arrayIterator (arr) {
  var i = 0
  return {
    next: function () {
      return arr[i++]
    },
    ended: i >= arr.length,
    reset: function () {
      i = 0
    }
  }
}

var data = [0, 1, 2, 3, 4]
var iter = arrayIterator(data)
console.log(iter.next()) // 0
console.log(iter.next()) // 1 
console.log(iter.next()) // 2 
```

### Default Arguments and the Rest Operator

```javascript
function request (url, method = 'GET') {
  // Todo
}
```

```javascript
function manyArgs (a, b, ...args) {
  // args = ['Hello', 'World', true]
}

manyArgs(1, 2, 'Hello', 'World', true)
```

### Spread Syntax

```javascript
const first = [1, 2, 3, 4]
const seconds = [-2, -1, 0, ...first, 5, 6, 7]

const arrCopy = [...first] // [1, 2, 3, 4]
```

### Destructuring

```javascript
let arr = [1, 2, 3, 4, 5]
let [a, b, ...rest] = arr
console.log(a) // 1
console.log(b) // 2
console.log(rest) // [3, 4, 5]
```

### Modules

### Collections

`Set`, `Map`, `WeakSet`, `WeakMap`

### Object Proxies

### Reflection

### Symbols

### Typed Arrays

### Minor Features

### Async/Await

### Single Intrution Multiple Data (SIMD)

### Asynchronous Iteration
