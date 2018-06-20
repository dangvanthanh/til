<template>
  <div class="list">
    <div v-for="item in list" :key="item.id" class="list__row">
      <div class="list__image">
        <img :src="item.image" alt="">
      </div>
      <div class="list__content">
        <div>{{ item.name }}</div>
        <div>{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import loremIpsum from 'lorem-ipsum';

const rowCount = 1000;
let list = Array(rowCount)
  .fill()
  .map((val, idx) => {
    return {
      id: idx,
      name: 'Dang Van Thanh',
      image: 'http://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    };
  });

export default {
  name: 'vuejs-largelists-App',
  data() {
    return {
      list: list
    };
  }
};
</script>

<style scoped>
.list {
  padding: 10px;
}

.list__row {
  border-bottom: 1px solid #ebeced;
  text-align: left;
  margin: 5px 0;
  display: flex;
  align-items: center;
}

.list__image {
  margin-right: 10px;
}

.list__content {
  padding: 10px;
}
</style>
