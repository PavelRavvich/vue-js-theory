import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'
import SlotExample from './SlotExample.vue'

// Глобальная регистрация компонента.
Vue.component('app-car', Car);
Vue.component('app-slot-example', SlotExample);

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
});

