<template>
    <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field type="password" v-model="password" :readonly="loading" :rules="[required]" label="Password"
                placeholder="Enter your password" clearable></v-text-field>

            <v-text-field type="password" v-model="passwordConfirmation" :readonly="loading"
                :rules="[required, passwordConfirmed]" label="Confirm Password" placeholder="Confirm your password"
                clearable></v-text-field>

            <br />

            <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit" variant="elevated"
                block>
                Sign In
            </v-btn>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import apiService from "@/api/axios"
// import router from "@/router";

const form = ref(false);
const password = ref(null);
const passwordConfirmation = ref(null);
const loading = ref(false);

defineProps<{
    onSubmit?: ((e: Event) => any) | undefined;
}>()

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