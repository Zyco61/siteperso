<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
			v-app-bar-title
				p Accueil
		v-navigation-drawer#color.overflow-(v-model='drawer' absolute temporary)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#main
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			div(style="width: 90vw")
				a(href="../assets/CV.pdf" download="CV.pdf") Télécharger mon CV
				v-card(style="width: 70vw")
					v-card-title
						a Projet professionnel
					v-card-text
						a text
				v-card#ecartcategorie(elevation="0")
				v-card(style="width: 70vw")
					v-card-title
						p Softskills
					v-card-text
						lu
							li Curieux
							li Esprit d'équipe
							li Autonome
				v-card#ecartcategorie(elevation="0")
				v-card(style="width: 70vw")
					v-card-title
						p Informatique
					v-card(elevation="0")
						v-card-title
							p Langages
						v-card-text
							p Python
							p HTML / CSS
							p SQL
							p C#
					v-card(elevation="0")
						v-card-title
							p Environnements
						v-card-text
							p Visual Studio Code
							p Visual Studio
							p PGAdmin 4
							p PhPMyAdmin
							p SQLite Studio
					v-card(elevation="0")
						v-card-title
							p Plateformes / Frameworks
						v-card-text
							p Flask
							p Vue.JS
							p .NET
					v-card(elevation="0")
						v-card-title
							p Autre
						v-card-text
							p GitHub
							p Docker
							p Kubernetes
							p Packoffice
					
</template>
<script>

export default {
	name: "Competences",
	data: () => ({
		drawer: true,
		redirectitems: [
			{title: 'Accueil', icon: 'mdi-home', path: "/"},
			{title: 'Mes compétences', icon: 'mdi-information', path: "/competences"},
			{title: 'Mes réalisations & projets', icon: 'mdi-projector-screen', path: "/projects"},
			{title: 'Mon parcours', icon: 'mdi-certificate', path: "/cursus"},
			{title: 'F.A.Q', icon: 'mdi-help', path: "/faq"},
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
		redirect: (url) => {
			window.open(url, "_blank");
		}
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
  background: #36393f !important

#ecartcategorie
  background: transparent !important
  height: 10vh


.v-btn
  background: #40444b !important
  color:#d8d9da

img
  cursor: pointer

#displayicons
  display: grid
  grid-template-columns: repeat(12, auto)
  grid-gap: 10px
</style>