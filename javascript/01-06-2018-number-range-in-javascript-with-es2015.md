# Create list number range in JavaScript with ES2015

```javascript
[...Array(6).keys()]
// [0, 1, 2, 3, 4, 5]

Array.from({ length: 6 }).map((_, i) => i)
// [0, 1, 2, 3, 4, 5]

Array(6).fill().mapp((_, i) => i)
// [0, 1, 2, 3, 4, 5]
```
