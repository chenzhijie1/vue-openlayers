<template>
	<div>
		<div id="mapview" class="mapview">
			<div id="popupshow" class="ol-popup">
				<a href="#" id="popupcloser" class="ol-popup-closer"></a>
				<button @click="detail">详情</button>
				<div id="popupcontent"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Map from 'ol/Map.js';
	import View from 'ol/View.js';
	import {
		defaults as defaultControls,
		Attribution
	} from 'ol/control.js';

	import OSM from 'ol/source/OSM.js';
	import 'ol/ol.css';

	import {
		Tile as TileLayer,
		Vector as VectorLayer
	} from 'ol/layer';
	import {
		bbox as bboxStrategy
	} from 'ol/loadingstrategy';
	
	import VectorSource from 'ol/source/Vector';
	import {
		Stroke,
		Style,
		Icon,
		Text,
		Fill
	} from 'ol/style';
	import {
		WFS,
		GeoJSON
	} from 'ol/format';
	import Overlay from 'ol/Overlay';
	export default {
		name: 'mapview',
		props: {

		},
		data() {
			return {
				map: "",
				pro:"武汉"
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			//style
			styleFunction(feature) {
				console.log(feature)
				const name = feature.get('NAME');
				const number = feature.get('PROVINCE_');
				const color = this.getColor(name);
				console.log(color)
				return new Style({
					stroke: new Stroke({
						color: 'rgba(0, 0, 255, 1.0)',
						width: 2
					}),
					fill: new Fill({
						color: color
					}),
					text: new Text({
						text: name,
						fill: new Fill({
							color: '#222'
						})
					})
				})

			},
			getCount(str) {
				return this.$store.getters.parseData(str)
			},
			getColor(str) {
				// var num = this.$store.getters.parseData(str)
				// var f = Number(num)
				// console.log(f)
				// if (f >= 10000) {
				// 	console.log(1)
				// 	return "rgba(137,17,20,1)"
				// } else if (f < 10000 && f > 1000) {
				// 	return "rgba(255,48,48,1)"
				// } else if (f < 1000 && f > 100) {
				// 	return "rgba(215,81,84,1)"
				// } else if (f < 100 && f > 10) {
				// 	return "rgba(255,100,97,0.5)"
				// } else {
				// 	console.log(2)
				// 	return "rgba(219,197,197,1)"
				// }

				switch (str) {
					case "北京":
						return "rgba(215,81,84,1)"
					case "天津":
						return "rgba(134,158,216,1)"
					case "上海":
						return "rgba(137,17,20,1)"
					case "重庆":
						return "rgba(224,206,228,1)"
					case "河北":
						return "rgba(253,232,205,1)"
					case "河南":
						return "rgba(128,128,128,1)"
					case "云南":
						return "rgba(255,69,0,1)"
					case "辽宁":
						return "rgba(228,241,215,1)"
					case "黑龙江":
						return "rgba(255,228,255,1)"
					case "湖南":
						return "rgba(255,182,193,1)"
					case "安徽":
						return "rgba(211,211,211,1)"
					case "山东":
						return "rgba(176,196,222,1)"
					case "新疆":
						return "rgba(138,43,226,1)"
					case "江苏":
						return "rgba(222,184,135,1)"
					case "浙江":
						return "rgba(100,149,237,1)"
					case "江西":
						return "rgba(184,134,11,1)"
					case "湖北":
						return "rgba(85,107,47,1)"
					case "广西":
						return "rgba(72,61,139,1)"
					case "甘肃":
						return "rgba(210,180,140,1)"
					case "山西":
						return "rgba(800,128,128,1)"
					case "内蒙古":
						return "rgba(178,34,34,1)"
					case "陕西":
						return "rgba(255,218,155,1)"
					case "吉林":
						return "rgba(127,255,212,1)"
					case "福建":
						return "rgba(255,235,205,1)"
					case "贵州":
						return "rgba(70,130,180,1)"
					case "广东":
						return "rgba(255,100,97,0.5)"
					case "青海":
						return "rgba(255,248,220,0.5)"
					case "西藏":
						return "rgba(165,42,42,0.5)"
					case "四川":
						return "rgba(0,255,127,0.5)"
					case "宁夏":
						return "rgba(0,255,255,0.5)"
					case "海南":
						return "rgba(255,228,196,0.5)"
					case "台湾":
						return "rgba(255,99,71,0.5)"
					case "香港":
						return "rgba(210,105,30,0.5)"
					case "澳门":
						return "rgba(255,100,97,0.5)"
				}

			},

			init() {
				//弹窗
				var container = document.getElementById('popupshow');
				var content = document.getElementById('popupcontent');
				var closer = document.getElementById('popupcloser');

				var overlay = new Overlay({
					element: container,
					autoPan: true,
					autoPanAnimation: {
						duration: 250
					}
				});

				closer.onclick = function() {
					overlay.setPosition(undefined);
					closer.blur();
					return false;
				};

				var vectorSource = new VectorSource();
				var vector = new VectorLayer({
					id:"draw-layer",
					source: vectorSource,
					style: this.styleFunction
				});
				

				var raster = new TileLayer({
					source: new OSM()
				});

				var map = new Map({
					layers: [raster, vector],
					target: 'mapview',
					overlays: [overlay],
					view: new View({
						projection: 'EPSG:4326',
						center: [116, 39],
						maxZoom: 19,
						zoom: 12

					})
				});

				var featureRequest = new WFS().writeGetFeature({
					srsName: 'EPSG:4326',  //坐标系统
					featureNS: 'http://www.opengeospatial.net/cite', //命名空间 URI
					featurePrefix: 'cite',//工作区名称
					featureTypes: ['province'],//查询图层，可以是同一个工作区下多个图层
					outputFormat: 'application/json'

				});

				//geoserver wfs地址如localhost:8080/geoserver/wfs
				fetch('http://localhost:8090/geoserver/wfs', {
					method: 'POST',
					body: new XMLSerializer().serializeToString(featureRequest)
				}).then(function(response) {
					return response.json();
				}).then(function(json) {
					var features = new GeoJSON().readFeatures(json);
					console.log(features)
					vectorSource.addFeatures(features);
					// vectorSource.setStyle(that.styleFunction(features));
					map.getView().fit(vectorSource.getExtent());

				});


				const that = this;

				map.on('singleclick', function(evt) {
					var coordinate = evt.coordinate;

					var features = map.getFeaturesAtPixel(evt.pixel);
					if (features.length == 0) {

						return;
					}
					var properties = features[0].getProperties();
					console.log(properties)
					that.pro=properties["NAME"]
					var num = that.getCount(properties["NAME"])
					console.log(num)
					//加弹框
					content.innerHTML = '<span class="title">' + properties["NAME"] + '<br/>' +
						'  </span>1994年人口：<span>' + properties["POPU_94"] + '<br/>' +
						'</span>';
					overlay.setPosition(coordinate);
				});
			},
			detail() {
				// this.$router.push({
				// 	path: 'detail',
				// 	query: {
				// 		name: this.pro
						
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.mapview {
		width: 100%;
		height: 700px;
	}


	.ol-popup {
		position: absolute;
		background-color: white;
		-webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
		padding: 15px;
		border-radius: 10px;
		border: 1px solid #cccccc;
		bottom: 12px;
		left: -50px;
		min-width: 420px;
	}

	.ol-popup:after,
	.ol-popup:before {
		top: 100%;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.ol-popup:after {
		border-top-color: white;
		border-width: 10px;
		left: 48px;
		margin-left: -10px;
	}

	.ol-popup:before {
		border-top-color: #cccccc;
		border-width: 11px;
		left: 48px;
		margin-left: -11px;
	}

	.ol-popup-closer {
		text-decoration: none;
		position: absolute;
		top: 2px;
		right: 8px;
	}

	.ol-popup-closer:after {
		content: "✖";
	}

	.title {
		font-size: 22px;
		font-weight: bold;
	}
</style>
