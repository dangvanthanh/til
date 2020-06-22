<template>
  <div>
    <div>
      <h3>Tag Input</h3>
      <tags v-model="tags" />
    </div>
    <div>
      <h3>Calendar</h3>
      <calendar v-model="selectedDate" />
      <div>Selected Date: {{ this.selectedDate | formatDate }}</div>
    </div>
  </div>
</template>

<script>
import Tags from './Tags.vue';
import Calendar from './Calendar.vue';
import { format } from 'date-fns';

export default {
  components: { Tags, Calendar },
  data() {
    return {
      tags: [
        'Node.js',
        'JavaScript',
        'Vue.js',
        'CSS',
        'Canvas',
        'Git',
        'Vim',
        'Tmux',
      ],
      selectedDate: new Date('2018-06-06T21:00:00.000Z'),
    };
  },
  filters: {
    formatDate(date) {
      return format(date, 'MM/dd/yyyy');
    },
  },
};
</script>
