<template>
    <v-container>
        <v-img class="mb-4" height="150" src="@/assets/cisco.png" />
        <Header text1="Powered by" text2="OpenConnect">
        </Header>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <!-- <v-text-field v-model="username" :readonly="loading" :rules="[required]" class="mb-2" label="Username"
                    clearable></v-text-field> -->

                <v-text-field type="password" v-model="password" :readonly="loading" :rules="[required]"
                    label="Password" placeholder="Enter your password" clearable></v-text-field>

                <v-text-field type="password" v-model="passwordConfirmation" :readonly="loading"
                    :rules="[required, passwordConfirmed]" label="Confirm Password" placeholder="Confirm your password"
                    clearable></v-text-field>

                <br />

                <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit"
                    variant="elevated" block>
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
    <!-- <p>{{ respData }}</p> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import apiService from "@/api/axios"
import router from "@/router";

const form = ref(false);
const password = ref(null);
const passwordConfirmation = ref(null);
const loading = ref(false);

function required(v: any) {
    return !!v || "Field is required";
}
function passwordConfirmed(v: any) {
    return (
        (!!v && password.value == passwordConfirmation.value) ||
        "Password don't match"
    );
}

function onSubmit(event: Event) {
    loading.value = true
    apiService.postUser({
        password: password.value,
        password_confirmation: passwordConfirmation.value
    })
        .then((response) => {
            if (response.status === 200) {
                router.push("/account");
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            loading.value = false
        })
}
</script>