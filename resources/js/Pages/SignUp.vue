<template>
    <div class="min-h-screen bg-black">
        <MainLayout>
            <div class="flex items-center h-full">
                <div class="animated-background">
                    <FormDiv>
                        <p class="text-white font-bold text-4xl text-center">Signup</p>
                        <TextInput type="text" placeholder="Username" />
                        <TextInput type="email" placeholder="Email" />
                        <TextInput type="password" placeholder="Password" />
                        <TextInput type="password" placeholder="Confirm Password" />
                        <FormButton />
                    </FormDiv>
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup>
    import MainLayout from "../Components/Layout/MainLayout.vue";
    import FormDiv from "../Components/Form/Form.vue";
    import TextInput from "../Components/Form/TextInput.vue";
    import FormButton from "../Components/Form/FormButton.vue";
</script>
