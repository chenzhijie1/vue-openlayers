<template>
  <div id="app">
    <!-- <OlMap/> -->
    <Content /> 
  </div>
</template>

<script>
// import OlMap from './components/olmap.vue'
import Content from './Content'
export default {
  name: 'app',
  components: {
    // OlMap,
    Content
  }
}
</script>

<style>
@import './assets/css/index.css' ;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position:absolute;
  margin-top: 0px;
  top: 0px;
  left: 0px;  
  width: 100%;    
}
</style>

























