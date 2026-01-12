<template>
    <BaseButton 
            v-if="!isSignUpPage"
            colorClass="text-white hover:bg-blue-700 transition duration-300" 
            href="/signup"
        > 
        Sign Up 
    </BaseButton>
</template>
<script setup> 
    import BaseButton from './BaseButton.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    
    const isSignUpPage = route.path === '/signup'    
 </script>