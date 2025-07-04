<template>
    <v-layout>
        <v-app-bar :elevation="2" color="black">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-avatar size="large">
                            <v-img :src="user.userData.photo_url" :alt="user.initials" />
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
                                {{ user.userData.username }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn variant="text" rounded href="/password-reset">
                                Change Password
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn variant="text" rounded>
                                Support
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
import { retrieveRawInitData } from "@telegram-apps/sdk";
import { onBeforeMount } from "vue";
import apiService from "@/api/axios";
import { useUserStore } from '@/stores/app';
// import { useRouter } from "vue-router";

const user = useUserStore()
// const router = useRouter();

onBeforeMount(() => {
    try {
        const initData = retrieveRawInitData() || "";
        apiService.setInitData(initData);
    } catch (error) {
        console.error("Failed to retrieve launch parameters:", error);
        return;
    }

    apiService.telegramAuth()
        .then((response) => {
            if (response.status === 200) {
                user.$patch(response.data.user);
            } else {
                console.log(response.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
})
</script>