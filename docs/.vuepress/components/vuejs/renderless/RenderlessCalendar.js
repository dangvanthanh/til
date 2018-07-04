import {
  format,
  addMonths,
  subMonths,
  isDate,
  getDate,
  startOfMonth,
  endOfMonth,
  eachDay,
  addWeeks,
  startOfWeek,
  endOfWeek,
  isSameMonth
} from 'date-fns';

const dateToDayObjects = dateValue => ({
  dateValue,
  label: getDate(dateValue)
});

export default {
  props: {
    defaultFormat: {
      type: String,
      default: 'MM/DD/YY'
    },
    value: {
      type: Date
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      date: this.value,
      selectedDate: this.value
    };
  },
  render(h) {
    return this.$scopedSlots.default({
      getFormattedDate: this.getFormattedDate,
      getDateNextMonth: this.getDateNextMonth,
      getDatePrevMonth: this.getDatePrevMonth,
      getDaysInMonth: this.getDaysInMonth,
      getWeeksInMonth: this.getWeeksInMonth,
      setDate: this.setDate,
      setSelectedDate: this.setSelectedDate,
      pickDate: this.pickDate,
      date: this.date,
      selectedDate: this.selectedDate
    });
  },
  methods: {
    getFormattedDate(arg, dateFormat) {
      arg = arg || this.date;

      if (isDate(arg) && dateFormat == null) {
        return format(arg, this.defaultFormat);
      }

      if (typeof arg === 'string' && dateFormat == null) {
        return format(this.date, arg);
      }

      if (isDate(arg) && typeof dateFormat === 'string') {
        return format(arg, dateFormat);
      }

      throw new Error('Invalid arguments passed');
    },
    getDateNextMonth(arg, amount) {
      arg = arg || this.date;

      if (isDate(arg) && amount == null) {
        return addMonths(arg, 1);
      }

      if (Number.isInteger(arg) && amount == null) {
        return addMonths(this.date, arg);
      }

      if (isDate(arg) && Number.isInteger(amount)) {
        return addMonths(arg, amount);
      }

      throw new Error('Invalid arguments passed');
    },
    getDatePrevMonth(arg, amount) {
      arg = arg || this.date;

      if (isDate(arg) && amount == null) {
        return subMonths(arg, 1);
      }

      if (Number.isInteger(arg) && amount == null) {
        return subMonths(this.date, arg);
      }

      if (isDate(arg) && Number.isInteger(amount)) {
        return subMonths(arg, amount);
      }

      throw new Error('Invalid arguments passed');
    },
    getDaysInMonth(date) {
      date = date || this.date;
      if (!isDate(date)) {
        throw new Error('Value is not an instance of Date');
      }

      return eachDay(startOfMonth(date), endOfMonth(date)).map(
        dateToDayObjects
      );
    },
    getWeeksInMonth(date) {
      date = date || this.date;

      if (!isDate(date)) {
        throw new Error('Value is not an instance of Date');
      }

      const firstDayOfMonth = startOfMonth(date);
      const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth);
      const lastDayOfFirstWeek = endOfWeek(firstDayOfMonth);

      const getWeeks = (startDay, endDay, weekArray = []) => {
        const week = eachDay(startDay, endDay).map(dateToDayObjects);
        const weeks = [...weekArray, week];
        const nextWeek = addWeeks(startDay, 1);

        const firstDayNextWeek = startOfWeek(nextWeek);
        const lastDayNextWeek = endOfWeek(nextWeek);

        if (isSameMonth(firstDayNextWeek, date)) {
          return getWeeks(firstDayNextWeek, lastDayNextWeek, weeks);
        }

        return weeks;
      };

      return getWeeks(firstDayOfFirstWeek, lastDayOfFirstWeek);
    },
    setDate(date) {
      if (!isDate(date)) {
        throw new Error('Value is not an instance of Date');
      }
      this.date = date;
    },
    setSelectedDate(selectedDate) {
      if (!isDate(selectedDate)) {
        throw new Error('Value is not an instance of Date');
      }
      this.selectedDate = selectedDate;
    },
    pickDate(date) {
      if (!isDate(date)) {
        throw new Error('Value is not an instance of Date');
      }
      this.date = date;
      this.selectedDate = date;
    }
  },
  created() {
    this.$watch(
      'value',
      newVal => {
        if (newVal !== this.date) {
          this.date = newVal;
        }
      },
      {
        immediate: true
      }
    );
  },
  watch: {
    date(newDate, prevDate) {
      this.$emit('date-change', newDate);
    },
    selectedDate(newDate) {
      this.$emit('change', newDate);
    },
    value(newVal) {
      if (newVal !== this.selectedDate) {
        this.selectedDate = newVal;
      }
    }
  }
};
