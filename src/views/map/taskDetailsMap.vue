<template>
  <div class="map-container" id="map"></div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import './mapExtent/marginfyingGlass'
import './mapExtent/marginfyingGlass.css'

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
    this.$EventBus.$on('tabEvent', (type, status) => {
      this.mapOperation(type, status)
    })
    this.initMap()
    this.addTaskArea()
    // this.ininFangDaJing()
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
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}'
      ).addTo(this.map)
      // 地图点击事件
      this.map.on('click', (e) => {
        console.log('e', e)
      })
      // 手指移动事件
      this.map.on('move', (e) => {
        console.log('move,center:', this.map.getCenter())
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
        pmIgnore: true,
        style: {
          color: 'green',
          fillColor: '#f03',
          weight: 1,
          fillOpacity: 0.1
        }
        // onEachFeature: (feature, layer) => {
        //   layer.on({
        //     click: (e) => {
        //       console.log('layer', layer)
        //       // this.map.removeLayer(layer)
        //     }
        //   })
        // }
        // allowSelfIntersection: true
      })
      this.areaFea.addTo(this.map)
      L.PM.reInitLayer(this.areaFea)
      this.map.fitBounds(this.areaFea.getBounds(), {
        paddingTopLeft: [0, 0]
      })
    },
    mapOperation (type, val) {
      switch (type) {
        case 'caijidian':
          this.addData('caijidian', val)
          break
        case 'caijixian':
          this.addData('caijixian', val)
          break
        case 'bianji':
          this.editData(val)
          break
      }
    },
    editData (val) {
      // alert('试一试')
      // 开启绘制
      // this.map.pm.enableDraw('Polygon', { allowSelfIntersection: false })
      // 开启编辑
      if (val) {
        this.map.pm.toggleGlobalEditMode({
          snappable: true,
          snapDistance: 20,
          snapMiddle: true,
          templineStyle: {
            color: 'green'
          },
          hintlineStyle: {
            color: 'pink'
          }
        })
      } else {
        this.map.pm.disableGlobalEditMode()
      }
    },
    addData (type, val) {
      if (!val) {
        return
      }
      if (type === 'caijixian') {
        this.map.pm.enableDraw('Line', { allowSelfIntersection: false })
      } else {
        const myIcon = L.icon({
          iconUrl: require('../../assets/img/locationA.png'),
          iconSize: [21, 21]
          // iconAnchor: [13, 21]
        })
        this.map.pm.enableDraw('Marker', {
          snappable: true,
          snapDistance: 30,
          snapMiddle: true,
          markerStyle: {
            icon: myIcon
          }
        })
      }
    },
    ininFangDaJing () {
      const magnifyingGlass = L.magnifyingGlass({
        zoomOffset: 3,
        layers: [
          L.tileLayer('http://b.tile.openstreetmap.org/{z}/{x}/{y}.png')
          // this.areaFea
        ],
        // fixedPosition: true,
        latLng: [39.550339, 116.114129]
      })
      this.map.addLayer(magnifyingGlass)
      this.map.on('contextmenu', (mouseEvt) => {
        console.log('mouseEvt', mouseEvt)
        // if (this.map.hasLayer(magnifyingGlass)) {
        //   return 1
        // }
        // this.map.addLayer(magnifyingGlass)
        // magnifyingGlass.setLatLng(mouseEvt.latlng)
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
