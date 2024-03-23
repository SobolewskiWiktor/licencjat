<template>
  <div id="deviceViewContent">
    <div id="searchBar">
      <div id="searchBarButton">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="surface-variant"
              text="Wyszukaj"
              variant="flat"
            ></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Wyszukiwanie urządzeń">
              <v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="firstname"
                          :counter="10"
                          :rules="nameRules"
                          label="Miasto"
                          hide-details
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="lastname"
                          :counter="10"
                          :rules="nameRules"
                          label="Ulica"
                          hide-details
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-divider
                      :thickness="3"
                      color="info"
                      class="mt-5"
                    ></v-divider>
                    <v-row class="mt-2">
                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="firstname"
                          :counter="10"
                          :rules="nameRules"
                          label="Nazwa"
                          hide-details
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="firstname"
                          :counter="10"
                          :rules="nameRules"
                          label="Numer Seryjny"
                          hide-details
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-2">
                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="firstname"
                          :counter="10"
                          :rules="nameRules"
                          label="Adres IP"
                          hide-details
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Wyszukaj"
                  variant="tonal"
                  color="green"
                  @click.prevent="searchDevice"
                  :loading="loading"
                ></v-btn>
                <v-btn
                  text="Zamknij"
                  variant="tonal"
                  color="red "
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </div>

    <div id="devicesBox">
      <div id="devicesBoxContent">
        <div id="deviceRow">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <div id="panelTitle">
                  <div id="panelTitleBoxID">#1</div>
                  <div id="panelTitleBox">s-pab-a001-1</div>
                  <div id="panelTitleBox">Cisco WS-C3750X</div>
                  <div id="panelTitleBox">y9BNXYiR</div>
                  <div id="panelTitleBox">Switch</div>
                  <div id="panelTitleBox">48 Port</div>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div id="optionsButtons">
                  <!-- Przycisk informacji -->
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="surface-variant"
                        text="Informacje"
                        variant="flat"
                        class="ml-2"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Dialog">
                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <!-- Przycisk statystyk -->
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="surface-variant"
                        text="Statystyki"
                        variant="flat"
                        class="ml-2"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Dialog">
                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <!-- Przycisk edycji -->
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="surface-variant"
                        text="Edytuj"
                        variant="flat"
                        class="ml-2"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Dialog">
                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <!-- Przycisk pobrania konfiguracji -->
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="surface-variant"
                        text="Konfiguracja"
                        variant="flat"
                        class="ml-2"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Dialog">
                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <!-- Przycisk usuwania -->
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="red"
                        text="Usuń"
                        variant="flat"
                        class="ml-2"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Dialog">
                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Close Dialog"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/deviceView.css";
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async searchDevice() {
      this.loading = !this.loading;
    },
  },
};
</script>
