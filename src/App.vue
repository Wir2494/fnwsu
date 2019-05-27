<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { 
    Navbar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
#app {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #EF4937;
}
.polygon-1{
  clip-path: polygon(50% 0%, 100% 0, 100% 53%, 57% 100%, 0 100%, 0 0);
  background-color: #F8E3DD;
  height: 100vh;
  width: 100%;
  z-index: 5;
}
.polygon-2{
  clip-path: polygon(0 0, 100% 68%, 100% 100%, 0 100%);
  background-color: #F8E3DD;
  height: 150vh;
  width: 100%;
  z-index: 1;
}
.wrapper{
    width: 90.7%;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>
