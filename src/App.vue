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
  data() {
    return {
      msg:'abc'
    }
  },
  computed:{

  },
  mounted() {
        this.$store.dispatch("home/categoryList");
  },
}
</script>

<style>

</style>
