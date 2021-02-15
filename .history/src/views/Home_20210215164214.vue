<template>
  <main
    style="min-height:100vh"
    class="secondary fill-height white--text d-flex flex-column justify-center pa-4"
  >
    <v-container>
      <v-card class="mx-auto" max-width="600" height="400">
        <header>
          <div class="headline text-center">
            Login
          </div>
        </header>
        <form v-on:submit.prevent="login()">
          <div>
            <v-text-field
              dark
              label="E-mail Address"
              v-model="email"
              :rules="[rules.required, rules.email]"
            />
          </div>
          <div>
            <v-text-field
              dark
              v-model="password"
              :rules="[rules.required]"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
            >
              <v-btn
                text
                small
                slot="append"
                @click="showPassword = !showPassword"
                class="transparent text-capitalize"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              ></v-btn>
            </v-text-field>
            <div class="pt-4">
              <v-btn block class="primary--text" type="submit">Login</v-btn>
            </div>
          </div>
        </form>
      </v-card>
    </v-container>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      email: "",
      password: "",
      FORM: {},
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    login() {
      axios
        .post("https://login-api-grace.herokuapp.com/api/v1/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          router.push({ name: "Profile" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
