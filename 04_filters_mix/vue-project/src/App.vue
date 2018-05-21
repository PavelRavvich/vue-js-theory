<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>

    <hr>

    <app-list></app-list>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello Title'
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
}
</script>

<style>
</style>
