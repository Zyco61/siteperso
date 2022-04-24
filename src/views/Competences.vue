<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon(@click='clickdrawer()')
			v-app-bar-title
				p Mes compétences
		v-navigation-drawer#navigationdrawer.overflow-(v-model='drawer' absolute temporary)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#main
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			div(style="width: 90vw")
				a#white(href="../assets/CV.pdf" download="CV.pdf") Télécharger mon CV
				br
				br
				br
				v-card(style="width: 70vw")
					v-card-title
						a Mon projet professionnel
					v-card-text
						p Devenir développeur logiciel, bien sur !
						br
						p Et partir d'entrée de jeu en alternance jusqu'à bac+2 / 3, pour commencer.
						p Mobile France entière: C'est l'environnement professionnel et les missions qui m'intéressent :
						p Parce qu'il n'y a rien de mieux que l'entreprise pour appliquer les apprentissages de l'école, pratiquer, s'immerger dans le monde professionnel,
							a  travailler en équipe, échanger des points de vue, et surtout s'impliquer dans des projets concrets et utiles.
						p Et voir du pays, c'est un plus ! ;-)
						br

						p Continuer jusqu'au master, sans doute, dans une orientation client applicatif, probablement en .NET.
						br

						p Mais chaque chose en son temps ^^ !
				v-card#ecartcategorie(elevation="0")
				v-card(style="width: 70vw")
					v-card-title
						p Mes Softskills
					v-card-text
						lu
							li Curieux : Si c'est utile à mon projet ou ma mission, ça m'intéresse !!
							li Autonome : Pour mes formations, je me suis renseigné, j'ai suivi des tutoriels, trouvé des projets pour appliquer.
							li Esprit d'équipe : L'alternance c'est aussi sortir du cadre scolaire et intégrer une équipe professionnelle, et nouer des relations de travail pour travailler en synergie. 
							li Tenace : En difficulté, je cherche, je m'accroche et je me dépasse.
							li Flexible : Je m'adapte aux situations et environnements, j'aime quand ca bouge (et quoi de mieux que l'informatique pour ça) !
				v-card#ecartcategorie(elevation="0")
				v-card(style="width: 70vw")
					v-card-title
						p Mes connaissances informatiques actuelles
					v-card-text
						p J'ai à peine 18 ans, je suis loin d'avoir 10 ans d'expérience, mais je ne pars pas de rien (voir 
							a#link(@click="redirectnavbar('/projects')") réalisations et projets
							a ) ^^ !
					v-card(elevation="0")
						v-card-title
							p Langages
						v-card-text
							p Python
								img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
							p HTML / CSS
								img(src="https://zupimages.net/up/22/16/uetb.png" alt="1.5" width="100")
							p SQL
								img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
							p C#
								img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
					v-card(elevation="0")
						v-card-title
							p Environnements
						v-card-text
							p Visual Studio Code
								img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
							p Visual Studio
								img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
							p PGAdmin 4
								img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
							p PhPMyAdmin
								img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
							p SQLite Studio
								img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
					v-card(elevation="0")
						v-card-title
							p Plateformes / Frameworks
						v-card-text
							p Flask
								img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
							p Vue.JS
								img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
							p .NET
								img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
					v-card(elevation="0")
						v-card-title
							p Bases de données
						v-card-text
							p SQLite
								img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
							p PostgreSQL
								img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
							p MySQL
								img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
					v-card(elevation="0")
						v-card-title
							p Autre
						v-card-text
							p GitHub
								img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
							p Docker
								img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
							p Kubernetes
								img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
							p Packoffice
								img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
					
</template>
<script>

export default {
	name: "Competences",
	data: () => ({
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
  background: #d9d8da !important

#ecartcategorie
  background: transparent !important
  height: 10vh



img
  cursor: pointer

#displayicons
  display: grid
  grid-template-columns: repeat(12, auto)
  grid-gap: 10px

#white
  color: #FFFFFF

#link
  color: #000000
</style>