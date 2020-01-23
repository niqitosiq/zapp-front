<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.shop
	+b.header
		+e.panel
			+e.H3.title Выберите сервер: 
			+e.wrapper
				+e.item(
					v-for="item in $store.state.Servers" 
					:class="{active: item==$store.state.server}"
					@click="choozeServer(item.id)"
					)
					+e.icon
						svgi(name="approve")
					+e.name {{item.name}}
		+e.instructions
			span 
				| Инструкция 
				span.hide по покупке
			svgi(name="question")
	
	transition(name="fade")
		router-view
</template>
<script>

import About from "@/views/About.vue";
export default {
  name: "",
  methods: {
  	choozeServer: function(id) {
  		this.$store.dispatch("changeServer", {id: id});
  		this.$store.commit("scroll");
  	}  	
  },
  components: {
  	About
  }
};
</script>

<style lang="sass"> 
@import "@/assets/sass/all";
.shop
	width: 100%
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25)
	border-radius: 20px
	border-top-left-radius: 0
	padding-bottom: 10px
	position: relative
	+below(600px)
		border-top-right-radius: 0
	
	.header
		padding-top: 22px
		padding-bottom: 22px
		padding-left: 40px
		padding-right: 40px
		+flex(center, space-between)
		position: relative
		&:after
			content: ''
			position: absolute
			bottom: 0
			left: 2.5%
			width: 95%
			height: 1px
			background: #ccc
		&__title
			margin: 0
			font-size: 18px
			font-weight: 400
			margin-right: 30px
			+below(960px)
				font-size: 16px

			+below(480px)
				font-size: 18px
		&__wrapper
			+flex
			+below(480px)
				flex-direction: column
				align-items: flex-end
		&__panel
			+flex
			+below(480px)
				width: 100%
				justify-content: space-between
		&__item
			+flex
			font-size: 18px
			+below(960px)
				font-size: 16px
			+below(480px)
				margin-bottom: 10px
				
			color: $gray
			cursor: pointer
			&:last-child
				&__name
					margin-right: 0
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
			margin-right: 10px
			margin-left: 26px
			+below(480px)
				margin-left: 0
				margin-right: 0
				transform: translateX(0px)
		&__icon
			margin-right: 10px
			transition: opacity ease-in-out .3s .05s
			opacity: 0
			position: absolute
			+below(480px)
				position: static
		&__instructions
			opacity: 0.5
			transition: opacity ease-in-out .3s
			+flex(center, center)
			cursor: pointer
			+below(960px)
				.hide
					display: none
			+below(770px)
				display: none
			span 
				margin-right: 10px
				font-size: 14px
			span, svg				
				color: #000
			&:hover
				opacity: 0.6
</style>
