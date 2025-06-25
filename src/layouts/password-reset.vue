<template>
    <appBar></appBar>
    <v-main>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="">
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
    </v-main>
</template>

<script setup lang="ts">
import apiService from "@/api/axios"
import router from "@/router";
import { ref } from "vue";
// import apiService from "@/api/axios"
// import router from "@/router";

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



function submit(event: Event) {
    loading.value = true
    apiService.passwordReset({
        password: password.value,
        password_confirmation: passwordConfirmation.value
    })
        .then((response) => {
            if (response.status === 200) {
                router.push("/home");
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