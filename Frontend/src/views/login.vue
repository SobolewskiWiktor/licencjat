<template>
  <div id="loginPanalContent">
    <div id="loginForm">
      <div>
        <v-card
          class="mx-auto pa-12 pb-8"
          elevation="8"
          width="448"
          rounded="lg"
          color="grey-darken-3"
        >
          <div class="text-subtitle-1 ">Account</div>

          <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <div
            class="text-subtitle-1  d-flex align-center justify-space-between"
          >
            Password

            <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Forgot login password?</a
            >
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
            Log In
          </v-btn>
        </v-card>
      </div>
    </div>
    <div id="futter">
    Praca Licencjacka 2024 - Wiktor Sobolewki ©
  </div>
  </div>
</template>

<script>
import "@/styles/login.css";
export default {
  data() {
    return {};
  },
};
</script>
