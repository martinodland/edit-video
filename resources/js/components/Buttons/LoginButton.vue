<template>
    <BaseButton 
            colorClass="bg-blue-500 hover:bg-blue-700 transition duration-300" 
            @click="login"
        > 
        Login 
    </BaseButton>
</template>
<script setup> 
    import BaseButton from './BaseButton.vue' 
    function login(){
        console.log("Tester");
    } 
 </script>