# Max and min from array

## Max value from array

```javascript
// ES5
const arrayMax = function (arr) {
  return Math.max.apply(null, arr)  
}

// ES6
const arrayMax = arr => Math.max(...arr)
```

## Min value from array

```javascript
// ES5
const arrayMin = function (arr) {
  return Math.min.apply(null, arr)  
}

// ES6
const arrayMin = arr => Math.min(...arr)
```
