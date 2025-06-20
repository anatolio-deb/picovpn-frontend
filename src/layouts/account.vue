<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon>
            </v-app-bar-nav-icon>
        </template>

        <v-app-bar-title></v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
const initData = localStorage.getItem("initData") || "{}";
const parsedInitData: any = JSON.parse(initData);
const avatar = ref("");
const username = ref("");

onMounted(() => {
    // avatar.value = initData.user.photo_url;
    // username.value = initData.user.username;
    console.log(parsedInitData.user.photo_url)
    console.log(parsedInitData.user.username)

})


</script>
