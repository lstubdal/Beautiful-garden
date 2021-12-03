export default {
    state() {
        return {
            title: 'time to learn about flowers',
            questions: [
                { 
                    id: 1,
                    text: 'This is question one', 
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

    getters: {
        getId(state) {
            return state.questions.id;
        },
        getTitle(state) {
            return state.title;
        },
        getQuestions(state) {
            return state.questions;
        },
        getAlternatives(state) {
            return state.question.alternatives;
        }
    }
}