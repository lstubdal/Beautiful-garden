import { createApp } from 'vue';										/* import from dependencies */
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import store from '../store.js';										/* import from files */
import routes from '../routes.js';

const app_store = createStore(store);									/* create new router and store to project */

const app_router = createRouter({
	routes: routes,
	history: createWebHistory()
})

createApp(App)						
	.use(app_store)														/* register app_store and build */
	.use(app_router)
	.mount('#app');														/* build app */