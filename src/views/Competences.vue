<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon(@click='clickdrawer()')
			v-app-bar-title
				p Mes compétences
		v-navigation-drawer#navigationdrawer.overflow-(v-model='drawer' absolute permanent)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#main
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			div(style="width: 90vw")
				a#white(href="../assets/files/CV-Romain-MURIER.pdf" download="CV-Romain-MURIER.pdf") Télécharger mon CV
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
						p Mobile France entière: Ce sont l'environnement professionnel et les missions qui m'intéressent :
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
						li 
							b Curieux : 
							a Si c'est utile à mon projet ou ma mission, ça m'intéresse !!

						li 
							b Autonome :
							a  Pour mes formations, je me suis renseigné, j'ai suivi des tutoriels, trouvé des projets pour appliquer.

						li 
							b Esprit d'équipe : 
							a L'alternance c'est aussi sortir du cadre scolaire et intégrer une équipe professionnelle, et nouer des relations de travail pour travailler en synergie. 
						li 
							b Tenace : 
							a En difficulté, je cherche, je m'accroche et je me dépasse.

						li 
							b Flexible : 
							a Je m'adapte aux situations et environnements, j'aime quand ca bouge (et quoi de mieux que l'informatique pour ça) !
				v-card#ecartcategorie(elevation="0")
				v-card(style="width: 70vw")
					v-card-title
						a Mes connaissances en langues
					v-card-text
						table
								tr
									th(width="1%") 
									th(width="1%") 
								tr
									td#center Anglais
									td 
										img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
								tr
									td#center Espagnol
									td
										img(src="https://zupimages.net/up/22/16/uetb.png" alt="1.5" width="100")

				v-card#ecartcategorie(elevation="0")
				v-card(style="width: 70vw")
					v-card-title
						p Mes connaissances informatiques actuelles
					v-card-text
						p J'ai à peine 18 ans, je suis loin d'avoir 10 ans d'expérience, mais je ne pars pas de rien (voir 
							a#link(@click="redirectnavbar('/projects')") Mes réalisations
							a ) ^^ !
					v-card(elevation="0")
						v-card-title
							p Langages
						v-card-text
							table
								tr
									th(width="1%") 
									th(width="1%") 
								tr
									td#center Python
									td 
										img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
								tr
									td#center HTML / CSS
									td
										img(src="https://zupimages.net/up/22/16/uetb.png" alt="1.5" width="100")
								tr
									td#center JavaScript
									td
										img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
								tr
									td#center SQL
									td
										img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
								tr
									td#center C#
									td
										img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
									
					v-card(elevation="0")
						v-card-title
							p Environnements
						v-card-text
							table
								tr
									th(width="1%") 
									th(width="1%") 
								tr
									td#center Visual Studio Code
									td 
										img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
								tr
									td#center Visual Studio
									td
										img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
								tr
									td#center PGAmin 4
									td
										img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
								tr
									td#center PhPMyAdmin
									td
										img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
								tr
									td#center SQLite Studio
									td
										img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")

					v-card(elevation="0")
						v-card-title
							p Plateformes / Frameworks
						v-card-text
							table
								tr
									th(width="1%") 
									th(width="1%") 
								tr
									td#center Flask
									td 
										img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
								tr
									td#center Vue.JS
									td
										img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")
								tr
									td#center .NET
									td
										img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")

					v-card(elevation="0")
						v-card-title
							p Bases de données
						v-card-text
							table
								tr
									th(width="1%") 
									th(width="1%") 
								tr
									td#center PostgreSQL
									td 
										img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
								tr
									td#center MySQL
									td
										img(src="https://zupimages.net/up/22/16/yj9j.png" alt="3" width="100")
								tr
									td#center SQLite
									td
										img(src="https://zupimages.net/up/22/16/mfp5.png" alt="2" width="100")

					v-card(elevation="0")
						v-card-title
							p Autre
						v-card-text
							table
								tr
									th(width="1%") 
									th(width="1%") 
								tr
									td#center GitHub
									td 
										img(src="https://zupimages.net/up/22/16/9dl1.png" alt="2.5" width="100")
								tr
									td#center Docker
									td
										img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
								tr
									td#center Kubernetes
									td
										img(src="https://zupimages.net/up/22/16/nubq.png" alt="1" width="100")
								tr
									td#center Packoffice
									td
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

.v-list
  background: #40444b !important
  color: #ffffff

#ecartcategorie
  background: transparent !important
  height: 10vh

</style>