<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.quiz
	+e.sidebar
		+e.item(v-for="item in $store.state.types" :class="{active: item.id===active}" @click="choozeType(item.id)")
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
  data: function () {
  	return {
  		active: 1,
  	}
  },
  components: {
  	Shop,
  },
  methods: {
  	choozeType: function(id) {
  		this.active=id;
  	}
  	
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/all";
.quiz
	margin-top: 30px
	+flex
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
		&.active
			&:before
				transform: scaleX(1)
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
	&__name
		font-weight: 300
		font-size: 18px
		margin-top: 5px
	&__icon
		font-size: 40px
		margin-top: 10px
	&__main
		width: 780px
</style>
