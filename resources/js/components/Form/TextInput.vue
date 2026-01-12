<template>
    <input :name="name" :placeholder="placeholder" :id="id" :type="type" class="bg-white w-full h-10 rounded text-l p-2 focus:outline-none">
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    }
});
</script>
