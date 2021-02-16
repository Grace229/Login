<template>
  <div class="about">
    <v-card class="mx-auto" width="256" tile>
      <v-navigation-drawer permanent>
        <v-system-bar></v-system-bar>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                John Leider
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
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
