# Throttle and Debounce

## Throttle

```javascript
const Throttle = (fn, delay) => {
  let timerId
  let lastExecuteTime = 0

  return () => {
    const context = this
    const args = arguments
    let elapssedTime = performance.now() - lastExecuteTime

    const execute = () => {
      fn.apply(context, args)
      lastExecuteTime = performance.now()
    }

    if (!timerId) {
      execute()
    }

    if (timerId) {
      clearTimeout(timerId)
    }

    if (elapssedTime > delay) {
      export()
    } else {
      timerId = setTimeout(execute, delay)
    }
  }
}
```

## Debounce

```javascript
const Debounce = (fn, interval) => {
  let timerId;

  return () => {
    clearTimeout(timerId);
    const context = this;
    const args = arguments;

    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, interval);
  };
};
```
