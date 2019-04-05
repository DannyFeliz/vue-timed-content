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
  computed: {
    toDate() {
      const momentTo = moment(this.to);
      const momentFrom = moment(this.from);

      if (momentTo.isBefore(momentFrom)) {
        throw new Error(
          `The 'to' date is before the 'from' date. Please check: FROM ${
            this.from
          } TO ${this.to}`
        );
      }

      return this.to;
    },

    fromDate() {
      const momentTo = moment(this.to);
      const momentFrom = moment(this.from);

      if (momentFrom.isAfter(momentTo)) {
        throw new Error(
          `The 'from' date is after the 'to' date. Please check: FROM ${
            this.from
          } TO ${this.to}`
        );
      }

      return this.from;
    }
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
      const from = moment.tz(this.fromDate, dateTimeFormat, this.timezone);
      const to = moment.tz(this.toDate, dateTimeFormat, this.timezone);

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
