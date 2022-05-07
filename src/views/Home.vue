<template lang="pug">
div
	v-layout
		v-app-bar(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
			v-app-bar-title
				a Accueil
		v-navigation-drawer#navigationdrawer(v-model='drawer' absolute permanent)
			v-list(nav dense style="background-color: #fafafa")
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#main
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			div(style="width: 90vw;")
				v-card(width="80%")
					v-card-text
						b
							br
							br
							p Bonjour, et bienvenue sur ma page personnelle.
							br
							p Je m'appelle Romain, alias Zyco si vous me cherchez sur les réseaux sociaux.
							br
							p Passionné par le développement informatique depuis mes 12 ans, je recherche aujourd'hui une alternance à Bac+2 ou 3 pour évoluer dans le développement logiciel.
							br
							p Et puisque juste après le bac, mon futur employeur se posera naturellement la question de ma valeur ajoutée pour son entreprise, ce mini site sans prétention a vocation à répondre au maximum des questions qu'il peut se poser.
							br
							li Que sais-je déjà faire?
							li Quel est mon projet professionnel, quelles sont mes motivations?
							li Une alternance, oui, mais ou et quand, dans quelles conditions?
							li Et bien sur, pourquoi me choisir moi plutôt qu'un autre?
							br
							p Professionnel, recruteur, ou simple curieux, je vous souhaite donc une bonne navigation, en espérant que vous trouverez ici de quoi satisfaire toutes vos interrogations.
							br
							p Convaincu ? Faites circuler et n'hésitez pas à me contacter, pour un RdV, une question, un encouragement, une recommandation ou un conseil.
							br
							p Toujours sceptique? Laissez-moi aussi, si vous le souhaitez, un commentaire !
							br
							p Et rendez-vous dans 10 ans!
							br

</template>

<script>

export default {
	name: "Home",
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

.v-list
  background: #40444b !important
  color: #ffffff

.v-app-bar-nav-icon
  background: #36393f !important

#ecartcategorie
  background: transparent !important
  height: 10vh

.v-app-bar-nav-icon
  background: #d9d8da !important
</style>