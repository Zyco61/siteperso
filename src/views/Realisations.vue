<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor(@click='clickdrawer()')
			v-app-bar-title
				a Mes réalisations
		v-navigation-drawer#color.overflow-(v-model='drawer' absolute permanent)
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
							p C'est pour le moment mon projet le plus important, et qui m'apporte le plus d'expérience.
							br
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

					v-card(elevation="0")
						v-card-title
							a Autres projets
						v-card-text
							p Certains plus petits projets réalisés dans le cadre de ma spécialisation NSI ou pour le plaisir.
							br
							p Parmi les plus intéressants:
							li Un 
								a(href="https://github.com/Zyco61/python-2048" target="_blank")  2048.
							li Un 
								a(href="https://github.com/Zyco61/demineur-python" target="_blank")  démineur.
							li Un
								a(href="https://github.com/Zyco61/jeu-de-la-vie" target="_blank")  jeu de la vie.
							br
							p Bien que ces projets datent un peu, ils ont été pour autant agréables à faire, et m'ont permis de me familiariser avec pygame pour le 2048 et le démineur.

					v-card(elevation="0")
						v-card-title
							p Ce site
						v-card-text
							p Sans oublier ce petit site, certe développé rapidement, mais fonctionnel, réalisé avec Vue.JS (framework HTML/CSS/JS). 

				v-card#ecartcategorie(elevation="0")
				v-card(width="80%")
					v-card-title
						a Mes contributions
					v-card(elevation="0")
						v-card-title
							a Helper Python et Base de données
						v-card-text
							p Je suis helper Python et base de données depuis environ un an, au sein d'une équipe de 7 membres, sur un serveur discord d'environ 600 membres.
							br
							p Ce genre d'expérience m'a amené à rencontrer des développeurs en devenir, à discuter de différents projets avec eux, ce qui m'a permis
								a  de rencontrer des personnes ayant de meilleures compétences que moi, qui se sont interéssées à mes projets, et m'ont énormément aidé.
							p Être helper me permet de rendre la pareille à d'autres futurs développeurs, de découvrir et m'interesser à d'autres projets, mais surtout, d'échanger autour d'un même et unique domaine.

					v-card(elevation='0')
						v-card-title
							a Conférence
						v-card-text
							p J'ai animé tout récemment une conférence basée sur le Python, en particulier sur la librairie discord.py, permettant de créer des robots discord.
							br
							p J'y ai expliqué, avec un autre développeur, comment créer et coder un bot discord, les principes d'une librairie asynchrone, de définition d'une instance, de création de différentes commandes, d'évènements, mais surtout, comment lire et comprendre la documentation pour leurs permettre d'être plus autonome.
							p
							p Si vous avez 2 heures devant vous, la redifusion est disponible sur
								a(href="https://youtu.be/wkbQioP01IE" target="_blank")  youtube !
					v-card(elevation='0')
						v-card-title
							a Missions de prestations
						v-card-text
							p Je me suis proposé et ai réalisé différentes missions liées au développement, par exemple:
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
		api_endpoint: process.env.VUE_APP_API_ENDPOINT,
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
			url: `${this.api_endpoint}/discord/lvnumber`,
		})
		.then(({data}) => {
			this.lastvoxesnumguilds = data
		})
  },
	mounted() {
		document.getElementById("main").style.marginLeft = "5vw"
	},
	methods: {
		redirectnavbar: function(path) {
			this.$router.push(path)
		},
		clickdrawer() {
			this.drawer = !this.drawer
			document.getElementById("main").style.marginLeft = this.drawer ? "5vw" : "15vw"
		},
	}
}


</script>
<style lang="sass">
.v-app-bar
  background: #40444b !important
  color:#d8d9da

.v-toolbar-title
  margin-left: 10px
  color: #ffffff
  font-weight: bold

.v-navigation-drawer
  background: #40444b !important
  color:#d8d9da

.v-app-bar-nav-icon
  background: #d9d8da !important

.v-list
  background: #40444b !important
  color: #ffffff

#ecartcategorie
  background: transparent !important
  height: 10vh

.v-card
  background-color: #41454b
  color: #FFFFFF

.v-card-text
  color: #FFFFFF

a
  color: #FFFFFF
</style>