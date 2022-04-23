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
						a Mes réseaux
					v-card-text
						p Linkedin
						p Github
						p Discord
					v-card-actions
						div#displayicons
							v-avatar(size="100")
								img(src="https://imgs.search.brave.com/CoYT18C6T7gkTR9LIqyVp1ZMz1MGCaE9ELYRym7feDA/rs:fit:760:750:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvbGlua2Vk/aW4tbG9nby1mb3It/ZW1haWwtc2lnbmF0/dXJlLTIuanBn" @click="redirect('https://www.linkedin.com/in/romain-murier/')" alt ="linkedin | Romain Murier")
							a Linkedin
							v-avatar(size="100")
								img(src="https://imgs.search.brave.com/ikcrhKQN5Ni60H22fPzkPeFZsD0oUqDTRZdQputksE8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL2dp/dGh1Yl9QTkc0MC5w/bmc" @click="redirect('https://github.com/Zyco61')" alt="Github | Zyco61")
							a Github
							v-avatar(size="100")
								img(src="https://imgs.search.brave.com/MUlwrtRPsY6F8ITJ8QvcENWimKGivG-tWhAdl4Lb2ps/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL2Rpc2NvcmQt/bG9nby00LTEucG5n" @click="redirect('https://github.com/Zyco61')" alt="Discord | Zyco#8210")
							a Discord
</template>
<script>

export default {
	name: "Cursus",
	data: () => ({
		drawer: true,
		redirectitems: [
			{title: 'Accueil', icon: 'mdi-home', path: "/"},
			{title: 'A propos', icon: 'mdi-information', path: "/about"},
			{title: 'Projets', icon: 'mdi-projector-screen', path: "/projects"},
			{title: 'Cursus', icon: 'mdi-certificate', path: "/cursus"},
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

img
  cursor: pointer

#displayicons
  display: grid
  grid-template-columns: repeat(6, auto)
  grid-gap: 10px
</style>