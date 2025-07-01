<template>
    <appBar :photoUrl="user.photo_url" :initials="user.initials" :username="user.username" :fullName="user.fullName">
    </appBar>
    <v-main>
    </v-main>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app';
const user = useAppStore()

</script>
