<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link exact tag="li" class="nav-item" to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style>
</style>
