<template lang="pug">
v-layout
  v-app-bar.navbarcolor(absolute style='overflow: visible')
    v-app-bar-nav-icon.navbarcolor#btnnavbar(@click='clickdrawer()')
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
    v-card
      h1 dzadaz
      h1 dzadaz
      h1 dzadaz
  div#test
    div(v-if="alert")
      alertVue(:type="alerttype" :text="alerttext")
</template>
<script>
import alertVue from '../components/alert.vue';
  export default {
    components: {alertVue},
  data: () => ({
    drawer:true,
    group:null,
    user:false,
    counter: true,
    alert: false,
    api_endpoint: process.env.VUE_APP_API_ENDPOINT,
    groupuser:null,
    alerttype: null,
    alerttext: null,
    redirectitems: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', path: ""},
      {title: 'Levels', icon: 'mdi-image', path: "/levels"},
      {title: 'Welcome', icon: 'mdi-help-box', path: "/welcome"},
      {title: 'Moderation', icon: 'mdi-discord', path: "/moderation"}
    ],
  }),
  methods:{
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
    dropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
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
    logout: () => {
      sessionStorage.clear()
      window.location.href = "/"
    },
    sendalert(text, type) {
      this.alerttext=text
      this.alerttype=type
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 5000)
    },
    getguildicon() {
      return 'https://cdn.discordapp.com/icons/' + sessionStorage.getItem("idguild") + "/" + sessionStorage.getItem("iconguild") + ".webp"
    },
  },
}
</script>

<style lang="sass">
#alertplacement
  position: fixed
  bottom: 0
  right: 0
#alert
  background: #008000
  color: white
  width: 20vw
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

.right
  margin-left: auto
  margin-right: 0
  display: "flex"

.v-navigation-drawer
  background: #40444b
  color:#d8d9da

#test
    position: fixed
    bottom: 0
    right: 0

.bg-success
  background-color: green

.bg-error
  background-color: red

#ecartcategorie
  background: transparent !important
  height: 10vh

.v-card
  width: 80vw
  margin-right: 1vw
</style>