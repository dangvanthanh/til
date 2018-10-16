# Async/Await Array Map

```javascript
const lists = [1, 2, 3, 4, 5];

const promiseFunc = item => {
  return Promise.resolve();
};

const asyncFunc = async item => {
  return await promiseFunc(item);
};

const getData = async () => {
  return await Promise.all(lists.map(item => asyncFunc(item)));
};

const data = getData();
console.log(data);
```
