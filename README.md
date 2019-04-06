# vue-timed-content
Sahows or hides a content based on a given time range


## Demo

[![Edit Vue Timed Content Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/754n8y281?fontsize=14)

## Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Description</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>from</td>
      <td>Initial date</td>
      <td>Date | String | Number</td>
      <td>true</td>
      <td></td>
    </tr>
    <tr>
      <td>to</td>
      <td>End date</td>
      <td>Date | String | Number</td>
      <td>true</td>
      <td></td>
    </tr>
    <tr>
      <td>timezone</td>
      <td>Timezone used to calculate if the dates are in range</td>
      <td>String</td>
      <td>false</td>
      <td>America/Los_Angeles</td>
    </tr>
  </tbody>
</table>


## Events

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show</td>
      <td>When content goes from being hidden to visible</td>
    </tr>
    <tr>
      <td>hide</td>
      <td>When content goes from being visible to hidden</td>
    </tr>

  </tbody>
</table>

## Usage
```vue
<template>
  <timed-content from="2019-04-01 00:00:00" to="2019-04-01 23:59:59" timezone="America/New_York">
    <p>Some April Fools' Day joke</p>
  </timed-content>
</template>

<script>
import TimedContent from "vue-timed-content";

export default {
  components: {
    TimedContent
  }
};
</script>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
