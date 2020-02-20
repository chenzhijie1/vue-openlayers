import TileLayer from "ol/layer/Tile"
import WMSLayer from "ol/layer/Image"
import TileArcGISRest from 'ol/source/TileArcGISRest'
import ImageWMS from 'ol/source/ImageWMS'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'

let maptype=3          //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务

var streetmap=function(){
    switch(maptype){
        case 0:
            maplayer=new TileLayer({
                source: new XYZ({
                    url:'http://127.0.0.1:7080/streetmap/shenzhen/{z}/{x}/{y}.jpg'
                })
            })
        break;
        case 1:
            maplayer=new TileLayer({
                source: new OSM()
            })
        break;
        case 2:
            maplayer=new TileLayer({
                source:new TileArcGISRest({
                    url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
                })
            })
        break;
        case 3:
            var maplayer = new WMSLayer({
                source: new ImageWMS({
                    url: 'http://192.168.74.136:8080/geoserver/cx/wms',
                    params: {
                        'LAYERS': 'cx:grid', //此处可以是单个图层名称，也可以是图层组名称，或多个图层名称  
                        'VERSION': '1.1.0',
                        'TILED': false
                    },
                    ratio: 1.5,
                    serverType: 'geoserver' //服务器类型                  
                })
            })
            var maplayer1=new TileLayer({
                source:new TileArcGISRest({
                    url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
                })
            })
        break;
    }
    return [maplayer1,maplayer];
}

var mapconfig={
    x:120.064839,     //中心点经度和纬度
    y:30.848857,
    zoom:10,          //地图缩放级别
    streetmap:streetmap
};

export default mapconfig










































