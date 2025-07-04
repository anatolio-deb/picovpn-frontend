<template>
    <!-- <AppBar disabled></AppBar> -->
    <v-main>
        <v-container>
            <v-row>
                <v-img height="150" src="@/assets/cisco.png" />
            </v-row>
            <v-row justify="center">
                <Header text1="Powered by" text2="OpenConnect">
                </Header>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto px-6 py-8" max-width="344">
                        <v-form v-model="form" @submit.prevent="onSubmit">
                            <v-text-field type="password" v-model="password" :readonly="loading" :rules="[required]"
                                label="Password" placeholder="Enter your password" clearable></v-text-field>

                            <v-text-field type="password" v-model="passwordConfirmation" :readonly="loading"
                                :rules="[required, passwordConfirmed]" label="Confirm Password"
                                placeholder="Confirm your password" clearable></v-text-field>

                            <br />

                            <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit"
                                variant="elevated" block>
                                Sign In
                            </v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>

</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/app";
import router from "@/router";

const form = ref(false);
const password = ref("");
const passwordConfirmation = ref("");
const loading = ref(false);
const user = useUserStore();


function onSubmit(event: Event) {
    loading.value = true
    try {
        user.registerUser(password.value, passwordConfirmation.value)
        router.push("/account")
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}
function required(v: any) {
    return !!v || "Field is required";
}
function passwordConfirmed(v: any) {
    return (
        (!!v && password.value == passwordConfirmation.value) ||
        "Password don't match"
    );
}

</script>