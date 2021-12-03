
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
         props: {      
             task: {
                 type: Object
             },
        },
        methods: {
            emitDone() {
                this.$emit('done-task', this.task) // sender hele objektet som trigget event
            },
            emitRemove() {                   
                this.$emit('remove-task', this.task)        // create event: 'event name', what to return (task obj that triggered emit) 

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
        background-color: var(--toDo);
        border: 1px solid black;
    }
    .toDo__button:hover {
        background-color: var(--toDo);
    }
    .toDo__taskText {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--light);
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

