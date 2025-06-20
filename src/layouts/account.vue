<template>
    <v-app-bar :elevation="2">
        <v-card :append-avatar="avatar" class="mx-auto"
            prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" :subtitle="username" title="Avatars">
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        </v-card>

        <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
const initData: any = localStorage.getItem("initData");
const avatar = ref("");
const username = ref("");

onMounted(() => {
    avatar.value = initData.user.photo_url;
    username.value = initData.user.username;
})


</script>
