<template>
  <v-main>
    <v-container>
      <v-row>
        <v-img height="200" src="@/assets/logo.png" />
      </v-row>
      <v-row justify="center">
        <Header text1="Welcome to" text2="PicoVPN"></Header>
      </v-row>
      <v-row justify="center" class="my-12">
        <v-btn class="mx-1" rounded="xl" size="large" color="indigo-lighten-4" variant="tonal" @click="toTry">
          Try
        </v-btn>
        <v-btn class="mx-1" rounded=" xl" size="large" color="cyan-lighten-4" variant="tonal" @click="toBuy">
          Buy
        </v-btn>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/app';
import { retrieveRawInitData } from "@telegram-apps/sdk";


const router = useRouter();
const user = useUserStore()

function toTry() {
  router.push("/try");
}
function toBuy() {
  router.push("/buy");
}

onMounted(() => {
  const initData = retrieveRawInitData() || "";
  user.telegramAuth(initData).then((response) => {
    if (response.status === 200) {
      user.$patch({ userData: response.data.user })
      user.fetchUser().then((response) => {
        if (response.status === 200) {
          router.push("/account");
        } else {
          console.log(response.data.message)
        }
      }).catch((error) => {
        console.error(error);
      });
    } else {
      console.log(response.data.message);
    }
  }).catch((error) => {
    console.error(error);
  });
})
</script>