<template>
    <div class="provider-map" :id="mapName"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';
import { stat } from 'fs';
import { mapState, mapActions } from 'vuex';

let map: any;
let lat:number;
let long:number;
let userLocationMarker;
let component;

export default Vue.extend({
  name: 'ProviderSearchMap',
  props: ['name'],
  data() {
    return {
      mapName: `${this.name}-map`,
    };
  },
  mounted: function () {

    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 7,
      center: new google.maps.LatLng(store.state.lat,store.state.lng),
      mapTypeControl: false,
      zoomControl: false,
      styles: [{
          stylers: [{ 
               saturation: -100 
              }]
      }]
    }

    map = new google.maps.Map(element, options);

    this.moveToCurrentLocation();

    component = this;

    map.addListener('click', function(e) {
        component.SetLocationMarker(e.latLng, map);
    });
  },
  computed: mapState({
  }),
  methods: {
        ...mapActions({
            searchProviders: 'getProvidersForLocation'
        }),
        moveToCurrentLocation () {
            var rv = -1;
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null)
                    rv = parseFloat(RegExp.$1);

                if (rv > -1) {
                    if (rv >= 9.0) {
                        window.navigator.geolocation.getCurrentPosition(this.OnSuccessFirstTime, null);                
                        return new google.maps.LatLng(lat, long);
                    }
                }
            }
            else {
                window.navigator.geolocation.getCurrentPosition(this.OnSuccessFirstTime, null);
                return new google.maps.LatLng(lat, long);
            }
        },
        OnSuccessFirstTime(location) {
            this.$store.commit('updatelocation', { latitude: location.coords.latitude, longitude: location.coords.longitude });

            map.setCenter(new google.maps.LatLng(location.coords.latitude, location.coords.longitude));
            map.setZoom(14);
        },
        OnErrorFirstTime(err) {
        },
        SetMapZoom(zoom){
            map.setZoom(zoom);
        },
        SetLocationMarker (latlng, map) {

            if(userLocationMarker != null)
                userLocationMarker.setMap(null);
            else
                this.$store.commit('toggleLeftPanelStatus');

            userLocationMarker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'This is you.'
            });

            this.SetMapZoom(15);
            
            this.$store.commit('updatelocation', { latitude: latlng.lat(), longitude: latlng.lng() });

            map.panTo(userLocationMarker.getPosition());

            this.searchProviders();
        }
    }
});


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .provider-map {
        width: 100%;
        height: 100%;
        background: gray;
        position: absolute !important;
        top: 0;
        left: 0;
    }
</style>
