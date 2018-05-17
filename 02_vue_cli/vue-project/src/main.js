import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'

// Глобальная регистрация компонента.
Vue.component('app-car', Car);

new Vue({
  el: '#app',
  render: h => h(App)
});
