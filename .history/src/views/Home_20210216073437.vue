<template>
  <main
    style="min-height:100vh"
    class="fill-height primary white--text d-flex flex-column justify-center pa-4"
  >
    <v-container>
      <v-card class="mx-auto" max-width="600" height="300">
        <header>
          <div class="headline text-center pt-6 primary--text">
            Login
          </div>
        </header>
        <div class="pt-5 mx-auto" style="max-width: 400px;">
          <form v-on:submit.prevent="login()">
            <div>
              <v-text-field
                label="E-mail Address"
                v-model="email"
                :rules="[rules.required, rules.email]"
              />
            </div>
            <div>
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                text
                small
                @click:append="showPassword = !showPassword"
                class="transparent text-capitalize"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              >
              </v-text-field>
              <div class="pt-6">
                <v-btn block class="primary white--text" type="submit"
                  >Login</v-btn
                >
              </div>
            </div>
          </form>
        </div>
      </v-card>
    </v-container>
  </main>
</template>

<script>
import axios from "axios";
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
        .post("/users/Login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("usertoken", res.data);
          this.email = "";
          this.password = "";
          // router.push({ name: "Profile" });
        })
        .catch((err) => {
          console.log(err);
        });
      // async login() {
      //   const response = await axios.post(
      //     "",
      //     {
      //       email: this.email,
      //       password: this.password,
      //     }
      //   );
      //   localStorage.setItem("token", response.data.token);
      //   this.$store.dispatch("setUser", response.data.user);
      //   this.$router.push("/profile");
      //   console.log("hello" + response.data.user);
      // },
    },
  },
};
</script>
