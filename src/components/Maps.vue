<template>
  <div class="h-screen">
    <div id="map" class="h-full z-10"></div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "vue";
export default {
  setup() {
    let map;
    onMounted(() => {
      map = leaflet.map("map").setView([-6.1363212, 120.5338009], 12);
      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 19,
        })
        .addTo(map);
      leaflet
        .marker([-6.1013888, 120.4766667])
        .addTo(map)
        .bindPopup("<b>Bukit Selayar</b><br> Pulau Selayar.")
        .openPopup();
    });
  },
};
</script>
