<template>
  <div id="app">
    <p v-if="countdown">The content will disapear in: {{ this.countdown }} secs</p>
    <p v-else>The content is hidden</p>
    <timed-content :from="from" :to="to" time-zone="America/Santo_Domingo">
      <p>Some secret content</p>
    </timed-content>
  </div>
</template>

<script>
import TimedContent from "./components/TimedContent.vue";
export default {
  name: "app",
  components: {
    TimedContent
  },
  data() {
    return {
      from: new Date(),
      to: new Date(),
      countdown: 5
    };
  },
  created() {
    this.to.setSeconds(this.to.getSeconds() + this.countdown);
    const interval = setInterval(() => {
      this.countdown--;
      if (!this.countdown) {
        clearInterval(interval);
      }
    }, 1000);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
