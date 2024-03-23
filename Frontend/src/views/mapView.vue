<template>
  <div id="mapContent">
    <div id="mapFull">
    <div
      id="mapContainerFull"
      ref="hereMap"
    ></div>
  </div>
  </div>
</template>

<script>
import "../styles/mapView.css"

export default {
  name: "HereMap",
  props: {
    center: Object,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: "UPd29ZLEYvqYlfPThXGjPCAPt7cD-xac9vXoLO4JajU",
      // You can get the API KEY from developer.here.com
    };
  },
  async mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey,
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    async initializeHereMap() {
      // rendering map

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      let maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      let map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 10,
        center: { lat: 52.231141021124145, lng: 21.000760776600742 },
        // center object { lat: 40.730610, lng: -73.935242 }
      });

      addEventListener("resize", () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map

      let LocationOfMarker = {lat: 51.76296885698247, lng: 19.458041883332665, };
      // Create a marker icon from an image URL:
      let icon = new H.map.Icon("../../images/hub.png", {
        size: { w: 30, h: 30 },
      });

      // Create a marker using the previously instantiated icon:
      let marker = await new H.map.Marker(LocationOfMarker, { icon: icon });
      // Add the marker to the map:
      map.addObject(marker);

      LocationOfMarker = { lat: 51.65766279859625, lng: 19.38700440126805 };
      // Create a marker icon from an image URL:
      icon = new H.map.Icon("../../images/router.png", {
        size: { w: 30, h: 30 },
      });
      marker = await new H.map.Marker(LocationOfMarker, { icon: icon });
      // Add the marker to the map:
      map.addObject(marker);

      LocationOfMarker = { lat: 51.87663585075783, lng: 19.41184638671817 };
      // Create a marker icon from an image URL:
      icon = new H.map.Icon("../../images/router.png", {
        size: { w: 30, h: 30 },
      });
      marker = await new H.map.Marker(LocationOfMarker, { icon: icon });
      // Add the marker to the map:
      map.addObject(marker);

      LocationOfMarker = {lat: 51.760829196518415, lng: 19.459733087678718, };
      // Create a marker icon from an image URL:
      icon = new H.map.Icon("../../images/hub.png", {
        size: { w: 30, h: 30 },
      });

      // Create a marker using the previously instantiated icon:
      marker = await new H.map.Marker(LocationOfMarker, { icon: icon });
      map.addObject(marker);
    },
  },
};
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>
