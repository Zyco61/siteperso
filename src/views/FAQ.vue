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
							li
								a(href="https://iut.univ-cotedazur.fr/departements-et-formations/informatique/bachelor-universitaire-de-technologie" target="_blank") 06 - I.U.T Nice - BUT Informatique 
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 13 - ESGI - Bachelor Architecture des logiciels (bac+3)
								b  - En cours d'admission
							li
								a(href="https://www.institut-g4.fr/" target="_blank") 13 - INSTITUT G4 - Concepteur développeur d'applications (titre professionnel bac+3)
								b  - En cours d'admission
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 13 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/" target="_blank") 29 - ENI - Développeur web et web mobile (titre bac+2)
								b  - Admissible
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 29 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 31 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 33 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/" target="_blank") 35 - ENI - Développeur web et web mobile (titre bac+2)
								b  - Admissible
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 38 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 44 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/" target="_blank") 44 - ENI - Développeur web et web mobile (titre bac+2)
								b  - Admissible
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 51 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 51 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 54 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 59 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 59 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 64 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.purple-campus.com/produit/analyste-developpeur-dapplications-informatiques" target="_blank") 66 -  Purple Campus - Analyste développeur d'applications informatiques (Bac +2)
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 69 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 69 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.imie-paris.fr/les-formations/bts-sio-bac-2/" target="_blank") 75 - IMIE - BTS SIO (Bac +2) 
								b - Admis
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 75 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://www.insta.fr/bts-informatique-sio/" target="_blank") 75 - INSTA - BTS SIO
							li
								a(href="https://imcp.fr/bts-services-informatiques-aux-organisations/" target="_blank") 75 - Institut du Marais - BTS SIO
							li
								a(href="https://www.utec77.fr/bts-services-informatiques-aux-organisations-sio-option-solutions-dinfrastructure-systemes-et-0" target="_blank") 75 - UTEC - BTS SIO
							li
								a(href="https://catalogue.cesi.fr/developpeur-informatique-2169022/" target="_blank") 76 - CESI - Développeur informatique (titre bac+2) 
								b - Admissible
							li
								a(href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/" target="_blank") 79 - ENI - Développeur web et web mobile (titre bac+2)
								b  - Admissible
							li
								a(href="https://www.esgi.fr/programmes/architecture-logiciels.html" target="_blank") 83 - ESGI - Bachelor Architecture des logiciels (bac+3)
							li
								a(href="https://www.iscio.net/formations-bts/services-informatiques-aux-organisations/" target="_blank") 91 - Institut d'Orsay - BTS SIO
							li
								a(href="https://www.h3hitema.fr/formation/bts-sio-option-slam/" target="_blank") 92 - Hitema - BTS SIO
							li
								a(href="http://www.ensemblesaintemarie.fr/bts-services-informatiques-aux-organisations/" target="_blank") 94 - LGT SAINTE MARIE - BTS SIO
							li
								a(href="https://www.efrei.fr/programmes-experts/bts-sio/" target="_blank") 94 - EFREI - BTS SIO 
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

export default {
	name: "FAQ",
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