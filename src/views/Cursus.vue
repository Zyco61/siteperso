<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
			v-app-bar-title
				a Accueil
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
						a A3Multimedia | 49300 Cholet | Maine-et-Loire
					v-card-text
						div
							b
								u 17 Décembre 2018 - 21 Décembre 2018
						p Stage d'observation de 3e, qui m'a permis de confirmer ma voie professionnelle
						p Suivi d'un développeur et étude d'un site web créer par l'entreprise (recherche de bugs, failles etc)
						p Etude de WinDev, logiciel de développement, puis mise en relation avec une base de donnée
					v-card-actions
						v-btn(@click="redirect('https://www.a3multimedia.com/')")
							a Voir le site


				v-card(width="80%")
					v-card-title
						a Lycée Alain | 61000 Alençon | Orne
					v-card-text
						div
							b
								u Septembre 2019 - Juillet 2022
						p 2nd générale option science de l'ingénieur
						p 1er générale spécialité mathématiques, littérature anglaise (LLCER), et numérique et science de l'informatique (NSI)
						p Terminale générale spécialité littérature anglaise (LLCER), et numérique et science de l'informatique (NSI)
					v-card-actions
						v-btn(@click="redirect('https://lyceealainalencon.fr/')")
							a Voir le site
				
				v-card(width="80%")
					v-card-title
						a Lycée Alain | 61000 Alençon | Orne

					v-card-text
						div
							b
								u 9 Juin 2022
						p Participation à la nuit du c0de, concours inernational de développement en groupe avec la classe de NSI.
					v-card-actions
						v-btn(@click="redirect('https://www.nuitducode.net/presentation')")
							a Voir la présentation


				v-card(width="80%")
					v-card-title
						a EF Formation | STJ St. Julian's | Malte
					v-card-text
						div
							b
								u 10 Juillet 2022 - 25 Aout 2022
						p Séjour à Malte avec EF Formation avec d'autres étrangers pour améliorer mon niveau d'anglais
					v-card-actions
						v-btn(@click="redirect('https://www.maltadvice.com/fr/ef-malte/')")
							a Voir le site

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
</style>