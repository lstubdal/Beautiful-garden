<template>
    <div class="toDo__container">
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
    .toDo__container {
        height: 100vh;
    }
</style>