<template>
  <div class="map-container" id="map"></div>
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
  },
  methods: {
    initMap () {
      const map = L.map('map', {
        minZoom: 3,
        maxZoom: 14,
        center: [39.550339, 116.114129],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
        crs: L.CRS.EPSG3857
      })
      L.tileLayer(
        'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
      ).addTo(map)
      // 加载工具栏
      map.pm.addControls({
        position: 'topleft',
        drawCircle: false
      })
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
