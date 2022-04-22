<template lang="pug">
div(v-if="loading")
  v-layout
    v-app-bar.navbarcolor(absolute style='overflow: visible')
      v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer')
      v-avatar
        v-img(:src="getguildicon()")
      b {{getguildname()}}
      .dropdown.rightappbar
        v-btn.dropbtn(@click="dropdown()" elevation='5') {{ getitem("username") }}
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
      v-card#bg.mx-auto.overflow-hidden(height='100vh' width="0vw")
    div#cards  
      v-card#ecartcategorie(elevation="0")
      v-card#ecartcategorie(elevation="0")
      div(style="marginRight: 1vw")
        v-card(color="#40444b")
          h3 Globals Settings
          v-switch(label = "XP system" v-model="sysxp" @click="clicksysxp()" width="5vw")
          v-switch(label = "LevelUp message " v-model="sysmsg" @click="clicksysmsg()")
          v-switch(label = "LevelUp message into a specific channel" v-model="sysmsgchann" @click="clicksysmsgchann()")
          div(v-if="checkchannlvl()")
            small You must have set a channel to use this feature.
          v-btn(@click="updatesettings()") Update
        v-card#ecartcategorie(elevation="0")
        div#cotecote
          v-card#cardlvlupchannel(color="#40444b" width="40vw")
            div
              h3 Level Up Message Channel
              select#channellvlup(style="width: 40vw;" :value="getguilditem('idchann')")
                option(v-for="item in listchannel" :value = "item.id") {{item.name}}
              a Choose the channel on which the level up message will be sent
            v-btn(@click="updatechannellvlup()") Update
          v-card#cardlvlupmsg(color="#40444b" width="40vw")
            div
              h3 Message Level Up
              input#inputmsglvl(:value="getguilditem('msglvl')" style="width: 40vw; height: 10vh")
              a {username} => username
              a {user} => user.mention 
              a {user} => user.mention 
              a {serverName} => name of the server
              a {memberCount} => number of members
              a {userId} => id of the member
            v-btn(@click="updatemsglvlup()") Update  
      v-card#ecartcategorie(elevation="0")
      v-card#overflow-hidden.cardlb(width="80vw" color="#40444b")
        h3 Leaderboard
        div(v-if="checklb()")
          v-btn.rightreset#reset(color="red" @click="resetalllvl()" v-if="showresetall") RESET ALL
          div(v-for="item in data")
            v-card(width="80vw" color="#40444b")
              v-avatar
                v-img(:src="item[1]")
              a {{item[0]}}
              a {{item[2]}}/{{calcullevel(item[3])}}XP
              p level {{item[3]}}
              p  {{getrank(item[5])}}
              v-progress-linear(height="25" v-model="leaderboard[item[4]]" color="red") {{ Math.round(leaderboard[item[4]]) }}%
              v-btn#btnlvluser(@click="dellevel(item)" color="secondary") Reset XP
            v-divider
        div(v-else)
          p No leaderboard
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
    sysxp: false,
    sysmsg: false,
    sysmsgchann: false,
    leaderboard: {},
    data: null,
    alert: false,
    alerttext: null,
    alerttype: null,
    dataguild: null,
    loading: false,
    drawer:true,
    listchannel: null,
    offset: null,
    showresetall: false,
    api_endpoint: process.env.VUE_APP_API_ENDPOINT,

    redirectitems: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', path: ""},
      {title: 'Levels', icon: 'mdi-image', path: "/levels"},
      {title: 'Welcome', icon: 'mdi-help-box', path: "/welcome"},
      {title: 'Moderation', icon: 'mdi-discord', path: "/moderation"}
    ],
  }),

  created () { 
    var guildid
    window.location.href.split("/").forEach(elem => {
      if(!isNaN(elem)){
        guildid = elem
      }
    })
    axios({
      method: "POST",
      url: `${this.api_endpoint}/levels`,
      data: {"guild_id":guildid},
      })
      .then(({ data }) => {
        if(data !== "Fail"){
          sessionStorage.setItem("lvllist", JSON.stringify(data))
        }
          axios({
            method: "GET",
            url: `${this.api_endpoint}/discord?id=${guildid}`
          })
          .then(({data}) => { 
            axios({
              method: "POST",
              url: `${this.api_endpoint}/guilds`,
              data: {"guild_id":guildid},
            })
            .then(({ data }) => {
              this.dataguild = data
              if(data.sysxp ===1){
                this.sysxp = true
              }
              if(data.sysmsg==1){
                this.sysmsg = true
              }
              if(data.sysmsgchann==1){
                this.sysmsgchann = true
              }
              this.parselvllist()
              })
            data = data.filter(elem => elem.type == 0)
            this.listchannel = data
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted(){
    window.addEventListener("scroll", () => {
      if(window.scrollY >= this.offset){
        this.showresetall = true
      }else{
        this.showresetall = false
      }
      console.log(`${window.scrollY} // ${this.offset}`)
    })
  },
  methods:{
    sizechanlvl(){
      console.log(document.getElementById("cardlvlupmsg").style.height)
    },
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
    testdel (item) {
      if(this.data.length > 1){
          this.data.forEach(elem => {
          if(elem[5] > this.data[item-1][5]){
            elem[5] = elem[5] - 1
          }
        })
      this.data.splice(item-1, 1)
      }else{
        this.data=null
      }
    },
    getrank: (item) => {
      return "#" + item.toString()
    },
    parselvllist () {
      const data = JSON.parse(sessionStorage.getItem("lvllist"))
      if(data == null){
        sessionStorage.removeItem("lvllist")
        
        this.loading = true
      }else{
        let beforereturn = []
        const lstuser = Object.keys(data)
        lstuser.forEach(elem => beforereturn.push([data[elem]["name"], data[elem]["icon"], data[elem]["xp"], data[elem]["levels"], data[elem]["user_id"], data[elem]["rank"]]))
        lstuser.forEach(elem => this.leaderboard[elem] = this.calculpurcentage(data, elem)
        )
        this.data = beforereturn.sort(function(a, b) {
            return a[2] - b[2]
        }).reverse()
        sessionStorage.removeItem("lvllist")
        this.loading = true
      }
    },
    checklb () {
      if(this.data == null){
        return false
      }else{
        setTimeout( () => this.offset = document.querySelector(".cardlb").offsetTop / 4, 15)
        return true 
      }
    },
    calculpurcentage (data, elem) {
      if(data[elem]["levels"] == 0){
        return (data[elem]["xp"]/50)*100
      }else{
        const xpendessou = this.calcullevel(data[elem]["levels"] - 1)
        const xp = data[elem]["xp"] - xpendessou
        const xpaudessu = this.calcullevel(data[elem]["levels"]) - xpendessou
        return (xp/xpaudessu)*100
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
    dellevel (item) {
      axios({
        method: "DELETE",
        url: `${this.api_endpoint}/levels`,
        data: {"user_id":item[4], "guild_id":this.getguildid()},
        })
        .catch((error) => {
            console.log(error);
        });
      if(this.data.length > 1){
          this.data.forEach(elem => {
          if(elem[5] > this.data[item[5]-1][5]){
            elem[5] = elem[5] - 1
          }
        })
      this.data.splice(item[5]-1, 1)
      }else{
        this.data=null
      }
      this.sendalert(`The level of ${item[0]} has been successfully reset`, "success")
    },
    dropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    calcullevel (level) {
      if(level == -1){
        return 50
      }
      if(level == 0){
            return 50
    }else{
      if(level == 1){
            return 100
      }else{
            var xp_levels1 = level*75
            var xp_levels2 = xp_levels1/4
            return xp_levels1+xp_levels2*3
      }
    }
    },
    getguildname: () => {
      return sessionStorage.getItem("nameguild")
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
      let a = window.location.href.split("/")
      a.pop()
      window.location.href = a.join("/") + item.path
    },
    getguildicon() {
      return 'https://cdn.discordapp.com/icons/' + sessionStorage.getItem("idguild") + "/" + sessionStorage.getItem("iconguild") + ".webp"
    },
    updatechannellvlup(){
      axios({
        method: "PATCH",
        url: `${this.api_endpoint}/guilds`,
        data: {"column":"idchann", "value":document.getElementById("channellvlup").value, "guild_id": this.getguildid()}
      })
      this.dataguild.idchann = document.getElementById("channellvlup").value
      this.sendalert("The level-up channel has been successfully modified", "success")
    },
    getguilditem(item) {
      return this.dataguild[item]
    },
    resetalllvl() {
        this.data = null
        axios({
          method: "DELETE",
          url: `${this.api_endpoint}/levels`,
          data: {"guild_id":this.getguildid()}
        })
        this.sendalert("The level of the whole server has been reset", "success")
    },
    updatemsglvlup(){
      axios({
        method: "PATCH",
        url: `${this.api_endpoint}/guilds`,
        data: {"column": "msglvl", "value":document.getElementById("inputmsglvl").value, "guild_id":this.getguildid()}
      })
      this.sendalert("The level-up message has been successfully modified", "success")
    },
    clicksysxp () {
      this.sysmsg = false
      this.sysmsgchann = false
    },
    clicksysmsg () {
      if(this.sysmsg === false){
        this.sysxp = true
      }else{
        this.sysmsgchann = false
      }
    },
    clicksysmsgchann () {
      if(this.sysmsgchann === false){
        this.sysxp = true
        this.sysmsg = true
      }
    },
    updatesettings () {
      const sysxp = this.sysxp ? 1:0
      const sysmsg = this.sysmsg ? 1:0
      const sysmsgchann = this.sysmsgchann ? 1:0
      
      axios({
        method: "PATCH",
        url: `${this.api_endpoint}/guilds`,
        data: {"column": {"sysxp":sysxp, "sysmsg":sysmsg, "sysmsgchann":sysmsgchann}, "guild_id": this.getguildid()}
      })
      this.sendalert("The settings has been changed successfully", "success")
    },
    checkchannlvl () {
      return (this.dataguild.idchann === "None" && this.sysmsgchann === true)
    },
    logout:() => {
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
  }
  
}
</script>

<style lang="sass">
.navbarcolor
  background: #40444b  !important
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

.rightappbar
  position: fixed
  right: 0px
  z-index: 1

.rightreset
  position: fixed
  right: 0px
  z-index: 1
  bottom: 0

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

h3
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

.v-card .v-btn:not(#reset)
  margin-top: 1vw
  width: 100%
  background-color: rgb(64, 68, 75)
</style>