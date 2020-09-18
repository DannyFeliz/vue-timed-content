<template>
  <div id="app">
    <timed-content :from="from" :to="to" time-zone="America/Santo_Domingo">
      <p>Some secret content</p>
    </timed-content>
  </div>
</template>

<script>
import moment from "moment";
import TimedContent from "./components/TimedContent.vue";
export default {
  name: "app",
  components: {
    TimedContent
  },
  data() {
    return {
      from: moment().add("seconds", 5).toDate(),
      to: moment().add("seconds", 10).toDate()
    };
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
