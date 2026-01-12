<template>
    <header>
        <div class="flex flex-row min-h-10">
            <div class="w-[20%]">
                <BaseButton
                    colorClass="text-white font-bold bg-black"
                    href="/"
                    >
                    Video Edit
                </BaseButton>
            </div>
            <div class="flex flex-row space-x-4 ml-auto">
                <LoginButton />
                <SignUpButton />
            </div>
        </div>
    </header>
</template>

<script setup>
    import BaseButton from '../Buttons/BaseButton.vue'
    import LoginButton from '../Buttons/LoginButton.vue'
    import SignUpButton from '../Buttons/SignUpButton.vue'
</script>