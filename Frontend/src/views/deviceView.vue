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
                          v-model="newname"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Producent"
                          v-model="newmanufacture"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Model"
                          v-model="newmodel"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="S / N"
                          v-model="newsn"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Typ"
                          v-model="newtype"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Ilość portów"
                          v-model="newports"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-combobox
                          label="Prędkość portu"
                          v-model="newspeed"
                          variant="outlined"
                          :items="[
                            '10 Mb/s',
                            '100 Mb/s',
                            '1 Gb/s',
                            '5 Gb/s',
                            '10 Gb/s',
                            '25 Gb/s',
                          ]"
                        ></v-combobox>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Miasto"
                          v-model="newcity"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Ulica"
                          v-model="newstreet"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Number budynku"
                          v-model="newnumberBuilding"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Pomieszczenie"
                          v-model="newroom"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          label="Piętro"
                          v-model="newfloor"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="4">
                        <v-combobox
                          label="Prioritet"
                          v-model="newpriority"
                          variant="outlined"
                          :items="[
                            'Low',
                            'Medium',
                            'High',
                            'Critical',
                            'Disaster',
                          ]"
                        ></v-combobox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Dodaj"
                  variant="tonal"
                  color="green"
                  @click.prevent="addDevice"
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
                    <v-row class="mt-2">
                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="searchName"
                          :counter="10"
                          label="Nazwa"
                          hide-details
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="2" md="6">
                        <v-text-field
                          v-model="searchSerial"
                          :counter="10"
                          label="Numer Seryjny"
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
          <v-btn
            color="surface-variant"
            class="ml-2"
            text="Wyczyść wyszukiwanie"
            variant="flat"
            @click.prevent="getDevices()"
          ></v-btn>

      </div>
    </div>

    <div id="devicesBox">
      <div id="devicesBoxContent">
        <div id="deviceRow">
          <v-expansion-panels>
            <v-expansion-panel v-for="(elem, index) in devices" :key="index">
              <v-expansion-panel-title>
                <div id="panelTitle">
                  <div id="panelTitleBoxID"># {{ elem.id }}</div>
                  <div id="panelTitleBox">{{ elem.name }}</div>
                  <div id="panelTitleBox">{{ elem.model }}</div>
                  <div id="panelTitleBox">{{ elem.sn }}</div>
                  <div id="panelTitleBox">{{ elem.type }}</div>
                  <div id="panelTitleBox">{{ elem.ports }}</div>
                  <div id="panelTitleBox">
                    <v-chip :color="getColor(elem.priority)">
                      {{ elem.priority }}
                    </v-chip>
                  </div>
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
                        @click.prevent="getInfoData(elem.id)"
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
                  <v-dialog max-width="1800">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="surface-variant"
                        text="Statystyki"
                        variant="flat"
                        class="ml-2"
                        @click.prevent="getStatistics(elem.name)"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Statystyki urządzenia">
                        <v-card-text>
                          <div id="statisticLoader" v-if="statLoader == true">
                            <v-progress-circular
                              :size="240"
                              color="primary"
                              indeterminate
                            ></v-progress-circular>
                          </div>
                          <div id="StatisticsContentBox">
                            <div id="StatisticsRow">
                              <div id="StatisticsPortStatus">
                                  <v-card
                                    class="mx-auto"
                                    width="350"
                                  >
                                    <v-list density="compact">
                                      <v-list-subheader>Port Status</v-list-subheader>

                                      <v-list-item
                                        v-for="(item, i) in portStatus"
                                        :key="i"
                                        :value="item.name"
                                      >
                                        <template v-slot:prepend>
                                          <v-icon icon="mdi mdi-ethernet"></v-icon>
                                        </template>

                                        <div class="d-flex align-center">
                                          <v-list-item-title v-text="item.name"></v-list-item-title>
                                          <!-- Chip wyświetlany na równi z tytułem -->
                                          <v-chip v-if="item.status[0] == 2" color="red" class="ml-5">NieAktywny</v-chip>
                                          <v-chip v-else color="green" class="ml-5">Aktywny</v-chip>
                                        </div>
                                      </v-list-item>
                                    </v-list>
                                  </v-card>
                                  <v-card
                                    class="ml-10"
                                    width="350"
                                  >
                                    <v-list>
                                      <v-list-subheader>Port Speed</v-list-subheader>

                                      <v-list-item
                                        v-for="(elem, i) in portSpeed"
                                        :key="i"
                                        :value="elem.name"
                                      >
                                        <template v-slot:prepend>
                                          <v-icon icon="mdi mdi-ethernet"></v-icon>
                                        </template>

                                        <div class="d-flex align-center">
                                          <v-list-item-title v-text="elem.name"></v-list-item-title>
                                          <!-- Chip wyświetlany na równi z tytułem -->
                                          <v-chip  v-if="elem.speed == `Wyłączony`" color="red" class="ml-5">{{elem.speed}}</v-chip>
                                          <v-chip  v-else color="green" class="ml-5">{{elem.speed}}</v-chip>
                                        </div>
                                      </v-list-item>
                                    </v-list>
                                  </v-card>
                              </div>
                              <div id="deviceStatus">
                                <div id="chart">
                                  <apexchart type="area" height="350" :options="chartOptions4" :series="series3"></apexchart>
                                </div>
                                <div id="chart">
                                  <apexchart type="area" height="350" :options="chartOptions5" :series="series4"></apexchart>
                                </div>
                              </div>
                            </div>
                            <div id="StatisticsChart" class="mt-10">
                              <div id="chart">
                                <apexchart
                                  type="line"
                                  height="250"
                                  :options="chartOptions"
                                  :series="series0"
                                ></apexchart>
                              </div>
                            </div>
                            <div id="StatisticsChart">
                              <div id="chart">
                                <apexchart
                                  type="line"
                                  height="250"
                                  :options="chartOptions2"
                                  :series="series1"
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
                            class="mt-2 ml-2 mb-2"
                            text="Zamknij"
                            variant="outlined"
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
                        @click.prevent="getInfoData(elem.id)"
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
                                    v-model="editname"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Producent"
                                    v-model="editmanufacture"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Model"
                                    v-model="editmodel"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="S / N"
                                    v-model="editsn"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Typ"
                                    v-model="edittype"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Ilość portów"
                                    v-model="editports"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-combobox
                                    label="Prędkość portu"
                                    v-model="editspeed"
                                    variant="outlined"
                                    :items="[
                                      '10 Mb/s',
                                      '100 Mb/s',
                                      '1 Gb/s',
                                      '5 Gb/s',
                                      '10 Gb/s',
                                      '25 Gb/s',
                                    ]"
                                  ></v-combobox>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Miasto"
                                    v-model="editcity"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Ulica"
                                    v-model="editstreet"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Number budynku"
                                    v-model="editnumberBuilding"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Pomieszczenie"
                                    v-model="editroom"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-text-field
                                    label="Piętro"
                                    v-model="editfloor"
                                    variant="outlined"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row>
                                <v-col cols="12" md="4">
                                  <v-combobox
                                    label="Prioritet"
                                    v-model="editpriority"
                                    variant="outlined"
                                    :items="[
                                      'Low',
                                      'Medium',
                                      'High',
                                      'Critical',
                                      'Disaster',
                                    ]"
                                  ></v-combobox>
                                </v-col>
                                <v-col cols="12" md="4">
                                  <v-combobox
                                    label="Status"
                                    v-model="editStatus"
                                    variant="outlined"
                                    :items="[
                                      'Aktywny',
                                      'Nieaktywny',
                                    ]"
                                  ></v-combobox>
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
                            @click.prevent="editDevice(elem.id)"
                          ></v-btn>
                          <v-btn
                            text="Zamknij"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <!-- Przycisk konfiguracji -->
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
                          Czy napewno chcesz usunąć {{ elem.name }} ?
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text="Potwierdź"
                            variant="outlined"
                            class="text-green"
                            @click.prevent="deleteDevice(elem.id)"
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
import axios from "axios";
export default {
  data() {
    return {
      statLoader: true,
      loading: false,
      devices: [],
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

      //new device
      newname: "",
      newmanufacture: "",
      newmodel: "",
      newsn: "",
      newtype: "",
      newports: "",
      newspeed: "",
      newcity: "",
      newstreet: "",
      newnumberBuilding: "",
      newroom: "",
      newfloor: "",
      newpriority: "",

      //edit device
      editname: "",
      editmanufacture: "",
      editmodel: "",
      editsn: "",
      edittype: "",
      editports: "",
      editspeed: "",
      editcity: "",
      editstreet: "",
      editnumberBuilding: "",
      editroom: "",
      editfloor: "",
      editpriority: "",

      configuration: "",


      //staystyki 
      portStatus: [],
      portSpeed: [],

      series0: [],
      series1: [],
      series2: [],
      series3: [],
      series4: [],
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
        },
      },
      chartOptions4: {
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
          text: "ICMP Time",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
        },
      },
      chartOptions5: {
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
          text: "ICMP Loss",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
        },
      },

      //wyszukiwanie
      searchName: '',
      searchSerial: '',
    };
  },
  async mounted() {
    await this.DefaultKonf();
    await this.getDevices();
  },
  methods: {
    async getDevices() {
      this.devices = [];
      const getter = await axios.get(
        `http://localhost:3100/api/devices/getAll`
      );
      for (let i = 0; i < getter.data.length; i++) {
        let device = {
          id: String(getter.data[i].ID),
          name: String(getter.data[i].Name),
          model: String(getter.data[i].Model),
          sn: String(getter.data[i].SerialNumber),
          type: String(getter.data[i].Type),
          ports: String(getter.data[i].NumberOfPorts),
          priority: String(getter.data[i].Priority),
        };
        this.devices.push(device);
      }
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
    async addDevice() {
      const newDevice = {
        name: String(this.newname),
        manufacturer: String(this.newmanufacture),
        model: String(this.newmodel),
        serial: String(this.newsn),
        type: String(this.newtype),
        numberOfPorts: String(this.newports),
        speedPorts: String(this.newspeed),
        city: String(this.newcity),
        street: String(this.newstreet),
        numberBuilding: String(this.newnumberBuilding),
        room: String(this.newroom),
        floor: String(this.newfloor),
        priority: String(this.newpriority),
      };
      const creater = await axios.post(
        `http://localhost:3100/api/devices/create`,
        newDevice
      );
      this.getDevices();
    },
    getColor(priority) {
      if (priority === "Low") {
        return "teal-lighten-2";
      } else if (priority === "Medium") {
        return "orange-lighten-2";
      } else if (priority === "High") {
        return "deep-orange-darken-3";
      } else if (priority === "Critical") {
        return "red-lighten-1";
      } else if (priority === "Disaster") {
        return "red-accent-4";
      } else {
        return "grey"; // Domyślny kolor, gdy priority nie pasuje do żadnego przypadku
      }
    },
    async getInfoData(id) {
      let getter = await axios.get(
        `http://localhost:3100/api/devices/getData/${id}`
      );

      this.name = String(getter.data.Name);
      this.manufacture = String(getter.data.Manufacturer);
      this.model = String(getter.data.Model);
      this.sn = String(getter.data.SerialNumber);
      this.type = String(getter.data.Type);
      this.ports = String(getter.data.NumberOfPorts);
      this.speed = String(getter.data.SpeedOfPorts);
      this.city = String(getter.data.City);
      this.street = String(getter.data.Street);
      this.numberBuilding = String(getter.data.NumberOfStreet);
      this.room = String(getter.data.Room);
      this.floor = String(getter.data.Floor);
      this.priority = String(getter.data.Priority);

      this.editname = String(getter.data.Name);
      this.editmanufacture = String(getter.data.Manufacturer);
      this.editmodel = String(getter.data.Model);
      this.editsn = String(getter.data.SerialNumber);
      this.edittype = String(getter.data.Type);
      this.editports = String(getter.data.NumberOfPorts);
      this.editspeed = String(getter.data.SpeedOfPorts);
      this.editcity = String(getter.data.City);
      this.editstreet = String(getter.data.Street);
      this.editnumberBuilding = String(getter.data.NumberOfStreet);
      this.editroom = String(getter.data.Room);
      this.editfloor = String(getter.data.Floor);
      this.editpriority = String(getter.data.Priority);
      this.editStatus = String(getter.data.Status)
    },
    async editDevice(deviceId) {
      const editDevice = {
        id: String(deviceId),
        name: String(this.editname),
        manufacturer: String(this.editmanufacture),
        model: String(this.editmodel),
        serial: String(this.editsn),
        type: String(this.edittype),
        numberOfPorts: String(this.editports),
        speedPorts: String(this.editspeed),
        city: String(this.editcity),
        street: String(this.editstreet),
        numberBuilding: String(this.editnumberBuilding),
        room: String(this.editroom),
        floor: String(this.editfloor),
        priority: String(this.editpriority),
        status: String(this.editStatus),
      };

      const updater = await axios.post(
        `http://localhost:3100/api/devices/update`,
        editDevice
      );
      this.getDevices();
      console.log(updater);
    },
    async deleteDevice(deviceID) {
      const deleter = await axios.post(
        `http://localhost:3100/api/devices/delete/${deviceID}`
      );
      this.getDevices();
    },
    async getStatistics(deviceName) {
      this.statLoader = true
      //zerowanie tabel:
      this.portStatus = [];
      this.portSpeed = [];
      this.series0 = [];
      this.series1 = [];
      this.series2 = [];
      this.series3 = [];
      this.series4 = [];
      let device = { name: String(deviceName) };
      // pobranie ID urządzenia monitorowanego
      const getDeviceID = await axios.post(
        `http://localhost:3100/api/gethostid/getDeviceID`,
        device
      );
      device.hostid = String(getDeviceID.data[0].hostid);

      // pobranie id parametów 
      const getIDParameters = await axios.post(
        `http://localhost:3100/api/getactionid/getActionID`,
        device
      );
      console.log(getIDParameters)
      let tempStatus = 0;
      let tempSpeed = 0;
      let tempBirsReceived = 0;
      for (let i = 0; i < getIDParameters.data.length; i++) {
        // zliczenie statusu portów z 60 danych
        if (getIDParameters.data[i].name == "Operational status") {
          let interfacename = `interface 0/` + tempStatus
          tempStatus += 1;
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getStatus`,
            device
          );
          const object = {name: interfacename, status: getPortStatus.data[59]}
          this.portStatus.push(object)
        }else if (getIDParameters.data[i].name == "Speed")
        {
          let interfacename = `interface 0/` + tempSpeed
          tempSpeed += 1;
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getStatus`,
            device
          );
          const object = {name: interfacename, speed: ""}
          if(getPortStatus.data[1] >= 1000000000)
          {
            object.speed = Number(parseFloat(getPortStatus.data[1]) / 1000000000) +`Gb/s`
          }else if (getPortStatus.data[1] > 0 && getPortStatus.data[1] < 1000000000)
          {
            object.speed = Number(parseFloat(getPortStatus.data[1])) +`Mb/s`
          }else
          {
            object.speed = "Wyłączony"
          }
          this.portSpeed.push(object)
        }else if (getIDParameters.data[i].name == "Bits received") {
          let interfacename = `interface 0/` + tempBirsReceived
          tempBirsReceived += 1;
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getStatus`,
            device
          );
          const object = {name: interfacename, data: getPortStatus.data}
          this.series2.push(object)
        }else if (getIDParameters.data[i].name == "TP-LINK: ICMP loss")
        {
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getRamUtil`,
            device
          );
          let objectToPut = {name:deviceName, data:getPortStatus.data}
          this.series4.push(objectToPut)
        }
        else if (getIDParameters.data[i].name == "TP-LINK: ICMP response time")
        {
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getRamUtil`,
            device
          );
          let tempMsTab = []
          for(let j=0; j<getPortStatus.data.length; j++)
          {
            let ConvertToMs = Number(parseFloat(getPortStatus.data[j])*1000).toFixed(2)
        
            tempMsTab.push(ConvertToMs)
          }
          let objectToPut = {name:deviceName, data:tempMsTab}
          this.series3.push(objectToPut)
        }
        else if (getIDParameters.data[i].name == "CPU utilization")
        {
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getRamUtil`,
            device
          );
          let objectToPut = {name:deviceName, data:getPortStatus.data}
          this.series0.push(objectToPut)
        }
        else if (getIDParameters.data[i].name == "Memory utilization")
        {
          device.action = String(getIDParameters.data[i].id);
          const getPortStatus = await axios.post(
            `http://localhost:3100/api/devicestatus/getRamUtil`,
            device
          );
          let objectToPut = {name:deviceName, data:getPortStatus.data}
          this.series1.push(objectToPut)
        }

      }
      this.statLoader = false;
    },
    async searchDevice()
    {
      if(this.searchName != '')
      {
        const foundDevice = this.devices.find(device => device.name === this.searchName);
        this.devices = [];
        this.devices.push(foundDevice)
      }else if(this.searchSerial != '')
      {
        const foundDevice = this.devices.find(device => device.sn === this.searchSerial);
        this.devices = [];
        this.devices.push(foundDevice)
      }
    },
  },
};
</script>
