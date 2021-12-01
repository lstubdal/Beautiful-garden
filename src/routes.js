import Home from './views/Home.vue';                    // dashboard 
import ToDoView from './views/ToDoView.vue'; 
import Potet from './views/Potet.vue';                  // HUSK Å ENDRE POTET
import SlideshowView from './views/SlideshowView.vue';
import QuizView from './views/QuizView.vue';
import TableView from './views/TableView.vue'; 


export default [
    {name: 'home',                  path: '/',                          component: Home },
    {name: 'To do list', 			path: '/to-do-list', 	            component: ToDoView },
    {name: 'Help from experts', 	path: '/contact-experts', 	        component: Potet},   // HUSK Å ENDRE POTET
    {name: 'Flower slideshow', 		path: '/flower-slideshow', 	        component: SlideshowView }, 
    {name: 'Flower quiz', 		    path: '/flower-quiz', 	            component: QuizView },
    {name: 'Flower overview', 		path: '/flower-overview', 	        component: TableView },


 ]