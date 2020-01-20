<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.shop
	+b.header
		+e.panel
			+e.H3.title Выберите сервер: 
			+e.item(
				v-for="item in $store.state.servers" 
				:class="{active: item.id==activeServer}"
				@click="activeServer = item.id"
				)
				+e.icon
					svgi(name="approve")
				+e.name {{item.name}}
		+e.instructions
			span Инструкция по покупке
			svgi(name="question")
</template>

<script>
export default {
  name: "",
  data: function () {
  	return {
  		activeServer: 1,
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"> 
@import "@/assets/sass/all";
.shop
	width: 100%
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25)
	border-radius: 20px
	border-top-left-radius: 0
	.header
		padding-top: 22px
		padding-bottom: 22px
		padding-left: 40px
		padding-right: 40px
		+flex(center, space-between)
		&__title
			margin: 0
			font-size: 18px
			font-weight: 400
			margin-right: 30px
		&__panel
			+flex
		&__item
			+flex
			margin-right: 20px
			font-size: 18px
			color: $gray
			cursor: pointer
			&.active
				color: $accent
				.header__name
					transform: translateX(0px)
				.header__icon
					opacity: 1
		&__name
			background: #fff
			transition: transform ease-in-out .3s
			transform: translateX(-28px)
		&__icon
			margin-right: 10px
			transition: opacity ease-in-out .3s .05s
			opacity: 0
		&__instructions
			opacity: 0.5
			transition: opacity ease-in-out .3s
			+flex(center, center)
			cursor: pointer

			span 
				margin-right: 10px
				font-size: 14px
			span, svg				
				color: #000
			&:hover
				opacity: 0.6
</style>
