<template>
  <div>
    <div id="map"></div>
    <div id="overlay"><img :src="Logo" alt="示例锚点"/></div>
  </div>
</template>

<script>
  //导入依赖
  import 'ol/ol.css'
  import Map from 'ol/Map'
  import View from 'ol/View'
  import * as proj from 'ol/proj'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'

  import Overlay from 'ol/Overlay'

  export default {
    name: "MapTest",
    data(){
      return {
        //地图相关参数
        map:null,
        view:null,
        layers:[],
        center:[120,30]
        // Logo: require("../assets/images/Logo.png")
      }
    },
    mounted() {
      //首先创建地图
      this.view = new View({
        center:proj.transform([120,30],'EPSG:4326','EPSG:3857'),
        zoom:5
      })
      const oLayer = new TileLayer({
        source:new OSM
      })
      this.layers.push(oLayer)
      this.map = new Map({
        target:'map',
        view:this.view,
        layers:this.layers
      })
      //执行添加方法
      this.add()
    },
    methods:{
      add(){
        let pos = proj.transform([120, 30],'EPSG:4326','EPSG:3857')
        let marker = new Overlay({
          position: pos,//设置marker的位置，也可以通过overlay.setPosition方法来设置改变
          positioning: 'center-center',//选填参数，控制marker的相对位置
          element: document.getElementById('overlay'),
          stopEvent: false//选填参数，阻止默认事件行为
        })
        this.map.addOverlay(marker)
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 400px;
  }
</style>
