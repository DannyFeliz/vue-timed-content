<template>
  <span v-if="shouldShow">
    <slot />
  </span>
</template>

<script>
import moment from "moment";
import "moment-timezone";

export default {
  name: "TimedContent",
  props: {
    from: {
      type: [Date, String, Number],
      required: true,
      validator(date) {
        return moment(date).isValid();
      }
    },
    to: {
      type: [Date, String, Number],
      required: true,
      validator(date) {
        return moment(date).isValid();
      }
    },
    timezone: {
      type: String,
      default: "America/Los_Angeles",
      validator(timezone) {
        return moment.tz.names().includes(timezone);
      }
    }
  },
  data() {
    return {
      shouldShow: false
    };
  },
  created() {
    const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";
    const localTime = moment.tz(this.timezone);
    const from = moment.tz(this.from, dateTimeFormat, this.timezone);
    const to = moment.tz(this.to, dateTimeFormat, this.timezone);
    this.shouldShow = localTime.isBetween(from, to);
  }
};
</script>
