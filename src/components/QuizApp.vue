<template>
    <div class="quiz">
        <div v-if="!this.doneWithQuestions" >                   <!-- while questions left in questions-array, show them -->
            <div class="quiz__title">{{ this.title }}</div>       
            <div class="quiz__questionNumber">question: {{ questions[currentQuestion].id +1 }}</div>    <!-- +1 becuase id starts at 0 -->
            <div class="quiz__question"> {{ questions[currentQuestion].text }}</div>

            <!-- @answer custom event calls on findusersAnswer method -->
            <QuizAlternative    
                v-for="alternative in questions[currentQuestion].alternatives"     
                @answer="findUsersAnwer"
                :alternative="alternative"  
                />
        </div>

        <div v-else="this.doneWithQuestions" >      <!-- show results if done with questoins -->
            <div class="quiz__result">
                <div class="quiz__score">
                    Your total score is {{ this.totalScore}} / 3
                </div>
                
                <div> {{ resultsMessage }}</div>   

                <button @click="resetQuiz" class="quiz__resetButton" aria-label="start over button">Start over</button>
            </div>
        </div>
    </div>
</template>

<script>
    import QuizAlternative from '../components/QuizAlternative.vue';

    export default {
        components: {
            QuizAlternative,
        },

        data() {
            return {
                currentQuestion: 0,
                totalScore: 0,
                doneWithQuestions: false,       
                title: 'time to learn about flowers',
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
            ], 

            messages: [
                'Noot good, you suck',
                'Come on, you can do better',
                'Not bad',
                'Perfect you smartass'
            ]
            }
        },

        computed: {
            resultsMessage() {      /* display message to user based on score */
                if (this.totalScore === 0) {return this.messages[0]}
                if (this.totalScore === 1) {return this.messages[1]}
                if (this.totalScore === 2) {return this.messages[2]}
                if (this.totalScore === 3) {return this.messages[3]}
            }
        },

        methods: {
            findUsersAnwer(alternative) {
                const usersAnswer= this.questions[this.currentQuestion].alternatives.findIndex(currentAlternative => currentAlternative.id === alternative.id)     /*  find index to the alternative user clicked */
                const correctAnswer = this.questions[this.currentQuestion].correctAnswerIndex;                                                                      /* get correct answer from variable in questions array */
                
                this.checkAnswer(usersAnswer, correctAnswer);       
            },

            checkAnswer(usersAnswer, correctAnswer) {           /* compare user's answer and correct answer */
                if (usersAnswer === correctAnswer) {            /* increase total point +1 if correct alternative */
                    this.totalScore++;
                }
                this.nextQuestion();                            /* move on to next question */
            }, 

            nextQuestion() {
                const lastQuestion = this.questions.length -1;

                if (this.currentQuestion != lastQuestion) {     /* next question while there are uestions in list */
                    this.currentQuestion++;
                } else {
                    this.doneWithQuestions = true;
                }
            },
            
            resetQuiz() {      
                this.doneWithQuestions = false; /*  reset quiz values if user wants to retry quiz */
                this.currentQuestion = 0;
                this.totalScore = 0;
            }
        }
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
        font-style: italic;
        text-decoration: underline;
    }

    .quiz__title {
        padding-top: 0.2em;
		font-size: 1.1em;
		font-family: var(--main-font);
		font-weight: bold;
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