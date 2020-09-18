<template>
  <span v-if="shouldShowContent">
    <slot />
  </span>
</template>

<script>
import { getTimeZonedDate, isValidTimeZone, isValidDate } from "../utils/helpers";

export default {
  name: "TimedContent",
  props: {
    from: {
      type: Date,
      required: true,
      validator: isValidDate
    },
    to: {
      type: Date,
      required: true,
      validator: isValidDate
    },
    timeZone: {
      type: String,
      default: Intl.DateTimeFormat().resolvedOptions().timeZone,
      validator: isValidTimeZone
    }
  },
  data() {
    return {
      countdown: null,
      currentDate: getTimeZonedDate(new Date(), this.timeZone).getTime()
    };
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    this.stopCountdown();
  },
  watch: {
    from() {
      this.init();
    },
    to() {
      this.init();
    },
    timeZone() {
      this.init();
    },
    shouldShowContent() {
      if (this.shouldShowContent) {
        this.$emit("show");
      } else {
        this.$emit("hide");
        this.stopCountdown();
      }
    }
  },
  computed: {
    convertedFrom() {
      return getTimeZonedDate(this.from, this.timeZone);
    },
    formattedTo() {
      return getTimeZonedDate(this.to, this.timeZone);
    },
    shouldShowContent() {
      return this.currentDate >= this.convertedFrom.getTime() && this.currentDate <= this.formattedTo.getTime();
    }
  },
  methods: {
    init() {
      if (this.countdown) {
        this.stopCountdown();
      }

      this.checkDatesValidity();

      this.countdown = setInterval(() => {
        this.currentDate = getTimeZonedDate(new Date(), this.timeZone).getTime();
        this.checkDatesValidity();
      }, 1000);
    },
    checkDatesValidity() {
      if (this.convertedFrom.getTime() > this.formattedTo.getTime()) {
        throw new Error("The 'from' date is after the 'to' date");
      }

      if (this.formattedTo.getTime() < this.convertedFrom.getTime()) {
        throw new Error("The 'to' date is before the 'from' date.");
      }
    },
    stopCountdown() {
      clearInterval(this.countdown);
    }
  }
};
</script>
