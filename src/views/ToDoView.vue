<template>
    <div class="toDo__container"><ToDo /></div>
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
        margin: 0 auto;
        margin-top: 3vh;
        margin-bottom: 3vh;
        height: 70vh;
        width: 45vw;
    }
</style>