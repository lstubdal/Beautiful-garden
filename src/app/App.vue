<template>
    <div class="dashboard">
        <h1 class="dashboard__title">Our component dashboard</h1>
        <div class="dashboard__components">
            <div class="dashboard__component dashboard__toDoList"><ToDoList/></div>
            <div class="dashboard__component">slideshow</div>
            <div class="dashboard__component">kontaktskjema</div>
            <div class="dashboard__component">sorterbar tabell</div>
            <div class="dashboard__component">quiz-app</div>
        </div>
    </div>
</template>

<script>
    import ToDoList from '../components/ToDo.vue';

    export default {
        components: {
            ToDoList
        }

    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>