<template>
    <button :class="['px-4 py-2 rounded', colorClass]">
        <slot />
    </button>
</template>
<script>
export default {
    props: { colorClass: { type: String, default: "bg-gray-400 text-white" } },
};
</script>