<template lang="pug">
div
	v-layout
		v-app-bar#color(absolute style='overflow: visible')
			v-app-bar-nav-icon.navbarcolor(@click='clickdrawer()')
			v-app-bar-title
				a Contact
		v-navigation-drawer#color.overflow-(v-model='drawer' absolute permanent)
			v-list(nav dense)
				div(v-for="item in redirectitems")
					v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item.path)")
		v-main
			v-card.mx-auto.overflow-hidden(height='100vh')
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
				v-card#ecartcategorie
				v-card(style="width: 70vw")
					v-card-title
						p Me contacter
					v-card-text
						p Les informations en rouge sont obligatoires.
						br
						v-text-field.labelcolor#name(label="Nom/Prénom *")
						p
							b Coordonnées
						v-text-field.labelcolor#email(label="Email *")
						v-text-field#phone(label="Téléphone")
						v-text-field#site(label="Site web")
						p 
							b Message
						v-text-field.labelcolor#message(label="Message *")
						v-btn(@click="checkField()") Envoyer mon contact
						v-btn(@click="test('success')") Test
				div#alert
					
</template>
<script>
const axios = require("axios").default;
import alertVue from '../components/alert.vue';

export default {
	name: "Contact",
	components: {
		alertVue
	},
	data: () => ({
		width: 300,
		drawer: true,
		webhook_id: process.env.VUE_APP_WEBHOOK_ID,
		webhook_token: process.env.VUE_APP_WEBHOOK_TOKEN,
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
		checkField(){
			if(!document.getElementById('name').value.length > 0){
				console.log("nom non enrengistré")
				return false
			}
			if(!document.getElementById('email').value.length > 0){
				console.log("email non enrengistré")
				return false
			}
			if (!document.getElementById('message').value.length > 0) {
				console.log("message non enrengistré")
				return false
			}
			this.sendContact()
		},
		getFieldInformationById(id) {
			return document.getElementById(id).value
		},
		sendContact() {
			axios({
				method: 'post',
				url: `https://discordapp.com/api/v9/webhooks/${this.webhook_id}/${this.webhook_token}`,
				data: {
					"content":"@everyone",
					"username":this.getFieldInformationById('name'),
					"embeds": [{
						"title": "Nouveau contact",
						"description": "Contact spontané via le site web",
						"fields":[
							{
								"name":"Coordonnées",
								"value":"_ _",
								"inline":false
							},
							{
								"name":"téléphone",
								"value":this.getFieldInformationById('phone'),
								"inline":true
							},
							{
								"name":"mail",
								"value":this.getFieldInformationById('email'),
								"inline":true
							},
							{
								"name":"site web",
								"value":this.getFieldInformationById('site'),
								"inline":true
							},
							{
								"name":"Message",
								"value":this.getFieldInformationById('message'),
								"inline":false
							},
						]
					}]
				}
			})
		},
		test(type) {
			const div = document.getElementById('alert')
			const elem = document.createElement('div')
			if(type === "success"){
				elem.classList.add("v-alert","v-theme--light","bg-success","v-alert--density-default","v-alert--variant-contained-flat")
			}else{
				elem.classList.add("v-alert","v-theme--light","bg-error","v-alert--density-default","v-alert--variant-contained-flat")
			}
			const elem2 = document.createElement('div')
			elem2.classList.add("v-alert__underlay")
			elem.appendChild(elem2)
			const elem3 = document.createElement('div')
			elem3.classList.add("v-alert__prepend")
			const elem31 = document.createElement('i')
			if(type === "success"){
				elem31.classList.add("mdi-check-circle", "mdi", "v-icon", "notranslate", "v-icon--size-default", "v-theme--light")
			}else{
				elem31.classList.add("mdi-close-circle", "mdi", "v-icon", "notranslate", "v-icon--size-default", "v-theme--light")
			}
			elem3.appendChild(elem31)
			elem.appendChild(elem3)
			const elem4 = document.createElement('div')
			elem4.innerHTML = "Votre message a bien été envoyé"
			elem.appendChild(elem4)
			div.appendChild(elem)
			setTimeout(() => {
				div.removeChild(elem)
			}, 5000)
		}
	}
}


</script>
<style lang="sass">
.v-app-bar
  background: #41454b !important
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



img
  cursor: pointer

#displayicons
  display: grid
  grid-template-columns: repeat(12, auto)
  grid-gap: 10px

#white
  color: #FFFFFF

#link
  color: #000000

td
  text-align: center

.labelcolor .v-label
  color: red
  opacity: 1

#alert
  position: fixed
  bottom: 0
  right: 0

</style>