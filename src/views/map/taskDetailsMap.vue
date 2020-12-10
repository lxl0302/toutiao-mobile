<template>
  <div style="height:100%;width:100%;">
    <div class="text-option-div" @click="testOptions"></div>
    <div class="text-option-div2" @click="testOptions2"></div>
    <div class="map-container" id="map">
  </div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

export default {
  name: 'maps',
  components: {},
  data () {
    return {
      map: null
    }
  },
  computed: {},
  mounted () {
    this.initMap()
    this.addTaskArea()
    this.initTollsBar()
  },
  methods: {
    initMap () {
      this.map = L.map('map', {
        minZoom: 3,
        maxZoom: 18.39,
        center: [39.550339, 116.114129],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
        crs: L.CRS.EPSG3857
      })
      L.tileLayer(
        'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
      ).addTo(this.map)
      // 地图点击事件
      this.map.on('click', (e) => {
        console.log('e', e.latlng)
      })
    },
    addTaskArea () {
      const taskAreaFea = {
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: { type: 'Polygon', coordinates: [[[114.790252283458, 27.856556080479], [114.783511574925, 27.832715074356], [114.808227506212, 27.831125487646], [114.825753348397, 27.85536415464], [114.790252283458, 27.856556080479]]] }
          }
        ]
      }
      this.areaFea = L.geoJson(taskAreaFea, {
        pmIgnore: false,
        style: {
          color: 'green',
          fillColor: '#f03',
          weight: 1,
          fillOpacity: 0.1
        }
        // allowSelfIntersection: true
      })
      this.areaFea.addTo(this.map)
      L.PM.reInitLayer(this.areaFea)
      this.map.fitBounds(this.areaFea.getBounds(), {
        paddingTopLeft: [0, -300]
      })
    },
    initTollsBar () {
      // 加载工具栏
      // this.map.pm.addControls({
      //   positions: {
      //     draw: 'topright',
      //     edit: 'topleft'
      //   }
      // })
      // 自定义工具条按钮
      this.map.pm.Toolbar.getBlockPositions({
        name: 'customBottom',
        block: ''
      })
    },
    testOptions () {
      // alert('试一试')
      // 开启绘制
      // this.map.pm.enableDraw('Polygon', { allowSelfIntersection: false })
      // 开启编辑
      this.map.pm.toggleGlobalEditMode({
        allowSelfIntersection: false,
        preventMarkerRemoval: false,
        preventVertexEdit: false
      })
    },
    testOptions2 () {
      this.map.pm.disableGlobalEditMode()
    }
  }
}
</script>
<style lang='scss' scoped>
.map-container {
  width: 100%;
  height: 100%;
}
.text-option-div {
  height: 33px;
  width: 33px;
  background-color: pink;
}
.text-option-div2 {
  height: 33px;
  width: 33px;
  background-color: blue;
}
</style>
