<template>
  <div id="app">
    <p>Outside</p>
    <timed-content
      :from="new Date()"
      to="2019-04-30 11:22:33"
      timezone="America/Santo_Domingo"
    >
      <p>Some content</p>
    </timed-content>
  </div>
</template>

<script>
import TimedContent from "./components/timed-content.vue";

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
