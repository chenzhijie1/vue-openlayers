<template>
  <div id="map" class="map"></div>
</template>
<script>
      import "ol/ol.css";
      import Map from "ol/Map";
      import View from "ol/View";
      import TileLayer from "ol/layer/Tile";
      import { OSM, TileArcGISRest } from "ol/source";

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },

  components: {},
  methods: {
    init() {
      //加载第三方在线acrserver rest服务
     

      var url =
        "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/" +
        "Specialty/ESRI_StateCityHighway_USA/MapServer";

      var layers = [
        new TileLayer({
          source: new OSM()
        }),
        new TileLayer({
          extent: [-13884991, 2870341, -7455066, 6338219],
          source: new TileArcGISRest({
            url: url
          })
        })
      ];
      var map = new Map({
        layers: layers,
        target: "map",
        view: new View({
          center: [-10997148, 4569099],
          zoom: 4
        })
      });
    }
  }
};
</script>
<style>
#map {
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  font-size: 13px;
}
</style>




































