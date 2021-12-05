import toDo from './modules/toDo.js';  
/* import quizApp from './modules/quizApp.js';     */                                // import toDo module (data only related to toDo component)

export default {
    state() {
        return {
            pages: [                                                         //array for navigation pages
                {title: 'To do list', id: 'to-do-list'},                     // id for routerlink => page_id
                {title: 'Help from experts', id: 'help-from-experts'},  
                {title: 'Flower slideshow', id: 'flower-slideshow'},
                {title: 'Flower quiz', id: 'flower-quiz'},
                {title: 'Flower overview', id: 'flower-overview'}
            ]
        }
    },

    getters: {
        getPages(state) {
            return state.pages;
        }
    },

    modules: {
        toDo,
        /* quizApp */
    }
}