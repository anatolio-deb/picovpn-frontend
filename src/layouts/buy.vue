<template>
    <v-app-bar :elevation="2" color="black">
        <v-btn icon="mdi-arrow-left" href="/account">
        </v-btn>
    </v-app-bar>
    <v-main>
        <v-row>
            <v-col v-for="(plan, i) in plans" :key="i" cols="12" md="4">
                <v-card :plan="plan" class="mx-auto" :subtitle="plan.price + ' ' + 'TON 💎'"
                    :title="plan.months + ' ' + 'Month' + postfix(plan)">
                    <template v-slot:actions>
                        <v-btn text="Buy" @click="buy($event, plan)"></v-btn>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-main>

</template>

<script setup lang="ts">
import {
    useTonWallet,
    useTonAddress,
    useTonConnectUI
} from "@townsquarelabs/ui-vue";
import { loadMessage, Cell } from '@ton/core';
import router from "@/router";


const { tonConnectUI, setOptions } = useTonConnectUI();

interface Plan {
    months: number;
    price: number;
}

const pricePerMonth = 1;

const plans: Plan[] = [
    { "months": 1, "price": pricePerMonth },
    { "months": 6, "price": pricePerMonth * 6 },
    { "months": 12, "price": pricePerMonth * 12 }
];


function buy(event: Event, plan: Plan) {
    const comment = Math.random().toString(36).substring(2, 8) + "picovpn";
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
        messages: [
            {
                address: 'UQCfkeI1uFsuDgW5j7WNwbtQwSqCe4C1_FCJNbfbo8ifF3xF',
                amount: plan.price,
                // stateInit: wallet.value?.account.walletStateInit
                body: comment,
            }
        ]
    };
    try {
        const result = tonConnectUI.sendTransaction(transaction);
        const slice = Cell.fromBase64(result.boc).beginParse();
        const message = loadMessage(slice);
        if (message.body.toString() == comment) {
            router.push("/account")
        }

        // you can use signed boc to find the transaction 
        // const someTxData = myAppExplorerService.getTransaction(result.boc);
        // alert('Transaction was sent successfully', someTxData);
    } catch (e) {
        console.error(e);
    }
}

function postfix(plan: Plan): string {
    if (plan.months > 1) {
        return 's'
    }
    return ''
}

</script>