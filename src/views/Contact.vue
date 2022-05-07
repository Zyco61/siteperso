<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor(@click='clickdrawer()')
			v-app-bar-title
				a Contact
		v-navigation-drawer#color.overflow-(v-model='drawer' absolute temporary)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#main
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			div(style="width: 90vw")
				v-card(style="width: 70vw")
					v-card-title
						a Me contacter
					v-card-text
						p  Un entretien, une recommandation, un encouragement, ou juste un commentaire ou une question ?
						p N'hésitez pas à me contacter !
						br
						div
							//- div(v-if="image.mail")
							//- 	v-avatar(size="30px")
							//- v-img(src="../assets/images/linkedin.png" alt="EMail")
							a(href="mailto:murierromain@gmail.com" target="_blank")  murierromain@gmail.com
							br
						div
							//- v-avatar(size="30px")
							//- 	img(:src="images.phone" alt="N° Téléphone")
							a(href="tel:0768491795")  +33 7 68 49 17 95
							br
						div
							//- v-avatar(size="30px")
							//- 	img(:src="images.linkedin" alt="Linkedin" size="30vw")
							a(href="https://www.linkedin.com/in/romain-murier/" target="_blank")  https://www.linkedin.com/in/romain-murier/
							br
					
</template>
<script>
export default {
	name: "Contact",
	data: () => ({
		width: 300,
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
</style>