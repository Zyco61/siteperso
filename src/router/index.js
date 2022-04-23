import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',

		component:  () => {
			return import('../views/Home.vue')
		}
	},
	{
		path: '/competences',
		name: 'Competences',

		component: () => {
			return import('../views/Competences.vue')
		}
	},
	{
		path: '/cursus',
		name: 'Cursus',

		component:  () => {
			return import('../views/Cursus.vue')
		}
	},
	{
		path: '/:something',
		name: '404 not found',

		component: function() {
			return import("../views/404NotFound")
		}
	},
	{
		path: '/contact',
		name: 'Contact',

		component: () => {
			return import('../views/Contact.vue')
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
