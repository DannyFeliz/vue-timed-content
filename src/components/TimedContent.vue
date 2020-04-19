<template>
  <span v-if="shouldShow">
    <slot />
  </span>
</template>

<script>
import { isValidTimeZone } from "../utils/helpers";

export default {
  name: "TimedContent",
  props: {
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date,
      required: true
    },
    timeZone: {
      type: String,
      default: Intl.DateTimeFormat().resolvedOptions().timeZone,
      validator: isValidTimeZone
    }
  },
  data() {
    return {
      shouldShow: false,
      countdown: null,
      formattedFrom: new Date(this.from.toLocaleString("en-US", { timeZone: this.timeZone })),
      formattedTo: new Date(this.to.toLocaleString("en-US", { timeZone: this.timeZone }))
    };
  },
  created() {
    this.checkDatesValidity();
    this.toggleContent();
    this.countdown = setInterval(() => this.toggleContent(), 1000);
  },
  beforeDestroy() {
    clearInterval(this.countdown);
  },
  methods: {
    shouldShowContent() {
      const currentDate = new Date().getTime();
      return currentDate >= this.formattedFrom.getTime() && currentDate <= this.formattedTo.getTime();
    },
    toggleContent() {
      const wasShown = this.shouldShow;
      this.shouldShow = this.shouldShowContent();

      if (!wasShown && this.shouldShow) {
        this.$emit("show");
      } else if (wasShown && !this.shouldShow) {
        this.$emit("hide");
        this.stopCountdown();
      }
    },
    stopCountdown() {
      clearInterval(this.countdown);
    },
    checkDatesValidity() {
      if (this.formattedFrom.getTime() > this.formattedTo.getTime()) {
        throw new Error(`The 'from' date is after the 'to' date. Please check: FROM ${this.from} TO ${this.to}`);
      }

      if (this.formattedTo.getTime() < this.formattedFrom.getTime()) {
        throw new Error(`The 'to' date is before the 'from' date. Please check: FROM ${this.from} TO ${this.to}`);
      }
    }
  }
};
</script>
