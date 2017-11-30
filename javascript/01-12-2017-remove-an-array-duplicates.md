# Remove an Array duplicates

## Using a Array.forEach

```
const removeArrayDuplicates = arr => {
  const o = {}
  arr.forEach(item => o[item] = item)
  return Object.values(o)
}
```

## Using a Array.reduce

```
const removeArrayDuplicates = arr => Object.values(
  arr.reduce((acc, item) => Object.assign(acc, { [item]: item }), {})
)
```

## Using Array.filter

```
const removeArrayDuplicates = arr => arr.filter(
  (item, index) => !arr.slice(0, index).find(e => e === item)
)
```

## Using Array.reduce, Array.indexOf and Array.concat

```
const removeArrayDuplicates = arr => arr.reduce(
  (acc, item) => !~acc.indexOf(item) ? acc.concat([item]) : acc, []
)
```

## Using Array.filter and Array.indexOf

```
const removeArrayDuplicates = arr => arr.filter(
  (item, index) => arr.indexOf(item) === index
)
```

## Using Set and spread

```
const removeArrayDuplicates = arr => [...new Set(arr)]
```
