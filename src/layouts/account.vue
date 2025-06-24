<template>
    <v-layout class="fill-height" align-center justify-center>
        <v-app-bar :elevation="2" color="#0B1D51">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-avatar size="large">
                            <v-img :src="avatar" :alt="initials" />
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-text>
                        <div class="mx-auto text-center">
                            <v-avatar>
                                <span class="text-h5">{{ initials }}</span>
                            </v-avatar>
                            <h3>{{ fullName }}</h3>
                            <p class="text-caption mt-1">
                                {{ username }}
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
    <v-main>
    </v-main>

</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'


const user = useAppStore()
const avatar = ref("");
const username = ref("");
const firstName = ref("");
const lastName = ref("");

onMounted(() => {
    avatar.value = user.photo_url || "";
    username.value = user.username || user.first_name || "User";
    firstName.value = user.first_name || "";
    lastName.value = user.last_name || "";
})

const initials = computed(() => {
    return (firstName.value.charAt(0) + lastName.value.charAt(0)).toUpperCase();
});

const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`.trim();
});

const reveal = ref(false)



</script>
