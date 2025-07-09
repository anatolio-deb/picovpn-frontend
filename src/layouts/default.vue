<template>
  <v-main>
    <home></home>
    <router-view />
  </v-main>

</template>

<script lang="ts" setup>
import home from "@/layouts/home.vue";
import { retrieveRawInitData } from "@telegram-apps/sdk";
import { useUserStore } from '@/stores/app';

const user = useUserStore()
const initData = retrieveRawInitData() || "";

onMounted(() => {
  user.telegramAuth(initData).then((response) => {
    if (response.status === 200) {
      user.$patch({ userData: response.data.user })
    } else {
      console.log(response.data.message);
    }
  }).catch((error) => {
    console.error(error);
  });
})
</script>
