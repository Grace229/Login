<template>
  <main
    style="min-height:100vh"
    class="primary fill-height white--text d-flex flex-column justify-center pa-4"
  >
    <div>
      <header>
        <v-img
          src="/assets/images/houses.svg"
          alt="houses"
          contain
          max-width="120px"
          class="mx-auto"
        />
        <div class="headline text-center py-2">
          TenantApp
        </div>
      </header>

      <section>
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
            <router-link to="/forgot-password" class="white--text"
              >Forgot Password</router-link
            >
          </div>

          <div class="pt-4">
            <v-btn block class="primary--text" to="/landlord">Login</v-btn>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>
