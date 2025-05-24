<template>
    <v-container>
        <v-img class="mb-4" height="150" src="@/assets/openconnect.png" />
        <header text1="Powered by" text2="OpenConnect">
        </header>
    </v-container>
    <!-- <p>{{ respData }}</p> -->
</template>

<script setup lang="ts">
import { retrieveRawInitData } from '@telegram-apps/sdk'
import { onMounted } from 'vue'
import axios from 'axios'
import header from "@/components/header.vue"

// const props = defineProps(['respData'])

onMounted(() => {
    const initDataRaw = retrieveRawInitData()
    var respData: any
    axios.post("http://api:3000/auth", null, {
        headers: {
            Authorization: `tma ${initDataRaw}`
        }
    }).then((response) => {
        console.log(response.data)
    })

    // fetch('https://picovpn.ru/api/auth', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `tma ${ initDataRaw }`
    //     },
    // });
})

</script>
