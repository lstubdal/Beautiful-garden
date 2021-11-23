<template>
    <div class="toDoList">
        <h2 class="toDoList__title">To do list</h2>

        <section class="toDoList__addTaskSection" >
            <input v-model="newTask" type="text" placeholder="Add task here" class="toDoList__input" @keyup.enter="addTask"> <!--@keyup.enter => addTask when enter is pused-->
                <button @click="addTask" class="toDoList__button">Add Task</button>
                <div v-for="task, index in tasks" class="toDoList__taskContainer">
                    <div class="toDoList__task"> {{ task.text }} </div>
                    <div class="toDoList__remove">remove</div> 
                </div>
            <!--button @click="addTask" class="toDoList__button">Add Task</button-->
            

                <!--button @click="removeTask(index)" class="toDoList__remove">remove</button-->
           
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
                
                newTask: '',
                tasks: [],
            }
        },

        methods: {
            addTask() {

                if (this.newTask === '') {                       // alert user if they try to add without writing
                    alert('Ups, you need to write a task!')
                } else {
                    this.tasks.push({text: this.newTask, done: false });   
                    this.newTask = '';            // add task   
                }
               
            
            },
            taskChecked() {

            },
            removeTask(){
                console.log('remove button clicked');
        
                const tasksOnScreen = document.querySelectorAll('.toDoList__remove');
                [...tasksOnScreen].forEach(task => {
                    console.log( ) /* ikke bruk */
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

    .toDoList {
        overflow: scroll;
        height: 100%;
        background-color: rgb(191, 202, 188);
    }
    .toDoList__title {
        font-size: 1.5em;
        text-align: center;
        padding: 20px;
    }
    .toDoList__taskContainer {
        display: flex;
        text-decoration: none;
    }
    .toDoList__input {
        height: 35px;
        width: 210px;
        border-radius: 2px;
    }
    .toDoList__button {
        display: flex;
        justify-self: center;
        background: none;
        padding: 4px 10px 4px 10px;
        font-size: 1em;
        margin-left: 25%;
        margin-top: 5%;
        border-radius: 2px;
        color: white;
        background-color: rgb(33, 49, 46);
        margin-bottom: 10%;
    }

    .toDoList__task {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: beige;
        font-family: arial;
        font-size: 1.2em;
    }

    .toDoList__remove {
        background:none;
        border:none;
        cursor: pointer;
        background-color: beige;
    }

    .toDoList__remove::before {
        content: 'remove';
        font-size: 1em;
    }

</style>