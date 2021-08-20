<template>
  <div id="app">
    <router-view/>
    <footerAgriCapital/>
  </div>
</template>

<script>
import FooterAgriCapital from '@/components/general/FooterAgriCapital.vue'

export default {
  components: { FooterAgriCapital }
  
}
</script>

<style lang="scss">
  #app {
    background: #eee;
    height: 100%;
  }
</style>
