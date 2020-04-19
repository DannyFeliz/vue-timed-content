<template>
  <div id="app">
    <p>Outside</p>
    <timed-content :from="new Date('2019/05/11 11:23:12')" :to="new Date('2020/05/11 11:23:12')">
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
