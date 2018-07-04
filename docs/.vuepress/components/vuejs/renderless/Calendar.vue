<template>
  <renderless-calendar 
  :value="value"
   @change="value => $emit('change', value)">
   <div class="calendar" slot-scope="props">
      <div class="calendar__header">
        <button @click="setDatePrevMonth(props)">&lt;</button>

        <span>{{formatCurrentDate(props)}}</span>

        <button @click="setDateNextMonth(props)">&gt;</button>
      </div>

      <div class="calendar__body">
        <div class="week day-labels">
          <div class="day">Sun</div>
          <div class="day">Mon</div>
          <div class="day">Tue</div>
          <div class="day">Wed</div>
          <div class="day">Thu</div>
          <div class="day">Fri</div>
          <div class="day">Sat</div>
        </div>

        <div v-for="(week, index) in props.getWeeksInMonth()" 
        class="week"
        :key="index">

            <div v-for="day in week"
                class="day"
                :key="day.label"
                :disabled="isDisabled(props, day.dateValue)"
                @click="handleDayClick(props, day)"
                :class="{
                  'is-selected': isSelectedDay(props, day.dateValue),
                  'is-today': isToday(day.dateValue)
                }"
              >
                {{day.label}}
              </div>
        </div>
     </div>
   </div>
  </renderless-calendar>
</template>
<script>
import RenderlessCalendar from './RenderlessCalendar';
import { isToday, isSameMonth } from 'date-fns';
export default {
  name: 'simple-calendar',
  props: {
    value: {
      type: [String, Date]
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {
    RenderlessCalendar
  },
  methods: {
    isToday,
    isSameMonth,
    isDisabled({ date }, dateValue) {
      return !isSameMonth(date, dateValue);
    },
    setDateNextMonth({ setDate, getDateNextMonth }) {
      setDate(getDateNextMonth());
    },
    setDatePrevMonth({ setDate, getDatePrevMonth }) {
      setDate(getDatePrevMonth());
    },
    formatCurrentDate({ getFormattedDate }) {
      return getFormattedDate('MMMM YYYY');
    },
    isSelectedDay({ selectedDate, getFormattedDate }, date) {
      return getFormattedDate(selectedDate) === getFormattedDate(date);
    },
    handleDayClick(props, day) {
      const isDisabled = dateValue => !isSameMonth(props.date, dateValue);
      return isDisabled(day.dateValue)
        ? null
        : props.setSelectedDate(day.dateValue);
    }
  }
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  outline: none;
}

.calendar {
  margin: 5% auto;
  box-shadow: 0 1px 3px #aeaeae;
}

.calendar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #1c3d5a;
}

.calendar__header span {
  color: #fff;
  font-weight: bold;
}

.calendar__body {
  background-color: #fff;
}

.week {
  display: flex;
}

.week:not(:first-of-type) {
  border-top: 1px solid #efefef;
}

.week.day-labels {
  background: #f8f8f8;
}

.day {
  width: calc(100% / 7);
  flex-basis: calc(100% / 7);
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: default;
}

.day[disabled] {
  color: #dedede;
  cursor: not-allowed !important;
  background: inherit !important;
}

.week:not(.day-labels) .day:not(:last-of-type) {
  border-right: 1px solid #efefef;
}

.week:not(.day-labels) .day {
  cursor: pointer;
}

.week:not(.day-labels) .day.is-selected.is-selected {
  background-color: #1c3d5a;
  color: #fff;
}

.week:not(.day-labels) .day.is-today.is-today {
  font-weight: bold;
  color: #1c3d5a;
}

.week:not(.day-labels) .day.is-today.is-today.is-selected {
  color: #fff;
}

.week:not(.day-labels) .day:hover {
  background-color: #f3f3f3;
}
</style>
