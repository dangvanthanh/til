<template>
  <div>
    <tags v-model="tags"/>
  </div>
</template>

<script>
import Tags from './Tags.vue';

export default {
  components: { Tags },
  data() {
    return {
      tags: ['CSS', 'HTML5', 'Canvas']
    };
  }
};
</script>
