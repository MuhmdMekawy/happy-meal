<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar.vue';
import Home from './pages/Home.vue'
import './assets/style/style.css'


export default {
  name: 'app',
  components: {
    Navbar,
    Home
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style lang="scss" scoped>

</style>