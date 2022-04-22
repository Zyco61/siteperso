<template lang="pug">
v-alert(:type="type") {{text}}
</template>

<script>
 export default {
   name: 'alert',
   props: [ 'text', "type" ],
 }
</script>