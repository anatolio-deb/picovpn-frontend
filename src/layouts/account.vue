<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-img v-if="avatar" :src="avatar" width="40" height="40" class="mr-2 rounded-full"
                style="object-fit: cover; object-position: center;" />
        </template>

        <v-app-bar-title>{{ username }}</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'

const user = useAppStore()
const avatar = ref("");
const username = ref("");

onMounted(() => {
    avatar.value = user.photo_url || "";
    username.value = user.username || user.first_name || "User";
})


</script>
