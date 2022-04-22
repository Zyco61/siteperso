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
    path: '/guilds',
    name: 'Guilds',

    component: function () {
      return import('../views/Guilds.vue')
    }
  },
{
  path: '/guild/:guildid',
  name: "Guild",

  component: function() {
    return import('../views/Guild.vue')
  }
},
{
  path: '/guild/:guildid/welcome',
  name: "Welcome",

  component: function() {
    return import('../views/Welcome.vue')
  }
},
{
  path: '/guild/:guildid/levels',
  name: "Levels",

  component: function() {
    return import('../views/Levels.vue')
  }
},
{
  path: '/user/:id',
  name: "ID",

  component: function() {
    return import('../views/User.vue')
  }
},
{
  path: '/guild/:guildid/moderation',
  name: "Moderation",

  component: function() {
    return import('../views/Moderation.vue')
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
