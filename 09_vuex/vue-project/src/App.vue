<template>
  <div id="app" class="container text-center pt-5">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Actions from './Actions.vue'
  export default {
    name: 'app',
    components: {
      appCounter: Counter,
      appActions: Actions
    }
}
</script>

<style>
</style>
