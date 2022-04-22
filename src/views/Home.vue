<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-title
				a Accueil
		v-navigation-drawer#color(v-model='drawer' absolute temporary)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
</template>

<script>

export default {
	name: "Home",
	data: () => ({
		drawer: true,
		redirectitems: [
			{title: 'Accueil', icon: 'mdi-view-dashboard', path: "/"},
			{title: 'A propos', icon: 'mdi-image', path: "/about"},
			{title: 'Projets', icon: 'mdi-help-box', path: "/projects"},
			{title: 'Cursus', icon: 'mdi-discord', path: "/cursus"},
			{title: 'Contact', icon: 'mdi-discord', path: "/contact"}

		],
	})
}


</script>
<style lang="sass">
.v-app-bar
  background: #40444b !important
  color:#d8d9da

.v-navigation-drawer
  background: #40444b !important
  color:#d8d9da
</style>