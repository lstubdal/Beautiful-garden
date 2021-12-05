
<template>
     <div class="quiz__alternativeContainer">
        <button @click="emitAnswer" class="quiz__alternative" aria-label="alternative">{{ alternative.answer }}</button>
    </div>
</template>

<script>
    export default {
        props: {      
             alternative: {
                 type: Object
             },
        },
        methods: {
            emitAnswer() {
                this.$emit('answer', this.alternative);
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
    width: 80%;
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

