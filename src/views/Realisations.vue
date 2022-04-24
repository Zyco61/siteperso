<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor(@click='clickdrawer()')
			v-app-bar-title
				a Mes réalisations
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
					v-card(elevation="0	")
						v-card-title
							a Last Voxes
						v-card-text
							p Last Voxes est un bot discord permettant l'automatisation et la simplification de nombreuses taches administratives sur un serveur discord.
							p Sa structure est simple:
							li Un robot discord, développé avec la librairie discord.py, permettant l'utilisation simplifiée de l'API Discord, lié à une base SQLite.
							li Utilisation de Github pour gérer les versions.
							br
							p En cours de finalisation :
							li Une API Python Flask (temporaire) permettant de communiquer avec une base de données PostgreSQL.
							li Une base de données PostgreSQL permettant de stocker les informations.
							li Une interface web, faite avec Vue.JS (framework HTML/ CSS / JS)
							li Docker pour créer des images, Kubernetes et Prometheus pour rendre l'API scallable en attendant de changer le langage.
							br
							p Le code sur github est en repository privé, pour des raisons de sécurité.
							br
							p Pour en savoir plus à propos du bot:
							li 
								a(href="https://discord.gg/bbqyjUu8dB" target="_blank") Lien vers le serveur discord (création de compte requis)
							li
								a(href="https://discord.com/api/oauth2/authorize?client_id=864281572399251488&permissions=1480152508918&scope=bot%20applications.commands" target="_blank") Lien pour inviter le robot (création de compte + serveur discord requis)
							li 
								a(href="https://top.gg/bot/864281572399251488" target="_blank") Lien vers top.gg, site de recensement de robots discord
							br
							p Nombre de serveurs qui l'utilisent: {{lastvoxesnumguilds}}.
				v-card#ecartcategorie(elevation="0")
				v-card(width="80%")
					v-card-title
						a Mes contributions
					v-card(elevation="0")
						v-card-title
							a Helper Python et Base de données
						v-card-text
							p Je suis helper Python et base de données sur un serveur discord d'environ 600 membres.
							br
							p Ce genre d'expérience m'a permis de rencontrer des développeurs en devenir, de discuter de différents projets avec eux, ce qui m'a permis
								a  de rencontrer des personnes ayant de meilleures compétences que moi, qui se sont interéssées à mes projets, et m'ont énormément aidé.
							p Être helper me permet de rendre la pareille à d'autres futurs développeurs, à m'interesser à leurs projets, mais surtout, c'est pouvoir discuter autour d'un même et unique domaine.

					v-card(elevation='0')
						v-card-title
							a Conférence
						v-card-text
							p Animation d'une conférence basée sur le Python, en particulier sur la librairie discord.py, permettant de créer des robots discord.
							br
							p J'y ai expliqué, avec un autre développeur, comment créer et coder un bot discord, librairie asynchrone, définir une instance, différentes commandes, évenements, mais surtout, comment lire et comprendre une documentation, ce qui n'est pas toujours facile !
					v-card(elevation='0')
						v-card-title
							a Missions de prestations
						v-card-text
							p Différentes missions liées au développement, par exemple:
							li Création d'un script permettant de modifier facilement des milliers de fichiers (JSON).
							li Explication de cours et d'exercices à différents étudiants.
							li Réalisation d'un bot python permettant de poster chaque nouvelle annonce postée sur dealabs.
							li etc.
					
</template>
<script>
const axios = require("axios").default;

export default {
	name: "Realisations",
	data: () => ({
		lastvoxesnumguilds: 0,
		drawer: true,
		redirectitems: [
			{title: 'Accueil', icon: 'mdi-home', path: "/"},
			{title: 'Mes compétences', icon: 'mdi-information', path: "/competences"},
			{title: 'Mes réalisations', icon: 'mdi-projector-screen', path: "/realisations"},
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