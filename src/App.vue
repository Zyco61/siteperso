<template lang="pug">
v-app(style="background: #36393f !important")
  v-main
    router-view
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
        handler(to, from) {
            document.title = to.meta.title || 'Romain MURIER';
        }
      },
  },
  data: () => ({
    //
  }),
}
</script>
