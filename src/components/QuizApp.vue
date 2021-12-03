<template>
    <div class="quiz">
        <div class="quiz__title">{{ title }}</div>

        <div v-for="(question, index) in questions">
            <div class="quiz__question"> {{ question.text }}</div>
        </div>
    
<!--         <div class="quiz__questionNumber"><i><u>question {{ id }}</u></i></div>
        <div class="quiz__question"> {{ questions }}</div>
        <div class="quiz__alternativeContainer">
            <button class="quiz__alternative">A</button>
            <button class="quiz__alternative">B</button>
            <button class="quiz__alternative">C</button>
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'time to learn about flowers',
            questions: [
                { 
                    id: 1,
                    text: 'This is question 1', 
                    alternatives: [
                                    'Yes',
                                    'No',
                                    'Maybe'],
                      correctAnswerIndex:  0
                },
                {
                    id: 2, 
                    text: 'This is question 2',
                    alternatives: [
                                    'Yes2',
                                    'No2',
                                    'Maybe2'
                    ],
                    correctAnswerIndex: 1
                },
                {
                    id: 3, 
                    text: 'This is question 3',
                    alternatives: [
                                    'Yes3',
                                    'No3',
                                    'Maybe3'
                    ],
                    correctAnswerIndex: 2
                }
            ]
            }
        },

/*         computed: {
            id() {
                return this.$store.getters.getId;
            },
            title() {
                return this.$store.getters.getTitle;
            },
            questions() {
                return this.$store.getters.getQuestion;
            },
            alternatives() {
                return this.$store.getters.getAlternatives;
            } 
        } */
    }
</script>

<style>
    .quiz {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #D0E5E8;
    }
    .quiz__title {
        padding-top: 30px;
    }
    .quiz__questionNumber {
        font-family: arial;
        padding-top: 10px;     
    }
    .quiz__question {
        font-family: arial;
        font-size: 1.7em;
        padding-top: 20px;     
    }
    .quiz__alternativeContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .quiz__alternative {
        display: flex;
        justify-content: center;
        align-items: center ;
        height: 17%;
        width: 50%;
        border: 0.5px solid black;
        background-color: var(--light);
        border-radius: 10px;
        font-family: arial;
        cursor: pointer;
        margin: 1%;
    }
    .quiz__alternative:hover {
        background-color: #eed1d1;
    }
</style>