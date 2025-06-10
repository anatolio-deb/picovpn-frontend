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
import { retrieveRawInitData } from '@telegram-apps/sdk';
import { onMounted } from 'vue'
import axios from 'axios'


const router = useRouter();
var initData: string | undefined = ""


function toTry() {
  router.push("/try");
}
function toBuy() {
  router.push("/buy");
}

onMounted(() => {
  try {
    initData = retrieveRawInitData()
    axios.post("https://picovpn.ru:8080/api/auth", null,
      {
        headers: { Authorization: `X-Telegram-Data ${initData}` }
      }
    ).then((response) => {
      if (response.status == 200) {
        localStorage.setItem("initData", JSON.stringify(response.data))
        try {
          axios.post(`https://picovpn.ru:8080/api/users/${response.data.user.id}`, null,
            {
              headers: {
                Authorization: `X-Telegram-Data ${initData}`,
                "Access-Control-Allow-Origin": "https://picovpn.ru:8080/api/*"
              }
            }
          ).then((response) => {
            if (response.status == 200) {
              router.push("/account")
            } else {
              console.log(response.data.message)
            }
          })
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log(response.data.message)
      }
    })
  } catch (error) {
    console.log(error)
  }
})
</script>
