<template>
  <div class="map-container" id="map"></div>
</template>

<script>
import { Toast } from 'vant'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

export default {
  name: 'maps',
  components: {},
  props: {
    areaGeoData: {
      type: String,
      default () {
        return ''
      }
    },
    moveDeatialFram: {
      type: Boolean,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      map: null,
      areaFea: null // 区域数据
    }
  },
  watch: {
    moveDeatialFram () { // 详情弹窗是否收起,是否进行地图的位移
      this.changView()
    }
  },
  computed: {},
  mounted () {
    setTimeout(() => {
      this.initMap()
      this.addTaskArea()
    }, 200)
  },
  methods: {
    initMap () {
      this.map = L.map('map', {
        minZoom: 2,
        maxZoom: 20,
        center: [27.856556080479, 114.790252283458],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
        crs: L.CRS.EPSG3857
      })
      L.tileLayer(
        'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
      ).addTo(this.map)
    },
    addTaskArea () {
      const areaGeoData2 = JSON.parse(this.areaGeoData)
      if (!areaGeoData2) {
        Toast('此任务没有区域')
        return
      }
      const taskAreaFea = {
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: areaGeoData2.geometry
          }
        ]
      }
      this.areaFea = L.geoJson(taskAreaFea)
      this.areaFea.addTo(this.map)
      this.map.fitBounds(this.areaFea.getBounds(), {
        paddingTopLeft: [0, -300]
      })
    },
    changView () {
      if (this.moveDeatialFram) {
        this.map.fitBounds(this.areaFea.getBounds(), {
          paddingTopLeft: [0, 0]
        })
      } else {
        this.map.fitBounds(this.areaFea.getBounds(), {
          paddingTopLeft: [0, -300]
        })
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
