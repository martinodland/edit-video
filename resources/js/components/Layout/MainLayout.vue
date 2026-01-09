<template>
    <div class="flex flex-col">
        <Header />
        <main>
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
