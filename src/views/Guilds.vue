<template lang="pug">
div
  v-layout
    v-app-bar.navbarcolor(absolute style='overflow: visible')
      v-avatar
        v-img(src="../assets/lastvoxeslogo.png" max-height="40" max-width="40")
      v-app-bar-title
        a Last Voxes | Guilds
      .dropdown.right
        v-btn.dropbtn(@click="dropdown()" elevation="5") {{ getitem("username") }}
          v-avatar
            v-img(:src="getimage()")
        #myDropdown.dropdown-content
          div
            a(@click="gotoprofile()") Profile
            a(@click="logout()") Log Out
  div#displayicons
    div(v-for="item in guilds")
      div(v-if="item.icon")
        v-avatar(size="100")
          v-img#img-guild(:src="'https://cdn.discordapp.com/icons/'+item.id+'/'+item.icon+'.webp'", alt = "icon server", @click="goToGuild(item.id, item.name, item.icon)")
        p {{item.name}}
      div(v-else)
        v-avatar(size="100")
          v-img#img-guild(:src="'https://i.ibb.co/C5bm002/test.png'", alt = "icon server", @click="goToGuild(item.id, item.name)")
        p {{item.name}}
</template>

<script>
const axios = require("axios").default;

export default {
  name: "Guilds",
  data:() => ({
      guilds:JSON.parse(sessionStorage.getItem("guilds")),
      loaded: false
    }),
  // async beforeCreate () {
  //   await axios({
  //     method: "GET",
  //     url: "https://discordapp.com/api/users/@me",
  //     headers: {'Authorization':'Bearer '+sessionStorage.getItem("access_token")}
  //   })
  //   .then(({ data }) => {
  //     sessionStorage.setItem("id", data.id)
  //     sessionStorage.setItem("username", data.username)
  //     sessionStorage.setItem("discriminator", data.discriminator)
  //     sessionStorage.setItem("avatar", data.avatar)
  //     // this.loaded = true
  // })
  //   const a = document.getElementsByClassName("navbarcolor")
  //   const b = document.getElementById("displayicons")
  //   b.style.marginTop = a[0].style.height
  // },
  // methods: {
  //   logout: () => {
  //     sessionStorage.clear()
  //     window.location.href = "/"
  //   },
  //   async dropdown() {
  //     document.getElementById("myDropdown").classList.toggle("show");
  //   },
  //   getitem (item) {
  //     return sessionStorage.getItem(item)
  //   },
  //   getimage: () => {
  //     if(sessionStorage.getItem("avatar") != "null"){
  //       return "https://cdn.discordapp.com/avatars/"+sessionStorage.getItem('id') + "/"+sessionStorage.getItem('avatar') + ".png"
  //     }else{
  //       return 'https://i.ibb.co/C5bm002/test.png'
  //     }
  //   },
  //   goToGuild: (id, name, icon) => {
  //     window.location.href = '/guild/' + id
  //     sessionStorage.setItem("nameguild", name)
  //     sessionStorage.setItem("iconguild", icon)
  //     sessionStorage.setItem("idguild", id)
  //   },
  //   async getGuilds () {
  //     if(!sessionStorage.access_token){
  //         window.location.pathname = "/"
  //     }
  //     const acc_tk = sessionStorage["access_token"];
  //     const ttoken = sessionStorage["token_type"];
  //     await axios({
  //     method: "GET",
  //     url: "https://discord.com/api/v9/users/@me/guilds",
  //     headers: {
  //         Authorization: ttoken + " " + acc_tk,
  //     },
  //     })
  //     .then(({ data }) => {
  //         var permsadmin = [];
  //         data.forEach((element) => {
  //           if ((element["permissions"] & (1 << 3)) == 1 << 3) {
  //               permsadmin.push(element);
  //           }
  //         });
  //         sessionStorage.setItem("guilds", JSON.stringify(permsadmin));
  //         this.guilds=permsadmin
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
        
  //   },
  //   userInfo: (element) => {
  //     return sessionStorage.getItem(element)
  //   },
  //   gotoprofile () {
  //     window.location.href = `/user/${sessionStorage.getItem("id")}`
  //   }
  // },
  // mounted() {
  //   window.addEventListener("onload", this.getGuilds());
  // },

};
</script>
<style lang="sass">
#iconsize
  cursor: pointer
  width: 60%
  display: inline-block
  -webkit-border-radius:50px
  -moz-border-radius:50px
  border-radius:50px

#displayicons
  display: grid
  grid-template-columns: repeat(3, auto)
  grid-gap: 10px

#topbar
  position: absolute
  top: 0vh
  color: black
  font-size: x-large

div
  text-align: center

#img-guild
  cursor: pointer

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

a
  text-align: center
</style>
