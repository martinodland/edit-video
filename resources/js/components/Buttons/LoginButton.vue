<template>
    <BaseButton
        v-if="!isLogInPage"
        colorClass="text-white hover:bg-blue-700 transition duration-300"
        href="/login"
    >
        Login
    </BaseButton>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLogInPage = route.path === "/login";
</script>
