<template>
  <v-container>
    <v-img class="mb-4" height="150" src="@/assets/logo.png" />
    <Header text1="Welcome to" text2="PicoVPN"></Header>
    <v-row justify="center">
      <v-btn class="mx-2" rounded="xl" size="large" color="indigo-lighten-4" variant="tonal" @click="toTry">
        Try
      </v-btn>
      <v-btn class="mx-2" rounded=" xl" size="large" color="cyan-lighten-4" variant="tonal" @click="toBuy">
        Buy
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { retrieveRawInitData } from "@telegram-apps/sdk";
import { onMounted } from "vue";
import apiService from "@/api/axios";
import { useAppStore } from '@/stores/app'

const user = useAppStore()

const router = useRouter();

function toTry() {
  router.push("/try");
}
function toBuy() {
  router.push("/buy");
}

onMounted(() => {
  try {
    const initData = retrieveRawInitData() || "";
    apiService.setInitData(initData);
  } catch (error) {
    console.error("Failed to retrieve launch parameters:", error);
    return;
  }

  apiService.telegramAuth()
    .then((response) => {
      if (response.status === 200) {
        user.$patch({
          id: response.data.user.id,
          username: response.data.user.username,
          photo_url: response.data.user.photo_url,
          is_bot: response.data.user.is_bot,
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          language_code: response.data.user.language_code,
          is_premium: response.data.user.is_premium,
        });
        apiService.getUser(response.data.user.id)
          .then((response) => {
            if (response.status === 200) {
              router.push("/account");
            } else {
              console.log(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log(response.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>