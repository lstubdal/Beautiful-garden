<template>
    <div class="toDoList">
        <h2 class="toDoList__title">To do list</h2>
        <section class="toDoList__addTaskSection">
            <input type="text" placeholder="Add task here" id="taskInput">
            <button @click="addTask">Add Task</button>
        </section>
        

    </div>
</template>

<script>

    export default {
        data() {
            return {
                tasks: [],
                addedTask: '' //remove?
            }
        },

        methods: {
            addTask() {

            },
            updateTaskView() {

            },
            taskChecked() {

            },
            removeTask(){

            }

        }
    }
    
</script>

<style>
    @import '../style/reset.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>