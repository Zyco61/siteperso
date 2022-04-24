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
					v-card
						v-card-title
							a Last Voxes
						v-card-text
							p Last Voxes est un bot discord permettant l'automatisation et la simplification de nombreuses taches administratives sur un serveur discord.
							p Sa structure est simple:
							li Un robot discord, développer avec la librairie discord.py, permettant l'utilisation simplifié de l'API Discord.
							li Une API python Flask (temporaire) permettant de communiquer avec une base de données PostgreSQL.
							li Une base de données PostgreSQL permettant de stocker les informations.
							li Une interface web, faite avec Vue.JS (framework HTML/ CSS / JS) (pas encore disponible)
							li Utilisation de Github pour gérer les versions, Docker pour créer des images, Kubernetes et Prometheus pour rendre l'API scallable en attendant de changer le langage.
							br
							p Le code est sur mon github, en repository privé, pour des raisons de sécurités.
							br
							p Pour en savoir plus à propos du bot:
							li 
								a(href="https://discord.gg/bbqyjUu8dB" target="_blank") Lien vers le serveur discord (création de compte requis)
							li
								a(href="https://discord.com/api/oauth2/authorize?client_id=864281572399251488&permissions=1480152508918&scope=bot%20applications.commands" target="_blank") Lien pour inviter le robot (création de compte + serveur discord requis)
							li 
								a(href="https://top.gg/bot/864281572399251488" target="_blank") Lien vers top.gg, site de recenssement de robots discord
							br
							p Nombre de serveurs qui l'utilise: {{lastvoxesnumguilds}}.

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
const axios = require("axios").default;

export default {
	name: "Projects",
	data: () => ({
		lastvoxesnumguilds: 0,
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
	created () {
		axios({
			method: "GET",
			url: "https://discordapp.com/api/v9/users/@me/guilds",
			headers: {"Authorization": `Bot ODY0MjgxNTcyMzk5MjUxNDg4.YOzK8A.8ZfW_D_affo1tHGtNj7baeF9N9Y`}
		})
		.then(({data}) => {
			this.lastvoxesnumguilds = Object.keys(data).length
		})
  },
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