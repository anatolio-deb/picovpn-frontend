<template>
    <v-layout>
        <v-app-bar :elevation="2" color="black">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-avatar size="large">
                            <v-img :src="user.photo_url" :alt="user.initials" />
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-text>
                        <div class="mx-auto text-center">
                            <v-avatar>
                                <span class="text-h5">{{ user.initials }}</span>
                            </v-avatar>
                            <h3>{{ user.fullName }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.username }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn variant="text" rounded href="/password-reset">
                                Change Password
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn variant="text" rounded>
                                Disconnect
                            </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-menu>
            <!-- <v-app-bar-title>PicoVPN</v-app-bar-title> -->
        </v-app-bar>
    </v-layout>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'

const user = useAppStore()
// const avatar = ref("");
// const username = ref("");
// const firstName = ref("");
// const lastName = ref("");

// onMounted(() => {
//     avatar.value = user.photo_url || "";
//     username.value = user.username || user.first_name || "User";
//     firstName.value = user.first_name || "";
//     lastName.value = user.last_name || "";
// })

</script>