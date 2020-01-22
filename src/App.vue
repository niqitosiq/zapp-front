<template lang="pug">
include ../node_modules/bemto.pug/bemto.pug
+b.main#app(:class='{"no-scroll": $store.state.aboutOpenned===true}')
  .container
    Header
  transition(name="fadeD")
    router-view
  //Modals
  Loading( 
    :active.sync="this.$store.state.loading>0" 
        :can-cancel="false"
        color="#0070c0"
    )
</template>
<script>
import Vue from 'vue';
import svgi from "@/components/SvgIcon.vue";
import VueFlashMessage from 'vue-flash-message';
import store from './store';
import VModal from 'vue-js-modal';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Header from "@/components/Header.vue";
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VModal)
Vue.component("svgi", svgi);
Vue.component("Loading", Loading);
  
export default {
  name: "App",
  created(){
  },
  components: {
    Header
  },
  watch: {
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
+font("Qanelas", "Qanelas-Bold", 700)
+font("Qanelas", "Qanelas-SemiBold", 600)
+font("Qanelas", "Qanelas-Regular", 400)
+font("Qanelas", "Qanelas-Light", 100)

@import 'node_modules/normalize-scss/sass/normalize';
+normalize()
*
  font-family: Qanelas
h1,h2
  font-weight: 600
body
  padding-bottom: 100px
  overflow: hidden scroll
  height: 100%
  position: relative
#app.no-scroll
.container
  display: flex
  width: 960px
  margin: 0 auto
  justify-content: space-between
  align-items: center
  min-width: 260px
  &.row
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
  +below(1000px)
    width: 90%
  +below(720px)
    flex-direction: column
    align-items: flex-start
</style>