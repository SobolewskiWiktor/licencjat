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
                    v-model="newUser.name"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nazwisko"
                    v-model="newUser.surname"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Login"
                    v-model="newUser.login"
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
                      'Administrator Infrastruktury',
                      'Użytkownik',
                    ]"
                    v-model="newUser.title"
                  ></v-combobox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Hasło"
                    hide-details
                    required
                    v-model="newUser.password"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Hasło"
                    hide-details
                    required
                    v-model="newUser.confirmPassowrd"
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
                @click.prevent="addUser()"
              ></v-btn>
              <v-btn text="Zamknij" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
    <div id="usersListContent">
      <v-expansion-panels class="w-50">
        <v-expansion-panel v-for="(elem, index) in users" :key="index">
          <v-expansion-panel-title>
            <div id="titleContent">
              <div id="titleBox">#{{elem.ID}}</div>
              <div id="titleBox">{{ elem.Name }}</div>
              <div id="titleBox">{{ elem.Surname }}</div>
              <div id="titleBox">{{ elem.Login }}</div>
              <div id="titleBoxChip">
                <v-chip color="red"> {{ elem.Title }} </v-chip>
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
                    @click.prevent="getEditInfo(elem.Login)"
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
                            v-model="editUser.name"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Nazwisko"
                            hide-details
                            required
                            v-model="editUser.surname"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Login"
                            hide-details
                            required
                            v-model="editUser.login"
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
                            v-model="editUser.title"
                          ></v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Hasło"
                            hide-details
                            v-model="editUser.password"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            label="Hasło"
                            hide-details
                            v-model="editUser.confirmPassowrd"
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
                        @click.prevent="updateUser()"
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
                    <v-card-text> Czy napewno chcesz usunąć? {{ elem.name }} </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text="Potwierdź"
                        variant="outlined"
                        class="text-green"
                        @click.prevent="deleteUser(users[index].ID)"
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
import axios from "axios";
export default {
  data() {
    return {
      users: [], 
      
      newUser: {
        name: "",
        surname: "",
        login: "",
        password: "",
        confirmPassowrd: "",
        title: "",
        status: "Aktywny"
      },
      editUser: {
        id:"",
        name: "",
        surname: "",
        login: "",
        password: "",
        confirmPassowrd: "",
        title: "",
        status: "",
      }
    };
  },
  methods: {
    async getUsers()
    {
      const getter = await axios.get(`http://localhost:3100/api/users/getAll`)
      this.users = getter.data
    },
    async addUser()
    {
      const adder = await axios.post(`http://localhost:3100/api/users/create`, this.newUser)
      this.getUsers()
    },
    async deleteUser(userID)
    {
       const deleter = await axios.post(`http://localhost:3100/api/users/delete/${userID}`)
       this.getUsers();
    },
    async getEditInfo(userLogin)
    {
        const getter = await axios.get(`http://localhost:3100/api/users/getUserData/${userLogin}`)
        this.editUser.id = getter.data.ID;
        this.editUser.name = getter.data.Name;
        this.editUser.surname = getter.data.Surname;
        this.editUser.login = getter.data.Login;
        this.editUser.title = getter.data.Title;
        this.editUser.status = getter.data.Status;
    },
    async updateUser() {
      const updater = await axios.post(`http://localhost:3100/api/users/update`, this.editUser)
      this.getUsers();
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
