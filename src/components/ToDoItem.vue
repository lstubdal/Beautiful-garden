
<template>
        <div class="toDo__task">   
           <button @click="emitDone" :class="`toDo__button ${task.done ? 'toDo__button--done' : ''}`" aria-label="done"></button> 
            
            <div :class="`toDo__taskText ${task.done ? 'toDo__taskText--done' : ''}`">{{ task.text }}</div>
            
            <button @click="emitRemove" class="toDo__remove" aria-label="remove">
                <img src="../../assets/trashIcon.png" alt="trash icon">
            </button>
      </div>  
</template>

<script>
    export default {
         props: {      // sende hele objektet 
             task: {
                 type: Object
             },
        },
        methods: {
            emitDone() {
                this.$emit('done-task', this.task) // sender hele objektet som trigget event
            },
            emitRemove() {                   // ta bort seg selv i listen, skal bare si ifra at knapp er blitt trykket
                this.$emit('remove-task', this.task)            // syntax for eventer -> this.$emit('event navn', hva som returneres) må finne ut hvilket component trigget -> returnerer componentet som trigger event (emit)

            }
        }
    }
</script>

<style>
  .toDo__button {
    background-color: var(--light);
    height: 18px;
    width: 32px;
    border-radius: 38%;
    border: 1.5px solid black;
    margin-left: 10%;
  }
  .toDo__button--done {
    background-color: #CFD0A9;
    border: 1px solid black;
  }
   .toDo__button:hover {
    background-color: #CFD0A9;
  }
  .toDo__taskText {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    font-family: arial;
    font-size: 1em;
    border-radius: 10px;
    padding: 1% 5% 1% 5%;
  }

  .toDo__taskText--done {
    text-decoration: line-through 2px;
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

