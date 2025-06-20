<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-icon-btn :icon="avatar"></v-icon-btn>
        </template>

        <v-app-bar-title>{{ username }}</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
const initData = localStorage.getItem("initData") || "{}";
const parsedInitData: any = JSON.parse(initData);
const avatar = ref("");
const username = ref("");

onMounted(() => {
    avatar.value = parsedInitData.user.photo_url;
    username.value = parsedInitData.user.username;
})


</script>
