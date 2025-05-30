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
import { retrieveRawInitData } from '@telegram-apps/sdk'
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from "vue";
import { mockTelegramEnv } from '@telegram-apps/bridge'

const form = ref(false);
// const email = ref(null);
const password = ref(null);
const passwordConfirmation = ref(null);
const loading = ref(false);
var username: string | undefined = ""
var initDataRaw: string | undefined = ""

function onSubmit() {
    // if (!form.value) return;
    if (password.value != passwordConfirmation.value) return;
    else loading.value = true;
    axios.post("https://picovpn.ru:8080/api/users", {
        Username: username,
        Password: password,
    }, {
        headers: {
            Authorization: `tma ${initDataRaw}`,
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response.statusText)
    })
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

// const props = defineProps(['respData'])

onBeforeMount(() => {
    mockTelegramEnv();
});

onMounted(() => {
    initDataRaw = retrieveRawInitData()
    axios.post("https://picovpn.ru:8080/api/auth", null, {
        headers: {
            Authorization: `tma ${initDataRaw}`
        }
    }).then((response) => {
        username = response.data.User.Username
        console.log(initDataRaw)
    })


    // fetch('https://picovpn.ru/api/auth', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `tma ${ initDataRaw }`
    //     },
    // });
})

</script>
