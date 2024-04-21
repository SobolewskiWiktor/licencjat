<template>
  <div id="DashboardContet">
    <div id="DashboardBar">
      <div id="BarLogo">
        <img id="appLogoBar" src="../../images/appLogo.png" />
      </div>
      <div id="DashboardBarOptions">
        <div id="DashboardBarOptionsButtonBox">
          <v-btn
            variant="plain"
            class="text-white rounded-xl"
            @click.prevent="changeDisplay('Default')"
          >
            Główna
          </v-btn>
        </div>
        <div id="DashboardBarOptionsButtonBox">
          <v-btn
            variant="plain"
            class="text-white rounded-xl"
            @click.prevent="changeDisplay('Devices')"
          >
            Urządzenia
          </v-btn>
        </div>
        <div id="DashboardBarOptionsButtonBox">
          <v-btn
            variant="plain"
            class="text-white rounded-xl"
            @click.prevent="changeDisplay('Users')"
          >
            Użytkownicy
          </v-btn>
        </div>
        <div id="DashboardBarOptionsButtonBox">
          <v-btn
            variant="plain"
            class="text-white rounded-xl"
            @click.prevent="changeDisplay('Map')"
          >
            Mapa
          </v-btn>
        </div>
        <div id="DashboardBarOptionsButtonBox">
          <v-btn
            variant="plain"
            class="text-white rounded-xl"
            @click.prevent="changeDisplay('Map')"
          >
            Wyloguj
          </v-btn>
        </div>
      </div>
      <div id="userBar">
        <img id="userImage" src="../../images/pngwing.com.png" />
        <h1>{{ userName }}</h1>
      </div>
    </div>
    <div id="DashboardDisplayWindow">
      <div id="DashboardDisplayWindowContent">
        <mainView v-if="displayOption == 'Default'" />
        <usersView v-if="displayOption == 'Users'" />
        <deviceView v-if="displayOption == 'Devices'" />
        <mapView v-if="displayOption == 'Map'" />
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/dashboard.css";

import mainView from "./main.vue";
import usersView from "./usersView.vue";
import deviceView from "./deviceView.vue";
import mapView from "./mapView.vue";
import axios from "axios";
export default {
  data() {
    return {
      displayOption: "Default",
      logedUser: "",
      userName: "",
    };
  },
  mounted() {
     this.authorize();
  },
  methods: {
    async changeDisplay(option) {
      this.displayOption = option;
    },
    async authorize() {
      const token = localStorage.getItem("SecurityToken");
      const check = await axios.post(
        "http://localhost:3100/api/authorization",
        { token: token }
      );
      if (check.data.name == "JsonWebTokenError") {
        router.push("/");
      } else {
        localStorage.setItem("LogedUser", check.data.Login);
        this.logedUser = check.data.Login;
        this.getUserData();
      }
    },
    async getUserData() {
      const getUserData = await axios.get(
        `http://localhost:3100/api/users/getUserData/${this.logedUser}`
      );
      this.userName = getUserData.data.Name + " " + getUserData.data.Surname;
    },
  },
  components: {
    mainView,
    usersView,
    deviceView,
    mapView,
  },
};
</script>
