<template>
    <div class="view__container">
        <ToDo />
    </div>
</template>

<script>
    import ToDo from '../components/ToDo.vue';

    export default {
        components: {
            ToDo
        },
    }
</script>

<style>
    @import '../style/viewContainer.css';
</style>