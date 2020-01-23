<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.items
	+e.H3.title Выберите товар:
	+e.P.tip Нажмите на товар, чтобы узнать о нём больше
	.smooth(ref="smooth")
		//transition-group(name="fadeD").items__wrapper(v-if="$store.state.Items.length > 0")
		+e.wrapper(v-if="$store.state.Items.length > 0")
			Item(
				v-for="item in $store.state.Items"
				:name="item.name"
				:price="item.price"
				:discount="item.discount"
				:id="item.id"
				:dir="item.dir"
				:back="item.back.url"
				:hero="item.hero.url"
				full=false
			)
		+e.wrapper(v-else)
			+e.P.sorry
				| К сожалению тут пока пусто. Если у вас есть идея для добавления доната, напишите 
				a(href="#") сюда 
</template>

<script>
import Vue from 'vue';
import Item from "@/components/Item.vue";
import smoothHeight from 'vue-smooth-height';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
	duration: 500,
	easing: "ease-in-out",
});


export default {
  name: "shop",
  mixins:[smoothHeight],
  components: {
  	Item
  },
  computed: {
  	scroll: function(){
  		return this.$store.state.scrollToTop;
  	}
  },
  watch: {
  	scroll: function () {
  		this.$scrollTo("#smooth");
  	}
  },
  mounted(){
	this.$smoothElement({
        el: this.$refs.smooth,
        hideOverflow: true,
        transition: 'height 500ms ease-in-out',
    })
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
	
.items
	padding-left: 40px
	padding-right: 40px
	height: 100%
	+flex
	flex-direction: column
	&__title
		margin-top: 25px
		font-size: 18px
		font-weight: 400
	&__tip
		color: $gray
	&__sorry
		font-size: 30px
		padding-left: 100px
		padding-right: 100px
		text-align: center
		padding-bottom: 40px
		+below(720px)
			font-size: 24px
			padding-left: 50px
			padding-right: 50px
		+below(480px)
			padding-left: 0
			padding-right: 0
			
			
		a
			color: $accent
	&__wrapper
		width: 100%
		+flex
		flex-wrap: wrap
		+below(770px)
			padding-bottom: 30px
			
			
</style>