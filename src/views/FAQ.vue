<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
			v-app-bar-title
				a F.A.Q Alternance
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
						a F.A.Q Alternance
					v-card(elevation="0")
						v-card-title 
							a Il est loin de chez nous, Romain…
						v-card-text
							p Vous avez des missions intéressantes à me proposer ?
							br
							p On peut trouver un foyer, une chambre, un studio, un igloo ou un canapé à louer à proximité ?
							p Une formation informatique en alternance accessible ?
							p Des transports publics, du covoiturage, une trottinette à pédale pour les trajets ?
							br
							p Alors où est le problème :)  ? Et mi-2023, promis, je serai véhiculé !
					v-card(elevation="0")
						v-card-title
							a Une alternance pour quelle formation ?
						v-card-text
							p J’ai postulé sur la France entière, suis admissible ou en cours d’admission dans de nombreux établissements, et avec une intention d’embauche, les portes des écoles s’ouvrent !
							p Formation à Bac+2 ou 3, le choix est vaste !
							br
							p Voici une liste non exhaustive des formations par département. J’ai des préférences, bien sûr, mais le mieux est d’en discuter, non ?
							br
							table
								tr
									th(width='25%')
									th(width='25%')
									th(width='25%')
									th(width='50%')
								tr(v-for='item in schools')
									td {{ item.department }}
									td(:href='item.url') {{ item.name }}
									td {{ item.qualification }}
									td {{ item.status }}
					v-card(elevation="0")
						v-card-title
							p Embaucher Romain, combien ça me coute ?
						v-card-text
							p Pour un contrat signé 
								a 
									u  avant fin Juin 2022
								a , à partir de 358 € en moyenne par mois sur 2 ans, charges sociales comprises.
							p (Salaires en apprentissage – aides exceptionnelles à l’embauche, lissés sur 24 mois)
							br
							p Pour une présence en entreprise de 50 à 75% du temps selon les écoles.
							br
							p Un collaborateur à ce prix, ça se tente, non ?
							br
							p
								u Pour en savoir + :
							br
							p
								a(href="https://entreprendre.service-public.fr/vosdroits/F23556") Aides à l’embauche d’un alternant
							br
							p 
								a(href="https://www.service-public.fr/particuliers/actualites/A15108") Rémunération des alternants
							br
							p 
								a(href="https://www.alternance.emploi.gouv.fr/simulateur-employeur/etape-1") Simulateur de cout d'un alternant
							p (Ma date de naissance : le 22/10/2004)
							br

					v-card(elevation="0")
						v-card-title
							a On peut commencer quand ?
						v-card-text
							p En Juillet/Aout 2022, je suis en immersion Anglais à Malte.
							br
							p Mais dès début Septembre, je suis libre comme l’air ! Et si ça vous arrange, un contrat peut également débuter plus tard, sur Octobre ou Novembre 2022.
							br

					v-card(elevation="0")
						v-card-title
							a Quel est le rythme de l’alternance ?
						v-card-text
							p Il dépend des formations et des écoles. Le plus souvent, il est de 50 à 75% du temps en entreprise, sur un rythme hebdomadaire.
							br

					v-card(elevation="0")
						v-card-title
								a Contrat de professionnalisation ou d’apprentissage, quelle différence ?
						v-card-text
							p En termes d’organisation de la formation en alternance, rien !
							br
							p En termes de rémunération, de statut,… quelques différences existent, surtout pour l’employeur.
							br
							p La plupart des établissements d’alternance proposent les 2 formules.
							br
							p 
								a(href="https://www.service-public.fr/particuliers/vosdroits/F31704") Pour en savoir plus
							br

					v-card(elevation="0")
						v-card-title
								a Embaucher en alternance, c’est compliqué ?
						v-card-text
							a Et non, c’est tout simple : Un formulaire d’embauche, une convention avec l’école, et un contact avec votre Opco. Vous êtes accompagné, vos interlocuteurs s’occupent de presque tout !
							br

					v-card(elevation="0")
						v-card-title
							a J'ai encore des questions ?
						v-card-text
							a Consultez ma page contact ! Si je n'ai pas la réponse actuellement, je la trouverai !

</template>
<script>
import axios from 'axios'


export default {
	name: "FAQ",
	data: () => ({
		drawer: true,
		api_endpoint: process.env.VUE_APP_API_ENDPOINT,
		schools: {},
		redirectitems: [
			{title: 'Accueil', icon: 'mdi-home', path: "/"},
			{title: 'Mes compétences', icon: 'mdi-information', path: "/competences"},
			{title: 'Mes réalisations', icon: 'mdi-projector-screen', path: "/realisations"},
			{title: 'Mon parcours', icon: 'mdi-certificate', path: "/cursus"},
			{title: 'F.A.Q Alternance', icon: 'mdi-help', path: "/faq"},
			{title: 'Contact', icon: 'mdi-forum', path: "/contact"}

		],
	}),
	created(){
		axios.get(`${this.api_endpoint}/schools/getschools`)
		.then(response => {
			this.schools = response.data
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
		}
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