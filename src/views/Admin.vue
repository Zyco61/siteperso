<template lang="pug">
div
	h1 WORK IN PROGRESS

</template>
<script>

export default {
	name: "ADMIN",
	data: () => ({
		api_endpoint: process.env.VUE_APP_API_ENDPOINT
	}),
	methods: {
		redirectnavbar: function(path) {
			this.$router.push(path)
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

a
  color: #FFFFFF
</style>