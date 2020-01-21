<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.items
	+e.H3.title Выберите товар:
	+e.P.tip Нажмите на товар, чтобы узнать о нём больше
	.smooth(ref="smooth" id="smooth")
		//transition-group(name="fadeD").items__wrapper(v-if="$store.state.Items.length > 0")
		+e.wrapper(v-if="$store.state.Items.length > 0")
			Item(
				v-for="item in $store.state.Items"
				:name="item.name"
				:price="item.price"
				:discount="item.discount"
				:id="item.id"
				:dir="item.dir"
				:key="changedType + '/' + changedServer + '/' + item.id"
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
  	changedType: function(){
  		return this.$store.state.type;
  	},
  	changedServer: function(){
  		return this.$store.state.server;
  	}
  },
  watch: {
  	changedType: function () {
  		this.$scrollTo("#smooth");
  		this.op();
  	},
  	changedServer: function () {
  		this.$scrollTo("#smooth");
  		this.op();
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
		a
			color: $accent
	&__wrapper
		width: 100%
		+flex
		flex-wrap: wrap
		margin-top: 60px
</style>