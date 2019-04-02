# vue-timed-content

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
