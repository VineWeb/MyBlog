# Mapbox 系列

## 1. 如何初始化生成一个 mapbox 的示例

#### 1. 通过 html 引入 cdn 链接来生成

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Mapbox Example</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css" rel="stylesheet" />
    <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js"></script>
    <script>
        // Your Mapbox access token
        mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

        // Create a new map instance
        const map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());
    </script>
</body>
</html>

```

## 2. 使用 npm 的形式

```
// 1. 安装mapbox-gl
npm i mapbox-gl@1.13.0 --save-dev

// 使用mapboxgl生成
// 天地图域名
const VITE_TIANDITU_URL = 'http://t0.tianditu.gov.cn'
// 天地图密钥
const tdtKey = 'xxx9e906aa138e5bb1b49a3eb83a6128'
const source =  {
  type: 'raster',
  tiles: [
      `${TIANDITU_URL}/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${tdtKey}`
  ],
  tileSize: 256,
  minzoom: 0,
  maxzoom: 22
}
const sourceId = 'sourceid'
const layer = {
    type: 'raster',
    id: sourceId,
    source: sourceId,
    layout: { visibility: 'visible' }
}
const map = new mapboxgl.Map({
    container: 'container' // container id
    style: {
        version: 8,
        sources: {},
        glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        layers: []
    },
    center: [116.39747, 39.908823], // 天安门
    zoom: 5, // starting zoom 地图初始的拉伸比例
    pitch: 0, // 地图的角度，不写默认是0，取值是0-85度，一般在3D中使用
    bearing: 0, // 地图的初始方向，值是北的逆时针度数，默认是0，即是正北
    antialias: true, // 抗锯齿，通过false关闭提升性能
    minZoom: 3,
    maxZoom: 17.36
});
// 天地图底图加载
map.on('load', () => {
    // 判断是否存在名字为sourceId变量的资源
    if (map.getSource(sourceId)) {
      // 添加资源
      map.addSource(sourceId, source)
    }
    // 判断是否存在名字为sourceId变量的图层
    if (map.getLayer(sourceId)) {
      // 添加图层
      map.addLayer(layer)
    }
    // 把地图实例使用全局变量mapbox参数接收
    window['mapbox'] = map;
});
// 设置地图的上下左右间距，单位（px）
map.setPadding({top: 90, bottom: 50, left: 250, right: 530})
```

## 3. 添加填充的图层

```
const sourceId = 'sourceId'
const layer = {
  id: sourceId,
  type: 'fill',
  source: sourceId,
  layout: {},
  paint: {
      'fill-color': '#267a23',
      'fill-opacity': 0
  }
}
map.addLayer(layer)
```

## 4. 添加线的图层

```
const sourceId = 'sourceId'
const layer = {
  id: sourceId,
  type: 'line',
  source: sourceId,
  layout: {},
  paint: {
      'line-color': '#5499de',
      'line-width': 2
  }
}
map.addLayer(layer)
```

## 5. 添加 geojson 数据的资源

```
// json数据

/*

{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        coordinates: [[[116.812128, 39.616018]]]
      },
      properties: {
        "id": "110000",
        "name": "北京市",
        "center": [
                116.405285,
                39.904989
        ],
        "centroid": [
                116.419889,
                40.189911
        ],
        "childrenNum": 16,
        "level": "province",
        "parent": {
                "id": 100000
        },
        "subFeatureIndex": 0,
        "acroutes": [
                100000
        ],
        "adchar": null
}
    }
  ]
}



{
        "type": "Feature",
        "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                        [
                                [
                                        [
                                                120.044765265,
                                                30.068491861
                                        ],
                                        [
                                                120.044894176,
                                                30.0684633920001
                                        ],
                                        [
                                                120.044868085,
                                                30.0683887750001
                                        ],
                                        [
                                                120.044739174,
                                                30.068417244
                                        ],
                                        [
                                                120.044765265,
                                                30.068491861
                                        ]
                                ]
                        ]
                ]
        }
}
 */
const sourceId = 'sourceId'
map.addSource(sourceId, {
  type: 'geojson',
  data: json
});
```


## 6. 添加 wms 数据的资源
```
 const {
    geoserverUrl: url,
    tableName: name,
    westBound,
    southBound,
    eastBound,
    northBound,
  } = item;
  const sourceId = "sourceId";
  //  添加wms 把4326 改成3857   bbox={bbox-epsg-3857} srs=EPSG:3857
  const tile = `${url}?service=WMS&version=1.1.0&request=GetMap&layers=${name}&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&styles=&format=image/png&transparent=true`;
  if (!map) return;
  const hasSource = map.getSource(sourceId);
  if (hasSource) {
    map.removeLayer(sourceId);
    map.removeSource(sourceId);
  }
  map.addSource(sourceId, {
    type: "raster",
    tiles: [tile],
    tileSize: 256,
  });
  map.addLayer({
    id: sourceId,
    type: "raster",
    source: sourceId,
    paint: {},
  });

  // 定位至数据范围
  try {
    map.fitBounds(
      [
        [westBound, southBound],
        [eastBound, northBound],
      ],
      {
        linear: true,
      }
    );
    map.setMinZoom(13)
  } catch (e) {
    console.error("定位失败");
    console.error(e);
  }

```

## 7. 获取所有的图层 getStyle().layers
```
interface ILayout {
  visibility: string
}
interface ILayer: {
  id: string
  layout: ILayout
  source: string
  type: string
}
let layers: ILayer[] = map.getStyle().layers
```
## 8. 调整图层层级关系 moveLayer
```
const currentId = 'currentId'
const otherId = 'otherId'
map.moveLayer(currentId, 'otherId');

// 把当前图层id移动到最顶部
map.moveLayer(currentId, undefined);

// 把当前图层id移动到最底部
map.moveLayer(currentId, null);
```


## 9. 显示隐藏图层 setLayoutProperty
const layerId = 'layerId'
// 获取layerId图层的visibility属性  进行设置显隐
const visibility = map.getLayoutProperty(layerId, 'visibility');
if (visibility === 'visible') {
    map.setLayoutProperty(layerId, 'visibility', 'none');
} else {
    map.setLayoutProperty(layerId, 'visibility', 'visible');
}
## 10. 获取图层的缩放系数 getZoom
```
const zoom = map.getZoom()
```
## 11. 设置图层的缩放 setZoom
```
const scale = 17
map.setZoom(scale)
```

## 12. error: Style is not done loading

```
functio callback() {
  // 进行添加资源和图层
  map.addSource(sourceId, source)
  map.addLayer(sourceId, source)
}
map.on('style.load', callback) 或者 map.on('load', callback)
```

## 13. 设置中心点 setCenter

```
map.setCenter([lng, lat]);
```


## 14. 缓慢跳转到经纬度坐标 flyTo

```
map.flyTo({
    center: [8.11862, 46.58842],
    zoom: 12.5,
    // bearing: 130,
    // pitch: 75
    duration: 12000, // Animate over 12 seconds
    essential: true 
});
```

## 15. 清除图层 clearLayers
```
map.clearLayers()
```

## 16. 清除资源 clearSources
```
map.clearSources()
```

## 17.  清除所有图层和资源 clear
```
map.clear()
```

## 18. PoPup 提示框
```
const markerHeight = 50;
const markerRadius = 10;
const linearOffset = 25;
const popupOffsets = {
    'top': [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};
const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
    .setLngLat(e.lngLat)
    .setHTML("<h1>Hello World!</h1>")
    .setMaxWidth("300px")
    .addTo(map);

// js 移除 提示框
const removePopup = () => {
  const zjfLayerPopupDom = document.getElementsByClassName('my-class');
  if (zjfLayerPopupDom.length > 0) {
    console.log('组件移除')
    zjfLayerPopupDom[0].remove();
  }
};
```
## 19. 获取当前地图的中心点 getCenter
```
const center = map.getCenter();
```
## 20. 获取当前地图的缩放 getZoom
```
const zoom = map.getZoom();
```
## 21. 获取当前地图的 bearing
```
const bearing = map.getBearing();
```
## 22. 获取当前地图的 pitch
```
const pitch = map.getPitch();
```

## 23. Marker

```
const marker = new mapboxgl.Marker({
  color: "#FFFFFF",
  draggable: true
})  
  .setLngLat([30.5, 50.5])
  .addTo(map);


// 批量添加marker
let markers = []
const el = document.createElement("div");
el.setAttribute("data-marker", JSON.stringify(marker));
el.style.width = "50px";
el.style.height = "50px";
const marketEl = new mapbox.Marker(el)
      .setLngLat([lng, lat])
      .addTo(this.map);
    markers.push(marketEl);
// 批量删除markers
markers.forEach(marker => {
  marker.remove();
});

```

## 24 相关链接
- [官网Api](https://docs.mapbox.com/mapbox-gl-js/api/)
- [官网示例](https://docs.mapbox.com/mapbox-gl-js/example/)
- [gis知识](https://www.yuque.com/datav/datav-cool/swteb8)
- 阿里云数据可视化平台[geoJson数据获取](https://datav.aliyun.com/portal/school/atlas/area_selector)
- 高德地图[经纬度查询](https://lbs.amap.com/tools/picker)
- 腾讯位置[地图API](https://lbs.qq.com/service/webService/webServiceGuide/search/webServiceSuggestion)
- [天地图](http://lbs.tianditu.gov.cn/server/MapService.html)






