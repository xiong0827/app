<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.footerIsShow"/>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed:{

  },
  mounted() {
        this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>
