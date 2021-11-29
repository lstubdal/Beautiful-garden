import { createApp } from 'vue';										// import from dependencie
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import store from '../store.js';										// import from file
import routes from '../routes.js';

const app_store = createStore(store);									// create

const app_router = createRouter({
	routes: routes,
	history: createWebHistory()
})

createApp(App)						
	.use(app_store)														// register app_store 
	.use(app_router)
	.mount('#app');