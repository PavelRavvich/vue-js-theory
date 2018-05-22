<template>
<div>
  <div>Form inputs</div>
  <!-- INPUT -->
  <input type="text" v-model.lazy="name">

  <p>{{name}}</p>
  <hr>
  <textarea v-model="textarea"></textarea>
  <p>{{ textarea }}</p>

  <hr>
  <div>
    <!-- CHECKBOX -->
    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <label>
      <input type="checkbox" value="youtube" v-model="social"> YouTube
    </label>

    <ul>
      <li v-for="s in social">{{s}}</li>
    </ul>
  </div>

  <div>
    <!-- RADIO -->
    <label>
      <input type="radio" value="item_1" v-model="item"> item_1
    </label>

    <label>
      <input type="radio" value="item_2" v-model="item"> item_2
    </label>

    <label>
      <input type="radio" value="item_3" v-model="item"> item_3
    </label>
  </div>
  <p>{{item}}</p>

  <!-- SELECT -->
  <div>
    <select  v-model="currentSelectedData">
      <option v-for="i in selectData">{{i}}</option>
    </select>
    <p>Selected: {{currentSelectedData}}</p>
  </div>

  <!-- INPUT WITH NUMBERS -->
  <div>
    <input type="text" v-model.number="age">
  </div>
  <hr>
  
  <!-- CUSTOM CONTROLS -->
  <app-on-off v-model="switched"></app-on-off>    
  <div>
    <h3 v-if="switched">ON</h3>
    <h3 v-if="!switched">OFF</h3>
    <h3></h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      textarea: 'lorem',
      social: ['instagram'],
      item:'',
      selectData: ['item_1', 'item_2', 'item_3'],
      currentSelectedData: 'item_2',
      age: 20,
      switched: false
    }
  },
  watch: {
    age (value) {
      console.log(typeof value);
    }
  }
}
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }

  p {
    white-space: pre;
  }
</style>
