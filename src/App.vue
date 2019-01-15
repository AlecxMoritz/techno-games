<template>
  <div id="app">
    <app-toolbar></app-toolbar>
          <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
export default {
  name: 'App',
  components: { AppToolbar, AppFooter }
}
</script>

<style>
#app {
  background-image: url('./assets/city.jpg');
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
   /* background-repeat: no-repeat; */
  background-color: rgb(171,146,201);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
}
</style>
