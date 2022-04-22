<template lang="pug">
div(v-if="this.load")
  v-layout
    v-app-bar.navbarcolor(absolute style='overflow: visible')
      v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
      div(v-if="checkicon()")
        v-avatar
            v-img(:src="getguildicon()")
      b {{getguildname()}}
        
      .dropdown.right
        v-btn.dropbtn(@click="dropdown()" elevation="5") {{ getitem("username") }}
          v-avatar
            v-img(:src="getimage()")
        #myDropdown.dropdown-content
          div
            a(@click="gotoprofile()") Profile
            a(@click="logout()") Log Out
    v-navigation-drawer(v-model='drawer' absolute temporary)
      v-list(nav dense)
        div(v-for="item in redirectitems")
          v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item)")
    v-main
      v-card(height='100vh' width="0vw")
    div#cards
      v-card#ecartcategorie(elevation="0")
      v-card#ecartcategorie(elevation="0")

      v-card.overflow-visible(width="50vw" color="#40444b")
        div
          h3 prefix
          input#prefixinput(:value="getguilditem('prefix')" maxlength="5")
          v-btn#inputbtn(@click="updateprefix()" color="#40444b") Update

      v-card#ecartcategorie(elevation="0")

      v-card.overflow-visible(width="50vw" color="#40444b")
        h3 Language
        select#languageinput(:value="getguilditem('language')")
          option(value = "0") English
          option(value = "1") Français
          option(value = "2") Español
        v-btn#inputbtn(@click="updatelanguage()" color="#40444b") Update
    div#divalert
      div(v-if="alert")
        alertVue(:type="alerttype" :text="alerttext")

</template>
<script>
const axios = require("axios").default;
import alertVue from '../components/alert.vue';
export default {
  components: {alertVue},
  data: () => ({
    drawer:true,
    group:null,
    user:false,
    counter: true,
    groupuser:null,
    data: null,
    load: false,
    alert: false,
    alerttext: null,
    alerttype: null,
    api_endpoint: process.env.VUE_APP_API_ENDPOINT,
    redirectitems: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', path: ""},
      {title: 'Levels', icon: 'mdi-image', path: "/levels"},
      {title: 'Welcome', icon: 'mdi-help-box', path: "/welcome"},
      {title: 'Moderation', icon: 'mdi-discord', path: "/moderation"}
    ],
  }),
  created() {
    var guildid
    window.location.href.split("/").forEach(elem => {
      if(!isNaN(elem)){
        guildid = elem
      }
    })
    axios({
      method: "POST",
      url: `${this.api_endpoint}/guilds`,
      data: {"guild_id":guildid},
    })
    .then(({ data }) => {
      if(data != "Fail"){
        this.data = data
        this.load = true
      }else{
        console.log("script inviter bot ici")
      }
      })
  },
  methods:{
    clickdrawer () {
      const elem = document.getElementById("cards")
      if(elem.style.marginRight == "25vw"){
        elem.style.marginRight = "15vw";
      }else{
        elem.style.marginRight = "25vw";
      }
      this.drawer = !this.drawer
    },
    updateprefix () {
      axios({
        method: "PATCH",
        url: `${this.api_endpoint}/guilds`,
        data: {"guild_id":this.getguildid(), "value": document.getElementById("prefixinput").value, "column":"prefix"},
        })
        .then(({ data }) => {
            let newdata = this.data
            newdata.prefix = document.getElementById("prefixinput").value
            this.data = newdata
            this.sendalert("The prefix has been changed successfully", "success")
            })
        .catch((error) => {
            console.log(error);
        });
    },
    updatelanguage() {
      axios({
        method: "PATCH",
        url: `${this.api_endpoint}/guilds`,
        data: {"guild_id":this.getguildid(), "value": document.getElementById("languageinput").value, "column":"language"},
        })
        .then(({ data }) => {
            let newdata = this.data
            newdata.language = document.getElementById("languageinput").value
            console.log(newdata.language)
            this.data = newdata
            this.sendalert("The language has been changed successfully", "success")
            })
        .catch((error) => {
            console.log(error);
        });
    },
    getguildname: () => {
      return sessionStorage.getItem("nameguild")
    },
    checkicon() {
      return sessionStorage.getItem("iconguild") != "undefined" 
    },
    getguildicon() {
      return 'https://cdn.discordapp.com/icons/' + sessionStorage.getItem("idguild") + "/" + sessionStorage.getItem("iconguild") + ".webp"
    },
    getguilditem (item) {
      return this.data[item]

    },
    dropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
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
    redirectnavbar: (item) => {
      window.location.href = window.location.href + item.path
    },
    getguildid() {
      var guildid
      const url = new URL(window.location.href)
      const newurl = url.pathname.split("/")
      newurl.forEach(function(elem){
        if(!isNaN(parseInt(elem))){
          guildid = elem
        }
        })
      return guildid
    },
    logout: () => {
      sessionStorage.clear()
      window.location.href = "/"
    },
    gotoprofile () {
      window.location.href = `/user/${sessionStorage.getItem("id")}`
    },
    sendalert(text, type) {
      this.alerttext = text
      this.alerttype = type
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 5000)
    },
  }, 
}
</script>

<style lang="sass">
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

.show
  display: block

.right
  margin-left: auto
  margin-right: 0
  display: "flex"

#ecartcategorie
  background: transparent !important
  height: 10vh

#cards
  margin-right: 15vw

input, select
  position: relative
  width: 100%
  background: #b9bbbe
  border-radius: 10px
  text-align: center
  border: solid rgba(54, 57, 63, 1)

.navbarcolor
  background: #40444b  !important
  color:#d8d9da

.v-navigation-drawer
  background: #40444b
  color:#d8d9da

.v-card .v-btn
  margin-top: 1vw
  width: 100%

h3
  text-align: center

#divalert
    position: fixed
    bottom: 0
    right: 0

.bg-success
  background-color: green

.bg-error
  background-color: red
</style>