<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.items
	+e.H3.title Выберите товар:
	+e.P.tip Нажмите на товар, чтобы узнать о нём больше
	+e.wrapper
		Item(
			v-for="item in $store.state.shopList"
			:name="item.name"
			:price="item.price"
			:discount="item.discount"
			:id="item.id"
			:dir="item.dir"
			full=false
		)
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "shop",
  components: {
  	Item
  },
  mounted(){
  	console.log("a")
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
	&__wrapper
		+flex
		flex-wrap: wrap
		margin-top: 60px
	&__tip
		color: $gray
</style>