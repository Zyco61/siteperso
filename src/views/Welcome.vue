<template lang="pug">
div(v-if="loading")
  v-layout
    v-app-bar.navbarcolor(absolute style='overflow: visible')
      v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer')
      v-avatar
        v-img(:src="getguildicon()")
      b {{getguildname()}}
      .dropdown.right
        v-btn.dropbtn(@click="dropdown()" elevation="5") {{ getitem("username") }}
          v-avatar
            v-img(:src="getimage()")
        #myDropdown.dropdown-content
          div
            a Profile
            a(@click="logout()") Log Out
    v-navigation-drawer(v-model='drawer' absolute temporary)
      v-list(nav dense)
        div(v-for="item in redirectitems")
          v-list-item(:prepend-icon='item.icon' :title='item.title' @click="redirectnavbar(item)")
    v-main
      v-card#bg.mx-auto.overflow-hidden(height='100vh' width="0vw")
    div#cards
      v-card#ecartcategorie(elevation="0")
      v-card#ecartcategorie(elevation="0")
      div(style="marginRight: 1vw")
        v-card(color="#40444b" width="80vw")
          h3 Welcome Settings
          v-switch#switchwelcome(v-model="btnwelcome" label="Activate ?" @click="clickswitchwelcome()")
          h4 Message channel
          select#channelwelcome(:disabled="!btnwelcome" :value="getguilditem('idwelcome')" @click="clickselectwelcome()")
            option(v-for="item in guildchannels" :value = "item.id") {{item.name}}
          h4 Welcome message
          input#inputwelcome(:disabled="inputlockwelcome" :value="getguilditem('msgwelcome')" required minlength="8" maxlength="1000")
          v-btn#v-btn(@click="updatewelcome()") Update

        v-card#ecartcategorie(elecation="0")

        v-card(color="#40444b" width="80vw")
          h3 Goodbye Settings
          v-switch(v-model="btngoodbye" label="Activate ?" @click="clickswitchgoodbye()")
          h4 Message channel
          select#channelgoodbye(:disabled="!btngoodbye" :value="getguilditem('idgoodbye')" @click="clickselectgoodbye()")
            option(v-for="item in guildchannels" :value = "item.id") {{item.name}}
          h4 Goodbye message
          input#inputgoodbye(:disabled="inputlockgoodbye" :value="getguilditem('msggoodbye')" maxlength="1000" minlength="20")
          v-btn#v-btn(@click="updategoodbye()") Update
    div#divalert
      div(v-if="alert")
        alertVue(:type="alerttype" :text="alerttext")
</template>
<script>
import alertVue from '../components/alert.vue';
const axios = require("axios").default
export default {
  components: {alertVue},
  data: () => ({
    loading: false,
    drawer:true,
    dataguild: null,
    btnwelcome: false,
    inputlockwelcome: true,
    btngoodbye: false,
    alert: false,
    alerttext: null,
    alerttype: null,
    inputlockgoodbye: true,
    guildchannels: null,
    api_endpoint: process.env.VUE_APP_API_ENDPOINT,
    redirectitems: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', path: ""},
      {title: 'Levels', icon: 'mdi-image', path: "/levels"},
      {title: 'Welcome', icon: 'mdi-help-box', path: "/welcome"},
      {title: 'Moderation', icon: 'mdi-discord', path: "/moderation"}
    ],
  }),
  created () {
    axios({
      method: "POST",
      url: `${this.api_endpoint}/guilds`,
      data: {"guild_id":this.getguildid()}
    })
    .then(({data}) => {
      this.dataguild = data
      axios({
        method: "GET",
        url: `${this.api_endpoint}/discord?id=${this.getguildid()}`
      })
      .then(({data}) => {
        data = data.filter(elem => elem.type == 0)
        this.guildchannels = data
        if(this.dataguild.welcome == 1){
          this.btnwelcome = true
          if(this.dataguild.msgwelcome.length > 0){
            this.inputlockwelcome = false
          }else{
            this.inputlockwelcome = true
          }
        }
        if(this.dataguild.goodbye == 1){
          this.btngoodbye = true
          if(this.dataguild.msggoodbye.length > 0){
            this.inputlockgoodbye = false
          }else{
            this.inputlockgoodbye = true
          }
        }
        this.loading = true
      })
    })
  },
  methods:{
    dropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    getguildname: () => {
      return sessionStorage.getItem("nameguild")
    },
    getitem: (item) => {
      return sessionStorage.getItem(item)
    },
    getguilditem(item){
      return this.dataguild[item]
    },
    getimage: () => {
      if(sessionStorage.getItem("avatar") != "null"){
        return "https://cdn.discordapp.com/avatars/"+sessionStorage.getItem('id') + "/"+sessionStorage.getItem('avatar') + ".png"
      }else{
        return 'https://i.ibb.co/C5bm002/test.png'
      }
    },
    redirectnavbar: (item) => {
      let a = window.location.href.split("/")
      a.pop()
      window.location.href = a.join("/") + item.path
    },
    logout:() => {
      sessionStorage.clear()
      window.location.href = "/"
    },
    clickdrawer () {
      const elem = document.getElementById("cards")
      if(elem.style.marginRight === "8vw"){
        elem.style.marginRight = "0vw";
        this.drawer = !this.drawer
      }else{
        elem.style.marginRight = "8vw";
        this.drawer = !this.drawer
      }
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
    clickselectwelcome(){
      if(document.getElementById("channelwelcome").value.length === 18){
        this.dataguild.idwelcome = document.getElementById("channelwelcome").value
        this.inputlockwelcome = false
      }else{
        this.inputlockwelcome = true
      }
    },
    clickswitchwelcome(){
      if(this.btnwelcome == true){
        this.inputlockwelcome = true
      }else{
        this.clickselectwelcome()
      }
    },
    clickselectgoodbye(){
      if(document.getElementById("channelgoodbye").value.length === 18){
        this.dataguild.idgoodbye = document.getElementById("channelgoodbye").value
        this.inputlockgoodbye = false
      }else{
        this.inputlockgoodbye = true
      }
    },
    clickswitchgoodbye(){
      if(this.btngoodbye == true){
        this.inputlockgoodbye = true
      }else{
        this.clickselectgoodbye()
      }
    },
    updatewelcome () {
      let input = document.getElementById("inputwelcome").value
      if(input.length < 8 && this.btnwelcome && document.getElementById("channelwelcome").value.length > 0){
        return this.sendalert("You must put a welcome message of at least 8 characters", "error")
      }
        axios({
          method: "PATCH",
          url: `${this.api_endpoint}/guilds`,
          data: {"column": {"welcome": this.btnwelcome ? 1:0, "idwelcome": document.getElementById("channelwelcome").value.length > 0 ? document.getElementById("channelwelcome").value: "null", "msgwelcome":input}, "guild_id": this.getguildid()}
        })
        this.sendalert("Welcome information has been updated", "success")
        this.dataguild.msgwelcome = input
    },
    updategoodbye () {
      let input = document.getElementById("inputgoodbye").value
      if(input.length < 8 && this.btngoodbye && document.getElementById("channelgoodbye").value.length > 0){
        return this.sendalert("You must put a goodbye message of at least 8 characters", "error")
      }
        axios({
          method: "PATCH",
          url: `${this.api_endpoint}/guilds`,
          data: {"column": {"goodbye": this.btngoodbye ? 1:0, "idgoodbye": document.getElementById("channelgoodbye").value.length > 0 ? document.getElementById("channelgoodbye").value:"null", "msggoodbye":input}, "guild_id": this.getguildid()}
        })
        this.sendalert("Goodbye information has been updated", "success")
        this.dataguild.msggoodbye  = input
    },
    getguildicon() {
      return 'https://cdn.discordapp.com/icons/' + this.getguildid() + "/" + sessionStorage.getItem("iconguild") + ".webp"
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
.navbarcolor
  background: #40444b !important
  color:#d8d9da
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
  position: fixed
  right: 0
  margin-left: auto
  margin-right: 0
  z-index: 1

#right
  text-align: right

.v-navigation-drawer
  background: #40444b
  color:#d8d9da

#btnlvluser
  background: transparent !important
  color: #ff0000
  border-color: red
  border-width: thin

#ecartcategorie
  background: transparent !important
  height: 10vh

input, select
  background: #b9bbbe
  border-radius: 10px
  text-align: center
  border: solid rgba(54, 57, 63, 1)
  word-break: break-word
  width: 80vw

input
  height: 10vh

select
  cursor: pointer

input[disabled], select[disabled]
  cursor: not-allowed  

h3, h4
  text-align: center

#cotecote
  display: flex
  align-items: center

small
  color: red

#divalert
  position: fixed
  bottom: 0
  right: 0

.bg-success
  background-color: green

.bg-error
  background-color: red

.v-card .v-btn
  margin-top: 1vw
  width: 100%
  background-color: rgb(64, 68, 75)
</style>