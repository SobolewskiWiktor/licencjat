<template>
  <div id="deviceViewContent">
    <div id="searchBar">
      <div id="searchBarButton">
        <v-dialog max-width="800">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="surface-variant"
              class="ml-2"
              text="Dodaj"
              variant="flat"
            ></v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="Dodawanie">
              <v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Nazwa"
                          v-model="name"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Producent"
                          v-model="manufacture"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Model"
                          v-model="model"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="S / N"
                          v-model="sn"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Typ"
                          v-model="type"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Ilość portów"
                          v-model="ports"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Prędkość portów"
                          v-model="speed"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Miasto"
                          v-model="city"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Ulica"
                          v-model="street"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Number budynku"
                          v-model="numberBuilding"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Pomieszczenie"
                          v-model="room"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Piętro"
                          v-model="floor"
                          readonly
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Prioritet"
                          v-model="priority"
                          readonly
                          variant="outlined"
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

        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="surface-variant"
              class="ml-2"
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
                  <v-dialog max-width="800">
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
                      <v-card title="Informacje o urządzeniu">
                        <v-card-text>
                          <v-form v-model="valid">
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Nazwa"
                                    v-model="name"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Producent"
                                    v-model="manufacture"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Model"
                                    v-model="model"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="S / N"
                                    v-model="sn"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Typ"
                                    v-model="type"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Ilość portów"
                                    v-model="ports"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Prędkość portów"
                                    v-model="speed"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Miasto"
                                    v-model="city"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Ulica"
                                    v-model="street"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Number budynku"
                                    v-model="numberBuilding"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Pomieszczenie"
                                    v-model="room"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Piętro"
                                    v-model="floor"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Prioritet"
                                    v-model="priority"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-form>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Zamknij"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <!-- Przycisk statystyk -->
                  <v-dialog max-width="900">
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
                          <div id="StatisticsContentBox">
                            <div id="StatisticsChart">
                              <div id="chart">
                                <apexchart
                                  type="line"
                                  height="250"
                                  :options="chartOptions"
                                  :series="series"
                                ></apexchart>
                              </div>
                            </div>
                            <div id="StatisticsChart">
                              <div id="chart">
                                <apexchart
                                  type="line"
                                  height="250"
                                  :options="chartOptions2"
                                  :series="series"
                                ></apexchart>
                              </div>
                            </div>
                            <div id="StatisticsChart">
                              <div id="chart">
                                <apexchart
                                  type="line"
                                  height="250"
                                  :options="chartOptions3"
                                  :series="series2"
                                ></apexchart>
                              </div>
                            </div>
                          </div>
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
                  <v-dialog max-width="800">
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
                      <v-card title="Edycja">
                        <v-card-text>
                          <v-form v-model="valid">
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Nazwa"
                                    v-model="name"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Producent"
                                    v-model="manufacture"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Model"
                                    v-model="model"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="S / N"
                                    v-model="sn"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Typ"
                                    v-model="type"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Ilość portów"
                                    v-model="ports"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Prędkość portów"
                                    v-model="speed"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Miasto"
                                    v-model="city"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Ulica"
                                    v-model="street"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Number budynku"
                                    v-model="numberBuilding"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Pomieszczenie"
                                    v-model="room"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Piętro"
                                    v-model="floor"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Prioritet"
                                    v-model="priority"
                                    readonly
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-form>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text="Zapisz"
                            class="text-green"
                            variant="outlined"
                            @click="isActive.value = false"
                          ></v-btn>
                          <v-btn
                            text="Zamknij"
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
                      <v-card title="Konfiguracja urządzenia">
                        <div id="configurationTextArea">
                          <div id="configurationBox">
                            <v-textarea
                              variant="outlined"
                              class="w-100 h-100 mt-5"
                              rows="20"
                              no-resizereadonly
                              v-model="configuration"
                            ></v-textarea>
                          </div>
                        </div>

                        <v-card-actions class="mt-10">
                          <v-spacer class="mt-10"></v-spacer>
                          <v-btn
                            text="Pobierz"
                            variant="outlined"
                            @click="isActive.value = false"
                          ></v-btn>
                          <v-btn
                            text="Zamknij"
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
                      <v-card title="Usuwanie">
                        <v-card-text>
                          Czy napewno chcesz usunąć {{ name }} ?
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text="Potwierdź"
                            variant="outlined"
                            class="text-green"
                            @click="isActive.value = false"
                          ></v-btn>
                          <v-btn
                            text="Zamknij"
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
import ApexCharts from "apexcharts";
export default {
  data() {
    return {
      loading: false,
      name: "s-pab-a001-1",
      manufacture: "Cisco",
      model: "WS-C3750X",
      sn: "y8BNXiR",
      type: "Switch",
      ports: "48",
      speed: "10 GB",
      city: "Pabianice",
      street: "Myśliwska",
      numberBuilding: "22",
      room: "201",
      floor: "22",
      priority: "Critical",

      configuration: "",

      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      series2: [
    { name: "Gi 1", data: [3, 11, 75, 36, 17, 31, 16, 49, 45] },
    { name: "Gi 2", data: [18, 20, 45, 11, 85, 50, 8, 64, 44] },
    { name: "Gi 3", data: [32, 97, 29, 30, 76, 35, 39, 73, 46] },
    { name: "Gi 4", data: [56, 0, 16, 90, 82, 32, 31, 77, 88] },
    { name: "Gi 5", data: [16, 31, 41, 9, 89, 89, 38, 53, 15] },
    { name: "Gi 6", data: [71, 82, 50, 45, 74, 84, 94, 86, 72] },
    { name: "Gi 7", data: [18, 7, 17, 4, 4, 31, 61, 52, 84] },
    { name: "Gi 8", data: [81, 38, 63, 96, 36, 19, 100, 83, 68] },
    { name: "Gi 9", data: [16, 60, 96, 15, 7, 49, 44, 21, 16] },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "CPU Util",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      },
      chartOptions2: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Ram Util",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      },
      chartOptions3: {
        chart: {
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Ports Util",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      },
    };
  },
  async mounted() {
    await this.DefaultKonf();
  },
  methods: {
    async searchDevice() {
      this.loading = !this.loading;
    },
    async DefaultKonf() {
      const konfiguracjaSwitcha = `
          enable secret <hasło>
          username test password <hasło>

          line console 0
          login local
          line vty 0 4
          login local
          transport input ssh

          vlan 10
          vlan 20
          vlan 30

          interface range GigabitEthernet1/0/1-48
          switchport mode access
          switchport access vlan 20
          spanning-tree portfast
          spanning-tree bpduguard enable

          interface Vlan10
          ip address 192.168.1.1 255.255.255.0

          interface Vlan30
          ip address 192.168.3.1 255.255.255.0
          `;

      this.configuration = konfiguracjaSwitcha;
    },
  },
};
</script>
