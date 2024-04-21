<template>
  <div id="loginPanalContent">
    <div id="loginSection">
      <div id="loginFormAndLogo">
        <div id="loginSectionAppLogo">
        <img id="applogo" src="../../images/appLogo.png">
      </div>
        <div id="loginForm">
          <div class="loginFormBox">
            <v-text-field label="Login" variant="underlined" v-model="login"></v-text-field>
          </div>
          <div class="loginFormBox">
            <v-text-field type="password" label="Hasło" variant="underlined" v-model="password"></v-text-field>
          </div>
          <div class="loginFormBoxBottom">
            
            <v-btn
             class="text-blue-darken-1"
             variant="outlined"
             @click.prevent="Login()"
            >
              Zaloguj
            </v-btn>
          </div>
        </div>
      </div>
        <v-card title="Uwaga!" text="Dostęp do systemu jedynie po uzyskaniu odpowiednich uprawnień" color="primary" class="w-100" variant="tonal"></v-card>
    </div>
    <div id="loginWebpage">

    </div>
  </div> 
</template>

<script>
import "@/styles/login.css";
import axios from "axios";
import { useToast } from "vue-toastification";
import router from "@/router/index";
const toast = useToast();
export default {
  data() {
    return {
      toastService: toast,
      login: "",
      password: "",
    };
  },
  methods:
  {
    async Login()
    {
      if(this.password != "" && this.login != "")
      {
        const loginPass = {
          login: this.login,
          password: this.password,
        }
          const auth = await axios.post(`http://localhost:3100/api/login/`, loginPass)
          const token = auth.data;
          await localStorage.setItem('SecurityToken', token);
          router.push("/home")
      }else
      {
        this.myUseToast("Podaj dane", "warning")
      }
    },




    myUseToast(message, type) {
      if (type == "success") {
        this.toastService.success(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "error") {
        this.toastService.error(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "warning") {
        this.toastService.warning(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "info") {
        this.toastService.info(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
  }
};
</script>
