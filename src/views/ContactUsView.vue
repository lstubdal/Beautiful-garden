<template>
    <div class="contactUs__container">
        <ContactUs />
    </div>
    
</template>

<script>

    import ContactUs from '../components/ContactUs.vue';

    export default {
        components: {
            ContactUs
        }
    }
</script>

<style>
    .contactUs__container {
        height: 100vh;
        width: 100vw;
    }

</style>