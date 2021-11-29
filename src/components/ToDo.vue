<template>
  <div class="toDo">
    <h2 class="toDo__title">flower stuff to do</h2>
    <div class="toDo__taskContainer">
        <div v-for="(task, index) in tasks" class="toDo__task">   

            <button @click="taskChecked" class="toDo__button"></button>
            <div class="toDo__task">{{ task.text }}</div>

            <button @click="removeTask(index)" class="toDo__remove">
                <img src="../../assets/trashIcon.png" alt="trash icon">
            </button>
      </div>
      <input v-model="newTask" type="text"  class="toDo__input" placeholder=" +  Add task, push enter" @keyup.enter="addTask">  <!-- keyup.enter calls addTask function after pushed -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
      checkedStatus: false
    };
  },

  methods: {
    addTask() {
      if (this.newTask === "") {
        alert("Ups, you need to write a task!");                    // alert user if they try to add without writing
      } else {
        this.tasks.push({ text: this.newTask, checked: this.checkedStatus });       
        this.newTask = "";                                          // reset newTask for next input
      }
    },
    taskChecked() {
      this.isChecked = !this.isChecked;                             // toggleclasss 

    },
    removeTask(index) {
        this.tasks.splice(index, 1);                                // remove clicked task at given index
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
    background-color: #CFD0A9;
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
    height: 230px;
    width: 60%;
    position: relative; 
    border-radius: 10px;
    border: none;
    background-color: white;
    overflow: scroll;
    padding-top: 2%;
            
}
.toDo__input {
    height: 30px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid lightgray;
    position: absolute;         /* absolute in relation to toDo__taskContainer (parent) */
    bottom: 0%;     /* fix: not at bottom when to many tasks */
    padding-left: 15px;
}
.toDo__button {
    background-color: var(--light);
    height: 16px;
    width: 30px;
    border-radius: 38%;
    border: 2px solid black;
    margin-left: 10%;
}

.toDo__button:hover {
    background-color: #CFD0A9;
}
.toDo__button--checked {
  background-color: #CFD0A9;
}

.toDo__task {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    font-family: arial;
    font-size: 0.9em;
    border-radius: 10px;
    padding: 1% 5% 1% 5%;
    bottom: 0%;
}
.toDo__remove {
    background: none;
    border: none;
    margin-right: 10%
}
.toDo__remove img {
    height: 25px;
    width: 30px;
    cursor: pointer;
}

</style>