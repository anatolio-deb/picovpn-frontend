<template>
    <div>
        <div class="mb-8 text-center">
            <div class="text-body-2 font-weight-light mb-n1">{{ text1 }}</div>
            <h1 class="text-h2 font-weight-bold">{{ text2 }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    text1?: string
    text2?: string
}>()
</script>