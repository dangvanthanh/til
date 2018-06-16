# Secret Patterns Vue.js

### Smarter Watchers

Watchers accept methods name

```javascript
export default {

}
create () {
  this.fetchUsers()
},
watch: {
  searchText: 'fetchUsers'
}
```

Can call themselves on created

```javascript
export default {

}
watch: {
  searchText: {
    handler: 'fetchUsers',
    immediate: true
  }
}
```

### Component Registration

```javascript
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';
import BaseInput from './BaseInput';

export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
};
```

### Modules Registration

```javascript
import auth from './modules/auth';
import posts from './modules/posts';
import comments from './modules/comments';

export default new Vuex.Store({
  modules: {
    auth,
    posts,
    comments
  }
});
```

### Cleaner Views

```javascript
export default {
  data () {
    return {
      loading: false,
      error: null,
      post: null
    }
  },
  watch: {
    '$route' {
      handler: 'resetData',
      immediate: true
    }
  },
  methods: {
    resetData () {
      this.loading = false
      this.error = null
      this.post = null
    },
    getPost (postId) {
      // Todo
    }
  }
}
```

to

```javascript
export default {
  data() {
    return {
      loading: false,
      error: null,
      post: null
    };
  },
  created() {
    this.getPost(this.$route.params.id);
  },
  methods: {
    getPost(postId) {
      // Todo
    }
  }
};
```

### Transparent Wrappers

```vue
<template>
  <input :value="value" @input="$emit('input'), $event.target.value">
</template>

<BaseInput @focus.native="doSomething">
```

```vue
<template>
  <label>
    {{ label }}
    <input :value="value" v-on="listeners">
  </label>
</template>

<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value);
        }
      };
    }
  }
};
</script>

<BaseInput @focus.native="doSomething">
```
