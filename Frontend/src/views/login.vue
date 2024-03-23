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
export default {
  data() {
    return {
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
        this.$router.push('/home');
      }
    }
  }
};
</script>
