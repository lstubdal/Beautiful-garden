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
                <div class="quiz__score">
                    Your total score is {{ this.totalScore}} / 3
                </div>
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
                    text: 'What is the largest flower in the world?', 
                    alternatives: [
                                    {id: 'a', text: 'Arina Tarun' },
                                    {id: 'b', text: 'Titan Arum' },
                                    {id: 'c', text: 'Tanim Amara' }
                                ],
                      correctAnswerIndex:  1
                },
                {
                    id: 1, 
                    text: 'Moonflower is named that because...',
                    alternatives: [
                                    {id: 'a', text: 'they bloom only at night' },
                                    {id: 'b', text: 'they are grey and round' },
                                    {id: 'c', text: 'they only grow at night'}
                                ],
                    correctAnswerIndex: 0
                },
                {
                    id: 2, 
                    text: 'Is cactus a flower or a plant?',
                    alternatives: [
                                    {id: 'a', text: 'flower',},
                                    {id: 'b', text: 'plant',},
                                    {id: 'c', text: 'flowering plant'}
                                ],
                    correctAnswerIndex: 2
                },
            ]
            }
        },
        methods: {
            findUsersAnwer(alternative) {
                const usersAnswer= this.questions[this.currentQuestion].alternatives.findIndex(currentAlternative => currentAlternative.id === alternative.id)     // find index to alternative user chose
                const correctAnswer = this.questions[this.currentQuestion].correctAnswerIndex;   
                console.log('uA: ', usersAnswer)      
                console.log('cA: ', correctAnswer)                                                            // get the the index of the correct answer to question
                
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
                this.currentQuestion = 0;
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
    .quiz__questionNumber {
        font-family: arial;
        font-size: 1.1em;
        padding-top: 20px;    
        text-align: center; 
    }
    .quiz__title {
        text-align: center;
    }
    .quiz__question {
        font-family: arial;
        font-size: 1.3em;
        padding: 20px 50px 10px 50px;
        text-align: center;
     
    }
    .quiz__result {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;   
    }
    .quiz__score {
        font-size: 1.4em;
        font-family: arial;
        padding: 10px;
    }
    .quiz__feedback {
        font-size: 1.1em;
    }
    .quiz__resetButton {
        margin-top: 20px;
        background-color: white;
        font-size: 1.1em;
        width: 50%;
        height: 100%;
        border: 1px solid black;
        border-radius: 4px;
    }
    .quiz__resetButton:hover {
        background-color: rgb(234, 240, 207);
    }
</style>