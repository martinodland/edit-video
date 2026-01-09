<template>
    <header>
        <div class="flex flex-row">
            <div class="w-[20%]">
                <p class="text-white font-bold">Video Edit</p>
            </div>
            <div class="flex flex-row space-x-4 ml-auto">
                <LoginButton />
                <SignUpButton />
            </div>
        </div>
    </header>
</template>

<script setup>
    import LoginButton from '../Buttons/LoginButton.vue'
    import SignUpButton from '../Buttons/SignUpButton.vue'
</script>