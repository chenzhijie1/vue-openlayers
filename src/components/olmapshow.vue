<template>
  <div id="map" class="map"></div>
</template>
<script src="https://unpkg.com/jsts@2.0.2/dist/jsts.min.js"></script>
<script>
      import "ol/ol.css";
      import Map from "ol/Map";
      import View from "ol/View";
      import GeoJSON from "ol/format/GeoJSON";
      import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
      import { fromLonLat } from "ol/proj";
      import OSM from "ol/source/OSM";
      import VectorSource from "ol/source/Vector";
      import LinearRing from "ol/geom/LinearRing";
      import {
        Point,
        LineString,
        Polygon,
        MultiPoint,
        MultiLineString,
        MultiPolygon
      } from "ol/geom";
      import * as jsts from "jsts";
      
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
      var source = new VectorSource();
      fetch(
        "https://openlayers.org/en/v6.2.1/examples/data/geojson/roads-seoul.geojson"
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          var format = new GeoJSON();
          var features = format.readFeatures(json, {
            featureProjection: "EPSG:3857"
          });

          var parser = new jsts.io.OL3Parser();
          parser.inject(
            Point,
            LineString,
            LinearRing,
            Polygon,
            MultiPoint,
            MultiLineString,
            MultiPolygon
          );

          for (var i = 0; i < features.length; i++) {
            var feature = features[i];
            // convert the OpenLayers geometry to a JSTS geometry
            var jstsGeom = parser.read(feature.getGeometry());

            // create a buffer of 40 meters around each line
            var buffered = jstsGeom.buffer(40);

            // convert back from JSTS and replace the geometry on the feature
            feature.setGeometry(parser.write(buffered));
          }

          source.addFeatures(features);
        });
      var vectorLayer = new VectorLayer({
        source: source
      });

      var rasterLayer = new TileLayer({
        source: new OSM()
      });

      var map = new Map({
        layers: [rasterLayer, vectorLayer],
        target: document.getElementById("map"),
        view: new View({
          center: fromLonLat([126.979293, 37.528787]),
          zoom: 15
        })
      });
    }
  }
};
</script>
<style>
#map {
  height: 100%;
  width: 100%;
}
</style>




































