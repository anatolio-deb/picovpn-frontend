<template>
    <Label asset="@/assets/openconnect.png" text1="Powered by" text2="OpenConnect">
    </Label>
    <p>{{ respData }}</p>
</template>

<script setup lang="ts">
import { retrieveRawInitData } from '@telegram-apps/sdk'
import { onMounted } from 'vue'
import axios from 'axios'
const props = defineProps(['respData'])

onMounted(() => {
    const initDataRaw = retrieveRawInitData()
    var respData: any
    axios.post("http://api:3000/auth", null, {
        headers: {
            Authorization: `tma ${initDataRaw}`
        }
    }).then((response) => {
        respData = response.data
    })

    // fetch('https://picovpn.ru/api/auth', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `tma ${ initDataRaw }`
    //     },
    // });
})

</script>
