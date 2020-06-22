<template>
  <div>
    <div class="person" v-for="person in persons">
      <figure>
        <img :src="person.picture.large" alt="" />
      </figure>
      <figcaption>
        <p class="ttu">{{ person.name.first }} {{ person.name.last }}</p>
        <ul>
          <li>
            <strong>Birthday:</strong> {{ person.dob.date | formatCurrentDate }}
          </li>
          <li class="ttc">
            <strong>Location:</strong> {{ person.location.city }},
            {{ person.location.state }}
          </li>
        </ul>
      </figcaption>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { format } from 'date-fns';

const getRandomUser = () => {
  return axios.get(`https://randomuser.me/api`);
};

export default {
  data() {
    return {
      persons: [],
    };
  },
  filters: {
    formatCurrentDate(date) {
      return format(date, 'dd/MM/yyyy');
    },
  },
  methods: {
    getInitialUsers() {
      for (let i = 0; i < 5; i++) {
        getRandomUser().then((response) => {
          this.persons.push(response.data.results[0]);
        });
      }
    },
    scroll(person) {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          getRandomUser().then((response) => {
            person.push(response.data.results[0]);
          });
        }
      };
    },
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.scroll(this.persons);
  },
};
</script>

<style scoped>
.person {
  background: #fefefe;
  border-radius: 2px;
  width: 60%;
  margin: 0 auto 15px auto;
  padding: 15px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.5);
}

.person img {
  width: 100%;
  height: auto;
  border-radius: 2px;
}

.person figure {
  margin: 0;
}

.ttu {
  text-transform: uppercase;
}

.ttc {
  text-transform: capitalize;
}
</style>
