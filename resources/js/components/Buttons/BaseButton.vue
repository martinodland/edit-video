<template>
    <a :href="link" :class="['px-4 py-2 rounded bg-[#0018F9] font-bold', colorClass]">
        <slot />
    </a>
</template>

<script setup>
    defineProps({
        colorClass: {
            type: String,
            default: "bg-gray-400 text-white"
        },
        link: { 
            type: String, 
            default: ""
        },
    });
</script>