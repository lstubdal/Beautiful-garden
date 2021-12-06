<template>
    <div class="view__container">
        <QuizApp />
    </div>
</template>

<script>
    import QuizApp from '../components/QuizApp.vue';
    
    export default {
        components: {
            QuizApp
        }
    }
</script>

<style>
    @import '../style/viewContainer.css';
</style>