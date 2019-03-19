<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Car app</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'cars' }">Cars</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import AppCars from "./components/AppCars";

export default {
  name: "app",
  components: {
    // ovde moras da ubacis sve komponente koje ces koristiit
    AppCars
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
