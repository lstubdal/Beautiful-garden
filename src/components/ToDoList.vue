<template>
    <div class="toDoList">
        <h2 class="toDoList__title">To do list</h2>

        <section class="toDoList__addTaskSection" >
            <input v-model="newTask" type="text" placeholder="Add task here" class="toDoList__input" @keyup.enter="addTask"> <!--@keyup.enter => addTask when enter is pused-->
                <div v-for="task in tasks" :key="task.id" class="toDoList__taskContainer">
                    <div class="toDoList__task"> {{ task.text }} </div>
                    <div class="toDoList__remove">&times;</div> 
                </div>
            <!--button @click="addTask" class="toDoList__button">Add Task</button-->
            

                <!--button @click="removeTask" class="toDoList__remove">remove</button-->
           
        </section>

        <!--section class="toDoList__addTaskSection" >
            <input v-model="newTask" type="text" placeholder="Add task here" id="taskInput" class="toDoList__input">
            <button @click="addTask" class="toDoList__button">Add Task</button>
            <div class="toDoList__task" v-for="task in tasks"> {{ task.text }}

                <button @click="removeTask" class="toDoList__remove">remove</button>
            </div>
        </section-->
        

    </div>
</template>

<script>

    export default {
        data() {
            return {
                id: 1,
                newTask: '',
                tasks: [],
            }
        },

        methods: {
            addTask() {

                if (this.newTask === '') {                       // alert user if they try to add without writing
                    alert('Ups, you need to write a task!')
                } else {
                    this.tasks.push({text: this.newTask, done: false, id: this.id});               // add task   
                }
                this.id++;
                this.newTask = '';
            
            },
            taskChecked() {

            },
            removeTask(){
                console.log('remove button clicked');
        
                const tasksOnScreen = document.querySelectorAll('.toDoList__remove');
                [...tasksOnScreen].forEach(task => {
                    console.log( )
                })
                /*[...tasksOnScreen].forEach(taskOnScreen => {
                    this.tasks.forEach(taskInList => {
                        if (taskOnScreen.innerText === taskInList) {
                            console.log('task to remove: ' + taskInList);
                            console.log(this.tasks.length)
                            this.tasks.pop(taskInList);
                            console.log('task removed')
                        
                            
                        }
                    })
                }) */
                
            }

        }
    }
    
</script>

<style>
    @import '../style/reset.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>