/* import views for components */
import Home from './views/Home.vue';                    /* dashboard */
import ToDoView from './views/ToDoView.vue'; 
import ContactUsView from './views/ContactUsView.vue';                  
import SlideshowView from './views/SlideshowView.vue';
import QuizView from './views/QuizView.vue';
import TableView from './views/TableView.vue'; 

/* give route name, pathname and adress component to redirect to */
export default [
    { name: 'home',                   path: '/',                            component: Home },
    { name: 'To do list', 			  path: '/to-do-list', 	                component: ToDoView },
    { name: 'Help from experts', 	  path: '/contact-experts', 	        component: ContactUsView},   
    { name: 'Flower slideshow', 	  path: '/flower-slideshow', 	        component: SlideshowView }, 
    { name: 'Flower quiz', 		      path: '/flower-quiz', 	            component: QuizView },
    { name: 'Flower overview', 		  path: '/flower-overview', 	        component: TableView }
 ]