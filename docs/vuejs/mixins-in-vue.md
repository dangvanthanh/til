# Mixins in Vue.js

## Example component

```javascript
// Modal
const Modal = {
  template: '#modal',
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggle() {
      this.isShowing = !this.isShowing;
    }
  }
};

// Tooltip
const Tooltip = {
  template: '#tooltip',
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggle() {
      this.isShowing = !this.isShowing;
    }
  }
};
```

## Using mixins

```javascript
const toggle = {
  data () {
    return {
      isShowing: false
    }
  },
  methods: {
    this.isShowing = !this.isShowing
  }
}

const Modal = {
  template: '#modal',
  mixins: [toggle]
}

const Tooltip = {
  template: '#tooltip',
  mixins: [toggle]
}
```
