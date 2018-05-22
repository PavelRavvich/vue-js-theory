import Vue from 'vue'
import App from './App.vue'
import OnOff from './OnOff.vue'

Vue.component('app-on-off', OnOff);

new Vue({
    el: '#app',
    render: h => h(App)
})