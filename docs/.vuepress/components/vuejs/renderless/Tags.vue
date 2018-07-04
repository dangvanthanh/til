<template>
  <div class="tags">
    <span v-for="tag in value" class="tags__input">
      <span>{{ tag }}</span>
      <button class="tags__remove" @click="removeTag(tag)">&times;</button>
    </span>
    <input type="text" class="tags__text" placeholder="Add tag..." @keydown.enter.prevent="addTag" v-model="newTag">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      newTag: ''
    };
  },
  methods: {
    addTag() {
      if (
        !this.newTag.trim().length ||
        this.value.includes(this.newTag.trim())
      ) {
        return;
      }

      this.$emit('input', [...this.value, this.newTag.trim()]);
      this.newTag = '';
    },
    removeTag(tag) {
      this.$emit('input', this.value.filter(t => t !== tag));
    }
  }
};
</script>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}

.tags__input {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

.tags__input:last-of-type {
  margin-right: 0;
}

.tags__remove {
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
}

.tags__remove:first-child {
  margin-right: 0.25rem;
}

.tags__remove:last-child {
  margin-left: 0.25rem;
}

.tags__remove:focus {
  outline: 0;
}

.tags__text {
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  min-width: 10rem;
}
</style>
