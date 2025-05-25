<template>
  <v-container>
    <v-img class="mb-4" height="150" src="@/assets/logo.png" />
    <Header text1="Welcome to" text2="PicoVPN"></Header>
    <v-row>
      <v-col></v-col>
      <v-col cols="1" md="1" xs="1">
        <v-btn rounded="xl" size="large" color="indigo-lighten-4" variant="tonal" @click="toTry">
          Try
        </v-btn>
      </v-col>
      <v-col cols="1" md="6" xs="6">
        <v-btn rounded="xl" size="large" color="cyan-lighten-4" variant="tonal" @click="toBuy">
          Buy
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
// import Header from "@/components/header.vue";

const route = useRoute();
const router = useRouter();

function toTry() {
  router.push("/try");
}
function toBuy() {
  router.push("/buy");
}
</script>
