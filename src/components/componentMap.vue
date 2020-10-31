<template>
  <div>
    <div>Данные об аваре:</div>
    <div id="popup" class="ol-popup"></div>
    <div id="map" :class="classMap" ref="mapTarget"></div>
  </div>
</template>

<script>
import * as ol from 'ol'
import * as layer from 'ol/layer'
import * as proj from 'ol/proj'
import * as source from 'ol/source'
import * as geom from 'ol/geom'
import * as style from 'ol/style'
import img from '../components/point.svg'

export default {
  props: ['classMap', 'dataPoint', 'trueAddMarker'],
  data () {
    return {
      mapBlock: null,
      coordi: null
    }
  },
  methods: {
    con (s) {
      console.log([this.coordi])
    },
    createCoordinate (coord) {
      this.coordi = coord
    },
    newMarker (data) {
      var vectorLayer = new layer.Vector({
        source: new source.Vector({
          features: [
            new ol.Feature({
              geometry: new geom.Point(data.cord),
              datas: `Имя: ${data.name}, Адрес: ${data.addres}`
            })
          ]
        }),
        style: new style.Style({
          image: new style.Icon({
            anchor: [0.5, 0.96],
            crossOrigin: 'anonymous',
            src: data.src,
            color: '#fff'
          })
        })
      })
      return vectorLayer
    },
    rmoweMarker (object) {
      const map = this.mapBlock
      map.removeLayer(this.newMarker(object))
    },
    addMarkers (object) {
      const map = this.mapBlock
      console.log(object)
      for (let index = 0; index < object.length; index++) {
        console.log(22)
        map.addLayer(this.newMarker(object[index]))
      }
    },
    popupMarker (cord, block) {
      var overLay = new ol.Overlay({
        element: block,
        position: cord
      })
      return overLay
    },
    createMap () {
      var map = new ol.Map({
        target: this.$refs.mapTarget,
        view: new ol.View({
          center: proj.fromLonLat([39.715974, 47.228565]),
          zoom: 12
        })
      })
      var osmLayer = new layer.Tile({
        source: new source.OSM()
      })
      map.addLayer(osmLayer)
      this.mapBlock = map
      return map
    },
    mapClick () {
      var map = this.mapBlock
      var popup = document.getElementById('popup')
      // var dataPoint = this.$store.commit
      var es = this.trueAddMarker
      const coordinate = this.createCoordinate
      // var coordi = this.coordi
      // var clickAdd = this.clickAddPoint

      map.on('click', function (e) {
        var info = []
        if (es) {
          coordinate(
            {
              name: 'Сергй Корнеев',
              addres: 'xrfkjdf',
              tel: '+78885888946',
              tupe: 'Порыв',
              cord: e.coordinate,
              src: img,
              priorit: 'Высокий'
            })
          // dataPoint('addNewPoint', {
          //   name: 'Сергй Корнеев',
          //   addres: 'xrfkjdf',
          //   tel: '+78885888946',
          //   tupe: 'Порыв',
          //   cord: e.coordinate,
          //   src: img,
          //   priorit: 'Высокий'
          // })
        }
        map.forEachFeatureAtPixel(e.pixel, function (feature) {
          console.log(11)
          info.push(feature.get('datas'))
        })
        console.log(info)
        if (info.length > 0) {
          popup.innerHTML = info.join(',')
          popup.style.display = 'inline'
          popup.style.background = '#fff'
        } else {
          popup.innerHTML = '&nbsp;'
          popup.style.display = 'none'
        }
        return coordinate
      })
    },
    clickAddPoint (cord) {
      if (this.es) {
        this.dataPoint.push({ cord: cord, title: 's', strit: 'd' })
        this.addMarkers(this.dataPoint)
      }
    },
    renderMap () {
      this.createMap()
      this.addMarkers(this.dataPoint)
      this.mapClick()
    }
  },
  watch: {
    coordi () {
      this.addMarkers([this.coordi])
    },
    dataPoint () {
      this.addMarkers(this.dataPoint)
    },
    trueAddMarker () {
      this.trueAddMarker()
    }
  },
  mounted () {
    this.renderMap()
  }
}
</script>
