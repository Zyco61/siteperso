<template lang="pug">
div(v-if="loaded")
	v-layout
		v-app-bar.navbarcolor(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer')
			v-avatar
				v-img(src="../assets/lastvoxeslogo.png")
			b LAST VOXES
		v-navigation-drawer#navdrow(v-model='drawer' absolute temporary)
			v-list(nav dense)
				v-list-item(prepend-icon='mdi-discord' title='Log out' @click="logout()")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh' width="0vw")
		div#cards(style="marginRight: 1vw")
			v-card#ecartcategorie(elevation="0")
			v-card#ecartcategorie(elevation="0")
			v-card(color="#40444b")
				h1 {{id}}
				h1 {{avatar}}
				h1 {{name}} # {{discriminator}}
				h1 {{a2f}}

div(v-else)
	h1 IT'S NOT YOUR PAGE
</template>
<script>
const axios = require("axios").default;

export default {
	name: "Guilds",
	data:() => ({
			loaded: false,
			id: null,
			name: null,
			avatar: null,
			drawer: true,
			a2f: false,
			discriminator: null,
			api_endpoint: process.env.VUE_APP_API_ENDPOINT,
		}),
		beforeCreate () {
			var id
			window.location.href.split("/").forEach(elem => {
				if(!isNaN(elem)){
					id = elem
				}
		})
		axios({
			method: "GET",
			url: "https://discordapp.com/api/users/@me",
			headers: {'Authorization':'Bearer '+sessionStorage.getItem("access_token")}
			})
			.then(({ data }) => {
				this.id = data.id
				this.name = data.username
				this.avatar = data.avatar
				this.a2f = data.mfa_enabled
				this.discriminator = data.discriminator
				this.loaded = (id === data.id)
				})
	},
	methods: {
		clickdrawer () {
			const elem = document.getElementById("cards")
			if(elem.style.marginRight === "8vw"){
				elem.style.marginRight = "1vw";
				this.drawer = !this.drawer
			}else{
				elem.style.marginRight = "8vw";
				this.drawer = !this.drawer
			}
		},
		getitem: (item) => {
			return sessionStorage.getItem(item)
		},
		getimage: () => {
			if(sessionStorage.getItem("avatar") != "null"){
				return "https://cdn.discordapp.com/avatars/"+sessionStorage.getItem('id') + "/"+sessionStorage.getItem('avatar') + ".png"
			}else{
				return 'https://i.ibb.co/C5bm002/test.png'
			}
		},
		dropdown() {
			document.getElementById("myDropdown").classList.toggle("show");
		},
		logout () {
			sessionStorage.clear()
			window.location.href = "/"
		}
	}
}
</script>
<style lang="sass" scoped>
.right
	position: fixed
	right: 0
	margin-left: auto
	margin-right: 0
	z-index: 1

.dropbtn
	background-color: #40444b
	color: white
	padding: 16px
	font-size: 16px
	border: none
	cursor: pointer

.dropdown
	position: relative
	display: inline-block

.dropdown-content
	display: none
	position: absolute
	background-color: #40444b
	min-width: 160px
	overflow: auto
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)
	z-index: 1

.dropdown-content a 
	color: black
	padding: 12px 16px
	text-decoration: none
	display: block

.dropdown a:hover
	background-color: #ddd

.navbarcolor
	background: #40444b  !important
	color:#d8d9da

.v-navigation-drawer
	background: #40444b
	color:#d8d9da

.show
	display: block

#ecartcategorie
	background: transparent !important
	height: 10vh

.v-card
	width: 80vw
</style>