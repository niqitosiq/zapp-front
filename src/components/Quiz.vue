<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.quiz(v-if="$store.state.Types.length>0" id="smooth")
	+e.sidebar
		+e.wrapper
			+e.item(
				v-for="item in $store.state.Types" 
				:class="{active: item.id===$store.state.type.id}" 
				@click="choozeType(item.id)"
			)
				+e.icon
					svgi(:name="item.icon")
				+e.H2.name {{item.name}}
				+e.arrow
					svgi(name="arrow")

		
	+e.main
		Shop
</template>

<script>

import Shop from "@/components/Shop.vue";

  
export default {
  name: "Quiz",
  components: {
  	Shop,
  },
  methods: {
  	choozeType: function(id) {
  		this.$store.commit("scroll");
  		this.$store.dispatch("changeType", {id: id});
  	}
  },
  mounted(){
  	this.$store.dispatch("getTypes");
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/all";
.quiz
	margin-top: 30px
	width: 100%
	+flex

	+below(600px)
		flex-wrap: wrap
		
	&__sidebar
		width: 180px
		background-color: $accent
		color: $light
		overflow: hidden
		border-radius: 20px
		border-top-right-radius: 0
		border-bottom-right-radius: 0
		height: max-content
		position: sticky
		top: 10%
		flex-shrink: 0
		+below(960px)
			flex-shrink: 1
		+below(600px)
			width: 100%
			position: static
			border-top-right-radius: 20px
			border-bottom-left-radius: 0px
			overflow: scroll hidden
	&__wrapper
		+below(600px)
			width: max-content
			
			
	&__item
		padding-left: 20px
		padding-top: 10px
		padding-bottom: 10px
		cursor: pointer
		position: relative
		width: 100%
		>*
			position: relative
			z-index: 2
		+below(600px)
			width: auto
			display: inline-block
			
			
		&:before
			content: ''
			position: absolute
			width: 100%
			height: 100%
			left: 0
			top: 0
			z-index: 1
			background-color: $accentb
			transform: scaleX(0)
			transform-origin: center left
			transition: transform ease-in-out .3s
			+below(600px)
				transform-origin: center top
				transform: scaleY(0)
				
				
		&.active
			&:before
				transform: scaleX(1)
				+below(600px)
					transform: scaleY(1)
		&:hover
			.quiz__arrow
				opacity: 1
				transform: translateX(0)
	&__arrow
		position: absolute
		top: 20px
		right: 20px
		transform: translateX(-20px)
		opacity: 0
		transition: transform ease-in-out .2s, opacity ease-in-out .2s
		+below(600px)
			display: none
			
			
	&__name
		font-weight: 300
		font-size: 18px
		margin-top: 5px
		+below(960px)
			font-style: 16px
			padding-right: 20px
	&__icon
		font-size: 40px
		margin-top: 10px
	&__main
		width: 100%
</style>
