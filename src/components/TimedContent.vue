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
      shouldShow: false,
      countdown: null
    };
  },
  created() {
    this.toggleContent();

    this.countdown = setInterval(() => this.toggleContent(), 1000);
  },
  beforeDestroy() {
    clearInterval(this.countdown);
  },
  methods: {
    shouldShowContent() {
      const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";
      const from = moment.tz(this.from, dateTimeFormat, this.timezone);
      const to = moment.tz(this.to, dateTimeFormat, this.timezone);

      return moment.tz(this.timezone).isBetween(from, to);
    },
    toggleContent() {
      this.shouldShow = this.shouldShowContent();

      if (this.shouldShow) {
        this.$emit("show");
      } else {
        this.$emit("hide");
      }
    }
  }
};
</script>
