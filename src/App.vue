<template>
  <div id="app">
    <div class="sidebar">
      <Sidebar />
    </div>
    <!--右侧内容动态加载-->
    <Content /> 
  </div>
</template>

<script>
import Sidebar from './Sidebar'
// import OlMap from './components/olmap.vue'
import Content from './Content'
export default {
  name: 'app',
  components: {
    Sidebar,
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
  margin-top: 0px;
}
</style>

























