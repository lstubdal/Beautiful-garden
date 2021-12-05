<template>
    <div class="quiz">
        <div v-if="!this.doneWithQuestions" >
            <div class="quiz__title">{{ this.title }}</div>
            <div class="quiz__questionNumber"><i><u>question: {{ questions[currentQuestion].id +1 }}</u></i></div>
            <div class="quiz__question"> {{ questions[currentQuestion].text }}</div>

            <QuizAlternative 
                v-for="alternative in questions[currentQuestion].alternatives"
                @answer="findUsersAnwer"
                :alternative="alternative"  
                />
        </div>
        <div  v-else="this.doneWithQuestions" >
            <div class="quiz__result">
                Your total score is {{ this.totalScore}} / 3

                <div v-if="this.totalScore === 0"> Not good, you suck </div>
                <div v-if="this.totalScore === 1"> Come on, you can do better </div>
                <div v-if="this.totalScore === 2"> Not bad </div>
                <div v-if="this.totalScore === 3"> Perfect! smartass</div>

                <button @click="resetQuiz" class="quiz__resetButton">Start over</button>
            </div>
        </div>
    </div>
</template>

<script>

    import QuizAlternative from '../components/QuizAlternative.vue';

    export default {
        components: {
            QuizAlternative
        },

        data() {
            return {
                title: 'time to learn about flowers',
                currentQuestion: 0,
                totalScore: 0,
                doneWithQuestions: false,
                questions: [
                { 
                    id: 0,
                    text: 'This is question 1', 
                    alternatives: [
                                    {id: 'a' , answer: 'Yes' },
                                    {id: 'b' , answer: 'No' },
                                    {id: 'c' , answer: 'Maybe' }
                                    ],
                      correctAnswerIndex:  0
                },
                {
                    id: 1, 
                    text: 'This is question 2',
                    alternatives: [
                                    {id: 'a' , answer: 'Yes' },
                                    {id: 'b' , answer: 'No' },
                                    {id: 'c' , answer: 'Maybe'}
                    ],
                    correctAnswerIndex: 1
                },
                {
                    id: 2, 
                    text: 'This is question 3',
                    alternatives: [
                                    {id: 'a', answer: 'Yes',},
                                    {id: 'b', answer: 'No',},
                                    {id: 'c', answer: 'Maybe'}
                    ],
                    correctAnswerIndex: 2
                },


            ]
            }
        },
        methods: {
            findUsersAnwer(alternative) {
                const usersAnswer= this.questions[this.currentQuestion].alternatives.findIndex(currentAlternative => currentAlternative.id === alternative.id)     // find index to alternative user chose
                const correctAnswer = this.questions[this.currentQuestion].correctAnswerIndex;                                                                     // get the the index of the correct answer to question
                
                this.checkAnswer(usersAnswer, correctAnswer);       
            },
            checkAnswer(usersAnswer, correctAnswer) {
                if (usersAnswer === correctAnswer) {           // increase total point +1 if correct alternative
                    this.totalScore++;
                }
                this.nextQuestion();
            }, 
            nextQuestion() {
                const lastQuestion = this.questions.length -1;

                if (this.currentQuestion != lastQuestion) {    // next question as long there is questions in the list
                    this.currentQuestion++;
                } else {
                    this.doneWithQuestions = true;
                }
            },
            resetQuiz() {
                this.doneWithQuestions = false;
                this.totalScore = 0;
            }
        }

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
        font-size: 1.1em;
        padding-top: 10px;    
        text-align: center; 
    }
    .quiz__question {
        font-family: arial;
        font-size: 1.6em;
        padding-top: 20px;
        padding-bottom: 20px;     
    }
    .quiz__result {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .quiz__resetButton {
        background-color: white
    }
</style>