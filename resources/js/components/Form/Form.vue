<template>
    <form class="flex flex-col gap-4 bg-black sm:sm:w-[40dvh] w-[25dvh] h-fit p-4" :method="method" :name="name" :id="id">
        <slot />
    </form>
</template>
<script setup>
defineProps({
    method: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    id: {
        type: String,
        default: ""
    },
})
</script>