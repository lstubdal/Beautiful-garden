<template>
     <div class="quiz__alternativeContainer">
        <button @click="emitAnswer" class="quiz__alternative" aria-label="alternative button">{{ alternative.text }}</button>  <!-- when button clicked, calls on method that creates cutom made event -->
    </div>
</template>

<script>
    export default {
        props: {      
             alternative: {         /* create alternative prop to give value from questions array in quizApp.vue */
                 type: Object
             },
        },

        methods: {
            emitAnswer() {
                this.$emit('answer', this.alternative);  /* create event: 'event name', and return the alterntaive-object that triggered emit(event)) - create connection between quizAlternaive in quizApp.vue */ 
            }
        }
    }
</script>

<style>
    .quiz__alternativeContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 15%;
        padding: 5px;
    }

    .quiz__alternative {
        display: flex;
        justify-content: center;
        align-items: center ;
        height: 125%;
        width: 220px;
        border: 0.5px solid black;
        background-color: var(--light);
        border-radius: 10px;
        font-size: 1.1em;
        font-family: arial;
        cursor: pointer;
    }
    .quiz__alternative:hover {
        background-color: #f1f1f1;
    }
</style>

