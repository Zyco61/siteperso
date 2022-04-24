<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor(@click='clickdrawer()')
			v-app-bar-title
				a Mes réalisations et projets
		v-navigation-drawer#color.overflow-(v-model='drawer' absolute temporary)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#main
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			div(style="width: 90vw;")
				v-card(width="80%")
					v-card-title
						a Mes Réalisations
					v-card-text
						a réalisations
				v-card#ecartcategorie(elevation="0")
				v-card(width="80%")
					v-card-title
						a Mes projets
					v-card-text
						a projets
				v-card#ecartcategorie(elevation="0")
				v-card(width="80%")
					v-card-title
						a Mes contributions
					v-card-text
						a formations
</template>
<script>

export default {
	name: "Projects",
	data: () => ({
		drawer: true,
		redirectitems: [
			{title: 'Accueil', icon: 'mdi-home', path: "/"},
			{title: 'Mes compétences', icon: 'mdi-information', path: "/competences"},
			{title: 'Mes réalisations & projets', icon: 'mdi-projector-screen', path: "/projects"},
			{title: 'Mon parcours', icon: 'mdi-certificate', path: "/cursus"},
			{title: 'F.A.Q Alternance', icon: 'mdi-help', path: "/faq"},
			{title: 'Contact', icon: 'mdi-forum', path: "/contact"}

		],
	}),
	mounted() {
		document.getElementById("main").style.marginLeft = "20vw"
	},
	methods: {
		redirectnavbar: function(path) {
			this.$router.push(path)
		},
		clickdrawer() {
			this.drawer = !this.drawer
			document.getElementById("main").style.marginLeft = this.drawer ? "20vw" : "10vw"
		},
	}
}


</script>
<style lang="sass">
.v-app-bar
  background: #40444b !important
  color:#d8d9da

.v-navigation-drawer
  background: #40444b !important
  color:#d8d9da

.v-app-bar-nav-icon
  background: #d9d8da !important

#ecartcategorie
  background: transparent !important
  height: 10vh
</style>