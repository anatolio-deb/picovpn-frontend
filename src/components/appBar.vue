<template>
    <v-layout>
        <v-app-bar :elevation="2" color="black">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-avatar size="large">
                            <v-img :src="photoUrl" :alt="initials" />
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
</template>

<script lang="ts" setup>

const props = defineProps<{
    photoUrl?: string
    initials?: string
    fullName?: string
    username?: string
}>()

</script>