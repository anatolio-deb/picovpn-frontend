<template>
    <appBar>
    </appBar>
    <v-main>
        <v-container>
            <v-row my-5>
                <v-card class="mx-auto">
                    <v-card-text>
                        <div>VPN Username</div>

                        <p class="text-h4 font-weight-black">{{ plan.user.telegramUsername }}</p>

                        <p>{{ plan.daysLeft }} days left</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple-accent-4" text="Upgrade" variant="text"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-row my-5>
                <v-card class="mx-auto" href="https://apps.apple.com/us/app/cisco-secure-client/id1135064690"
                    prepend-icon="mdi-apple" rel="noopener" subtitle="Available for download" target="_blank"
                    title="App Store">
                </v-card>
            </v-row>
            <v-row my-5>
                <v-card class="mx-auto"
                    href="https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf&hl=en"
                    prepend-icon="mdi-google-play" rel="noopener" subtitle="Available for download" target="_blank"
                    title="Google Play">
                </v-card>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup lang="ts">
import { usePlanStore } from '@/stores/app';
import apiService from "@/api/axios";

const plan = usePlanStore()

onMounted(() => {
    apiService.getPlan()
        .then((response) => {
            if (response.status === 200) {
                plan.$patch(response.data)
            } else {
                console.log(response.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
})
</script>
