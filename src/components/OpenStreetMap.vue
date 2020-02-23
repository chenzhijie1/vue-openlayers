<template>
    <div id="map1" ref="rootmap">
    </div>
</template>

<script>
// import "ol/ol.css"
import { Map, View } from "ol"
import mapconfig from '../config/mapconfig'
import   '../util/ol-extend.js'
export default {
  name: 'WMS',
  data() {
    return {
      map: null
    };
  },
  mounted() {
    var mapcontainer = this.$refs.rootmap;
    this.map = new Map({
      target: mapcontainer,
      layers: mapconfig.streetmap(),
      view: new View({
        projection: "EPSG:4326",    //使用这个坐标系
        center: [mapconfig.x,mapconfig.y],  //深圳
        zoom: 4
      })
    });
    var url = "http://localhost:8090/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3Aprovince&maxFeatures=50&outputFormat=application%2Fjson";
    this.map.addGeojsonLayer(url);
  }
};
</script>

<style>
#map1{height:100%;width:100%;}
/*隐藏ol的一些自带元素*/
/* .ol-attribution,.ol-zoom { display: none;} */

</style>




































