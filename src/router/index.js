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
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
