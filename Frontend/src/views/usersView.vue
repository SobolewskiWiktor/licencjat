<template>
  <div id="usersContent">
    <div id="userAddAndSearch">
      <div id="searchBox">
        <v-text-field label="Wyszukaj" height="200"></v-text-field>
      </div>
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Dodaj"
            variant="flat"
            class="ml-5"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dodaj Użytkownika">
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Imię"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nazwisko"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Login"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-combobox
                    cols="12"
                    md="6"
                    label="Stanowisko"
                    :items="[
                      'Administrator Aplikacji',
                      'Administrator Infrastruktóry',
                      'Użytkownik',
                    ]"
                  ></v-combobox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Login"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Hasło"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text="Dodaj"
                variant="tonal"
                color="green"
                @click="isActive.value = false"
              ></v-btn>
              <v-btn text="Zamknij" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
    <div id="usersListContent">
      <v-expansion-panels class="w-50">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <div id="titleContent">
              <div id="titleBox">#1</div>
              <div id="titleBox">Wiktor</div>
              <div id="titleBox">Sobolewski</div>
              <div id="titleBox">sobolwik</div>
              <div id="titleBoxChip">
                <v-chip color="red"> Administrator Aplikacji </v-chip>
              </div>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div id="buttonsContent">
              <!-- Przycisk Edycji -->
              <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    v-bind="activatorProps"
                    color="surface-variant"
                    text="Edytuj"
                    variant="flat"
                    class="ml-5"
                  ></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card title="Edytuj Użytkownika">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Imię"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Nazwisko"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Login"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-combobox
                            cols="12"
                            md="6"
                            label="Stanowisko"
                            :items="[
                              'Administrator Aplikacji',
                              'Administrator Infrastruktóry',
                              'Użytkownik',
                            ]"
                          ></v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Login"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Hasło"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text="Edytuj"
                        variant="tonal"
                        color="green"
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
                    <v-card-text> Czy napewno chcesz usunąć? </v-card-text>

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
</template>

<script>
import "../styles/usersView.css";
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
