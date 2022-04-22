<template lang="pug">
h1 404 NOT FOUND
v-btn(@click="returnindex()") Return to the main page
</template>
<script>
export default {
    methods:{
        returnindex: () => {
            window.location.href = "/"
        }
    }
}
</script>
