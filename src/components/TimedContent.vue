<template>
  <span v-if="shouldShow">
    <slot />
    <p>From: {{ formattedFrom }}</p>
    <p>To: {{ formattedTo }}</p>
  </span>
</template>

<script>
// @ts-check
import { DateTime } from "luxon";
import { isValidDate, isValidTimeZone } from "../utils/helpers";

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
    timezone: {
      type: String,
      default: "America/Los_Angeles",
      validator: isValidTimeZone
    }
  },
  data() {
    return {
      shouldShow: false,
      countdown: null,
      formattedTo: DateTime.fromJSDate(this.to).setZone(this.timezone),
      formattedFrom: DateTime.fromJSDate(this.from).setZone(this.timezone)
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
      const currentDate = DateTime.local();
      return currentDate >= this.formattedFrom && currentDate <= this.formattedTo;
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
      if (this.formattedFrom > this.formattedTo) {
        throw new Error(`The 'from' date is after the 'to' date. Please check: FROM ${this.from} TO ${this.to}`);
      }

      if (this.formattedTo < this.formattedFrom) {
        throw new Error(`The 'to' date is before the 'from' date. Please check: FROM ${this.from} TO ${this.to}`);
      }
    }
  }
};
</script>
