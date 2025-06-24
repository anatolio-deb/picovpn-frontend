<template>
    <v-container>
        <v-img class="mb-4" height="150" src="@/assets/cisco.png" />
        <Header text1="Powered by" text2="OpenConnect">
        </Header>
        <Password @onSubmit="onSubmit" />
    </v-container>
</template>

<script setup lang="ts">
import apiService from "@/api/axios"
import Password from "@/components/password.vue";
import router from "@/router";


function onSubmit(event: Event) {
    Password.loading.value = true
    apiService.passwordReset({
        password: Password.password.value,
        password_confirmation: Password.passwordConfirmation.value
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
            Password.loading.value = false
        })
}
</script>