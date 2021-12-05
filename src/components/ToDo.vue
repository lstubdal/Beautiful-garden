<template>
  <div class="toDo">
    <h2 class="toDo__title"> {{ title }}</h2>
    <div class="toDo__taskContainer"> 
      
      <ToDoItem  
          @done-task="done" 
          @remove-task="remove" 
          v-for="(task, index) in tasks" 
          :task="task"
           /> 
      
      <input 
          v-model="newTask" 
          type="text"  
          class="toDo__input" 
          placeholder=' +  Write task, push enter' 
          @keyup.enter="addTask">  <!-- keyup.enter calls addTask function after pushed -->
          
    </div>
  </div>
</template>

<script>

import ToDoItem from '../components/ToDoItem.vue'

export default {
  components: {
    ToDoItem,
  },
    data() {
      return {
        title: 'flower stuff to do',
        newTask: "",
        tasks: [],    // add toDoItems components
  }
/*
   computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },

      newTask() {
      return this.$store.getters.getNewTask;
    }  */   
  }, 

  methods: {
    addTask() {
 /*      this.$store.commit('addTask', { text: 'test', checked: false});  SPØR ALEJANDRO HVORDAN KOBLE INPUTVARIABEL TIL NEWTASK I STORAGE*/
       if (this.newTask === "") {
        alert("Ups, you need to write a task!");                    // alert user if they try to add without writing
      } else {
        this.tasks.push({ id: this.randomId(), text: this.newTask, done: false });       
        this.newTask = "";  // reset newTask for next input                                
      } 
    },
    remove(task) {
        const taskIndex = this.tasks.findIndex(currentTask => currentTask.id === task.id); 
        this.tasks.splice(taskIndex, 1);       // remove clicked task at given index
    },
    done(task) {
       const taskIndex = this.tasks.findIndex(currentTask => currentTask.id === task.id);
       this.tasks[taskIndex].done = !this.tasks[taskIndex].done;     // change status on task
    },
    randomId() {
      return Math.random().toString(36).slice(2);   // generates random ids
			},
  },
};
</script>

<style>
  .toDo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    overflow: scroll;
    background-color: var(--toDo);
  }
  .toDo__title {
    font-size: 1.1em;
    font-family: var(--main-font);
    font-weight: bold;
    margin-bottom: -3%;
  }

  .toDo__taskContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 70%;
    width: 70%;
    position: relative; 
    border-radius: 8px;
    border: none;
    background-color: var(--light);
    overflow: scroll;
    padding-top: 2%;     
  }
   .toDo__task {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--light);
    font-family: arial;
    font-size: 0.9em;
    border-radius: 10px;
    padding: 1% 5% 1% 5%;
  }
  
  .toDo__input {
    height: 30px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid lightgray;
    position: absolute;         /* absolute in relation to toDo__taskContainer (parent) */
    bottom: 0%;     /* fix: not at bottom when to many tasks */
    padding-left: 30px;
  }
</style>


