<template lang="pug">
div
	v-layout
		v-app-bar(absolute style='overflow: visible')
			v-app-bar-nav-icon(@click='clickdrawer()')
			v-app-bar-title
				a Contact
		v-navigation-drawer.overflow-(v-model='drawer' absolute permanent)
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
						p Me contacter
					v-card-text
						p Un entretien, une recommandation, un encouragement, ou juste un commentaire ou une question ?
						p N'hésitez pas à me contacter !
						br
						p 
							i * Les informations en rouge sont obligatoires.
						table#right
							tr
								th(width="80%") 
								th(width="20%") 
							tr
								td
								td par mail
								td
									a(href="mailto:murierromain@gmail.com" target="_blank")  murierromain@gmail.com
							tr
								td
								td par téléphone
								td
									a(href="tel:0768491795")  +33 7 68 49 17 95
							tr
								td
								td par linkedin
								td
									a(href="https://www.linkedin.com/in/romain-murier/" target="_blank")  https://www.linkedin.com/in/romain-murier/
						br
						v-text-field.labelcolor#name(label="Nom/Prénom *" :rules="[rules.required]" maxlength="80" :counter="80")
						p
							b Coordonnées
						v-text-field.labelcolor#email(label="Email *" :rules="[rules.required, rules.emailconstraint]" maxlength="100" :counter="100")
						v-text-field#phone(label="Téléphone" :rules="[rules.phoneconstraint]" prefix="+33" @keyup="editPhoneValue()" maxlength="14")
						v-text-field#site(label="Site web" maxlength="100" :counter="100")
						p 
							b Message
						v-textarea.labelcolor#message(label="Message *" :rules="[rules.required]" maxlength="1024" :counter="1024")
						v-btn#sendbtn(@click="checkField()") Envoyer
						v-btn(@click="test()") test
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
		rules: {
          required: value => !!value || 'Requis.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          emailconstraint: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'E-mail invalide.'
          },
		  phoneconstraint: value => {
			  const pattern = /^\+?[0-9 ]{9,14}$/
			  return pattern.test(value) || 'Numéro de téléphone invalide.'
		  },
		},
		api_endpoint: process.env.VUE_APP_API_ENDPOINT,
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
				return this.sendAlert('error', 'Veuillez renseigner votre nom/prénom')
			}
			if(!document.getElementById('email').value.length > 0){
				return this.sendAlert('error', 'Veuillez renseigner votre email')
			}
			if (!document.getElementById('message').value.length > 0) {
				return this.sendAlert('error', 'Veuillez renseigner votre message')
			}
			this.sendContact()
		},
		getFieldInformationById(id) {
			return document.getElementById(id).value
		},
		sendContact() {
			const data = {
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
							"name":"Email",
							"value":this.getFieldInformationById('email'),
							"inline":true
						}
					]
				}]
			}
			if(this.getFieldInformationById('phone').length > 0){
				data.embeds[0].fields.push({
							"name":"téléphone",
							"value":`${this.getFieldInformationById('phone').replace(/ /g, "").length !== 10 ? '+33 ':''}${this.getFieldInformationById('phone')}`,
							"inline":true
				})
			}
			if(this.getFieldInformationById('site').length > 0){
				data.embeds[0].fields.push({
							"name":"site web",
							"value":this.getFieldInformationById('site'),
							"inline":true
				})
			}
			data.embeds[0].fields.push({
							"name":"message",
							"value":this.getFieldInformationById('message'),
							"inline":false
			})
			axios({
				method: 'post',
				url: `${this.api_endpoint}/webhook/sendcontact`,
				data: data
			})
			.then(response => {
				this.sendAlert('success', 'Votre message a bien été envoyé')
			})
			.catch(error => {
				this.sendAlert("error", `Une erreur est survenue, veuillez me contacter par un autre moyen. Erreur ${error.response.status}.`)
			})
		},
		sendAlert(type, text) {
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
			elem4.innerHTML = text
			elem.appendChild(elem4)
			div.appendChild(elem)
			setTimeout(() => {
				div.removeChild(elem)
			}, 5000)
		},
		editPhoneValue() {
			const phone = document.getElementById('phone')
			phone.value = phone.value.replace(/ /g, "").replace(/(\d)(?=(\d{2})+$)/g, '$1 ');
		},
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

#right
  text-align: right

#sendbtn
  color: #FFFFFF
  background-color: #ba1919

.v-card
  background-color: #41454b
  color: #FFFFFF

.v-card-text
  color: #FFFFFF

a
  color: #FFFFFF

.v-text-field__prefix
  color: #FFFFFF
</style>