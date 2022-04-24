<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
			v-app-bar-title
				a Mon parcours
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
						a 2018 | Initiation au développement
						v-btn(@click="redirect('https://www.nuitducode.net/presentation')" style="margin-left: 8vw;")
							a En savoir +
					v-card-text
						div
							b
								u A3Multimedia | Cholet | 17 Décembre 2018 - 21 Décembre 2018
						p Ce stage "d'observation" réalisé en 3ème m'a permis de confirmer ma voie professionnelle et de m'initier au développement.
						p J'ai notamment suivi un développeur web, étudié un site web créé par l'entreprise (recherche de bugs, failles, etc.), et
							a  me suis initié au logiciel de développement WinDev, en relation avec une base de données.
						p Une première expérience pratique qui a définitivement confirmé ma vocation !
						br

				v-card(width="80%")
					v-card-title
						a Bac général spécialité Numérique et Science de l'Informatique (NSI)
					v-card-text
						div
							b
								u Lycée Alain | Alençon | Septembre 2019 - Juillet 2022
						p Cursus scolaire (2nde à terminale).
						p Option science de l'ingénieur, spécialité NSI (Algorithmique, Python, SQL), complémentaires mathématiques et litérature anglaise.
						br
				
				v-card(width="80%")
					v-card-title
						a Concours d'informatique
						v-btn(@click="redirect('https://www.nuitducode.net/presentation')" style="margin-left: 14vw;")
							a En savoir +
					v-card-text
						div
							b
								u Lycée Alain | Alençon | 9 Juin 2022
						p Participation à la nuit du c0de, concours international de développement en groupe avec la classe de NSI.
						br

				v-card(width="80%")
					v-card-title
						a Immersion de 2 mois en anglais
						v-btn(@click="redirect('https://www.maltadvice.com/fr/ef-malte/')" style="margin-left: 9.5vw;")
							a Voir le site
					v-card-text
						div
							b
								u EF Formation | St. Julian's | Malte | 10 Juillet 2022 - 25 Aout 2022
						p 2 mois d'immersion à Malte avec l'école EF Formation.
						p Programme de cours intensif de 224h.
						p Echange culturel linguistique en environnement international.
						br

</template>
<script>

export default {
	name: "Cursus",
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

.v-app-bar-nav-icon
  background: #d9d8da !important
</style>