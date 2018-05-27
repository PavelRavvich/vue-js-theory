<template>
  <div id="app" class="container text-center pt-5">
    <app-counter :counter="counter"></app-counter>
    <app-actions @counterUpdated="counter += $event"></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Actions from './Actions.vue'
  export default {
    name: 'app',
    data () {
      return {
        counter: 0
      }
    },
    components: {
      appCounter: Counter,
      appActions: Actions
    }
}
</script>

<style>
</style>
