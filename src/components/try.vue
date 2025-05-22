<template>
  <v-container>
    <div>
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />
      <div class="mb-8 text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
        <h1 class="text-h2 font-weight-bold">PicoVPN</h1>
      </div>
    </div>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
          clearable></v-text-field>

        <v-text-field type="password" v-model="password" :readonly="loading" :rules="[required]" label="Password"
          placeholder="Enter your password" clearable></v-text-field>

        <v-text-field type="password" v-model="passwordConfirmation" :readonly="loading"
          :rules="[required, passwordConfirmed]" label="Confirm Password" placeholder="Confirm your password"
          clearable></v-text-field>

        <br />

        <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit" variant="elevated" block>
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref(false);
const email = ref(null);
const password = ref(null);
const passwordConfirmation = ref(null);
const loading = ref(false);

function onSubmit() {
  if (!form.value) return;
  else if (password.value != passwordConfirmation.value) return;
  else loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
}
function required(v: any) {
  return !!v || "Field is required";
}
function passwordConfirmed(v: any) {
  return (
    (!!v && password.value == passwordConfirmation.value) ||
    "Password don't match"
  );
}
</script>
