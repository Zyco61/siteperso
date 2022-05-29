<template lang="pug">
div
    div(v-if='!connected')
        v-card(width="50vw" style="margin-left: 25vw; margin-top: 5vh;")
            v-card-title
                h1 Se connecter
            v-card-text
                h2 Connexion pour Administrateur
                br
                v-text-field#username(label="Nom d'utilisateur" maxlength="25" :counter="25")
                v-text-field#password(label="Mot de passe" type="password")
                v-btn(@click="loggin()") Connexion
    div(v-if="connected")
        h1 connecté
div#alert
</template>
<script>
const axios = require("axios").default;

import alertVue from '../components/alert.vue';

export default {
	name: "Admin",
    components:{
        alertVue
    },
	data: () => ({
		api_endpoint: process.env.VUE_APP_API_ENDPOINT,
        connected: false,
	}),
	methods: {
		redirectnavbar: function(path) {
			this.$router.push(path)
		},
        loggin() {
            console.log(this.hash(this.getValue("password")), 3)
            axios.post(`http://127.0.0.1:1235/users/checkPassword`, {
                username: this.getValue("username"),
                password: this.hash(this.getValue("password"))
            })
            .then(response => {
                if(response.data.success) {
                    this.connected = true
                    this.sendAlert("success", "Connexion réussie")
                }
            })
            .catch(error => {
                if(error.response.status === 401) {
                    this.sendAlert("error", "Nom d'utilisateur ou mot de passe incorrect")
                }else{
                    this.sendAlert("error", error.response.data)
                }
            })
        },
        hash(string) {
            const utf8 = new TextEncoder().encode(string);
            let value;
            crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray
                    .map((bytes) => bytes.toString(16).padStart(2, '0'))
                    .join('');
                return hashHex;
            })
            .then((hash) => {
                value = hash;
                console.log(hash, 1)
                console.log(value, 2)
            })
            return value
        },
        getValue(item) {
            return document.getElementById(item).value
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

#alert
  position: fixed
  bottom: 0
  right: 0
</style>