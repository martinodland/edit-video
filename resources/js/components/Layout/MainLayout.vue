<template>
    <div class="flex flex-col h-screen p-4">
        <Header />
        <main class="flex-1 overflow-y-auto">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

defineProps({
    showFooter: { type: Boolean, default: true},
    showHeader: { type: Boolean, default: true}
})
</script>
