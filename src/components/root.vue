<template>
  <v-container>
    <div>
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />
      <div class="mb-8 text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
        <h1 class="text-h2 font-weight-bold">PicoVPN</h1>
      </div>
    </div>
    <v-row>
      <v-col cols="5"></v-col>
      <v-col cols="1">
        <v-btn
          rounded="xl"
          size="large"
          color="indigo-lighten-4"
          variant="tonal"
          @click="clickAlert"
        >
          Try
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn rounded="xl" size="large" color="cyan-lighten-4" variant="tonal">
          Buy
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

function clickAlert() {
  router.push("/try");
}
</script>
