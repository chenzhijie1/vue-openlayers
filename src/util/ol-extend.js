/* eslint-disable no-undef */
// 扩展可添加geojson方法
import * as ol from "ol";
import {Vector } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
	
    ol.Map.prototype.addGeojsonLayer = function (url) {
        this.addLayer(new Vector({
            source: new VectorSource({
                url: url,
                format: new GeoJSON()
            }),
        }))
    };
 
export {
    
}
    