<template>
  <div id="app">
    <h2 v-colored:background.font="'green'" v-if="visible">{{title}}</h2>
    <h2 v-colored:color="'red'" v-if="visible">{{title}}</h2>

    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'new title'">update title</button>

    <h2 v-font>Local directive registration</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello!',
      visible: true
    }
  },
  /** 
   * Локальная регистрация директивы. 
   */
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px';
      }
    }
  }
}
</script>

<style>
</style>
