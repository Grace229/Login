<template>
  <main
    style="min-height:100vh"
    class="fill-height primary white--text d-flex flex-column justify-center pa-4"
  >
    <v-card class="mx-auto mt-10 p-8" width="256" tile>
      <v-navigation-drawer permanent>
        <v-system-bar></v-system-bar>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="user.profilePic"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ user.firstName }} {{ user.lastName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group color="primary">
            <v-list-item-icon>
              <v-icon>mdi-arrow</v-icon>
            </v-list-item-icon>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Phone-Number:</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.phoneNumber }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Gender:</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.gender }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>D.O.B:</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.dob }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Marital Status:</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.maritalStatus }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Country:</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.country }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>State:</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.state }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Address</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ user.address }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </main>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$store.dispatch("setUser, null");
      this.$router.push("/");
    },
  },
};
</script>
