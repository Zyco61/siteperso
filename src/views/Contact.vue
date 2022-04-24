<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
			v-app-bar-title
				p Contact
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
							v-avatar(size="30px")
								img(src="https://imgs.search.brave.com/XZkHCWs9n0L_pR_kfek_snhmE5tIykxNW3vSbQEgvKY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvZW1haWwt/bG9nby1wbmctMTku/cG5n" alt="logo mail")
							a(href="mailto:murierromain@gmail.com" target="_blank")  murierromain@gmail.com
							br
						div
							v-avatar(size="30px")
								img(src="https://imgs.search.brave.com/3Ymda-4jE_Nk4zePf95JVSOsa2s5p_opYtaD72Cx7mE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/S2luL285Ry9LaW5v/OUd6WFQucG5n" alt="logo de téléphone")
							a  +33 7 68 49 17 95
							br
						div
							v-avatar(size="30px")
								img(src="https://imgs.search.brave.com/NTA6oV__EoeoNhhVAVYRKtAVRLt5okQVHjCSvs7FV4s/rs:fit:840:859:1/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9s/aW5rZWRpbi1jb2xv/ci1pY29uLWxpbmtl/ZGluLWxvZ28tcm91/bmQtMTE1NjI5MjA3/MzJxY3R2eGtyZGNk/LnBuZw" alt="logo linkedin")
							a(href="https://www.linkedin.com/in/romain-murier/" target="_blank")  https://www.linkedin.com/in/romain-murier/

					
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
		document.getElementById("main").style.marginLeft = "20vw";
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

#displayicons
  display: grid
  grid-template-columns: repeat(12, auto)
  grid-gap: 10px

  
</style>