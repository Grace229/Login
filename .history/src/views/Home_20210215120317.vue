<template>
  <main
    style="min-height:100vh"
    class="fill-height white--text d-flex flex-column justify-center pa-4"
  >
    <div
      class="col-md-8 mt-5 primary mx-auto min-height:100vh"
      style="width: 50%"
    >
      <header>
        <div class="headline text-center py-2">
          Login
        </div>
      </header>

      <section class="mx-auto">
        <div>
          <v-text-field
            dark
            label="E-mail Address"
            v-model="FORM.email"
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
              >{{ showPassword ? "hide" : "show" }}</v-btn
            >
          </v-text-field>

          <div class="text-right py-2">
            <router-link to="/#" class="white--text"
              >Forgot Password</router-link
            >
          </div>

          <div class="pt-4">
            <v-btn block class="primary--text">Login</v-btn>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router";
import EventBus from "../components/EventBus";
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
          router.push({ name: "Profile" });
        })
        .catch((err) => {
          console.log(err);
        });
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },
  },
};
</script>
