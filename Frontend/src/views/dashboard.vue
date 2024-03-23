<template>
 <div id="DashboardContet">
   <div id="DashboardBar">
     <div id="BarLogo">
       <img id="appLogoBar" src="../../images/appLogo.png">
     </div>
     <div id="DashboardBarOptions">
       <div id="DashboardBarOptionsButtonBox">
        <v-btn variant="plain" class="text-white rounded-xl" @click.prevent="changeDisplay('Default')" >
          Główna
        </v-btn>
       </div>
       <div id="DashboardBarOptionsButtonBox">
        <v-btn variant="plain" class="text-white rounded-xl" @click.prevent="changeDisplay('Devices')">
          Urządzenia
        </v-btn>
       </div>
       <div id="DashboardBarOptionsButtonBox">
        <v-btn variant="plain" class="text-white rounded-xl" @click.prevent="changeDisplay('Users')">
          Użytkownicy
        </v-btn>
       </div>
       <div id="DashboardBarOptionsButtonBox">
        <v-btn variant="plain" class="text-white rounded-xl" @click.prevent="changeDisplay('Map')">
          Mapa
        </v-btn>
       </div>
       <div id="DashboardBarOptionsButtonBox">
        <v-btn variant="plain" class="text-white rounded-xl" @click.prevent="changeDisplay('Map')">
          Wyloguj
        </v-btn>
       </div>
     </div>
     <div id="userBar">
       <img id="userImage" src="../../images/pngwing.com.png">
       <h1>Marcin Kowalski</h1>
     </div>
   </div>
   <div id="DashboardDisplayWindow">
      <div id="DashboardDisplayWindowContent">
             <mainView v-if="displayOption == 'Default'"/>
             <usersView v-if="displayOption == 'Users'"/>
             <deviceView v-if="displayOption == 'Devices'"/>
             <mapView v-if="displayOption == 'Map'"/>
      </div>
   </div>
 </div>
</template>

<script>
import "../styles/dashboard.css"

import mainView from "./main.vue"
import usersView from "./usersView.vue"
import deviceView from "./deviceView.vue"
import mapView from "./mapView.vue"
export default {
  data() {
    return{
      displayOption: 'Default'
    }
  },
  methods: 
  {
    async changeDisplay(option)
    {
      this.displayOption = option;
    }
  },
  components:
  {
    mainView,
    usersView,
    deviceView,
    mapView,
  }
};
</script>
