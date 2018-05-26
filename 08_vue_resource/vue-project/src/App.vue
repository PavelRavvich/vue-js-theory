<template>
  <div id="app" class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>

    <div class="form-group">
      <label for="year">Car name</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>

    <hr>
    <br>
    <button class="btn btn-primary" @click="loadCars">Load cars</button>
    <ul class="list-group">
      <li 
        class="list-group-item"
        v-for="car in cars"
      >
        <strong>{{car.name}} - {{car.year}}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      carName: '',
      carYear: 2000,
      cars: [],
      resource: null
    }
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      }
      this.resource.save({}, car)
    },
    loadCars() {
      this.resource.get().then(resp => resp.json()).then(cars => this.cars = cars)
    }
  },
  created() {
    this.resource = this.$resource('cars')
  }
}
</script>

<style scoped>
</style>
