<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.banner
	+e.IMG.background(src="images/hero.jpg")
	+e.H1.title 
		| Огромные скидки на донаты!
		+e.SPAN.procent до 90%
	+e.P.descr Успейте поймать удачу
	+e.arrow
		svgi(name="arrow")
</template>

<script>
export default {
  name: "Banner",
  data: function () {
  	return {
  		
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/sass/all";
.banner
	margin-top: 30px
	width: 100%
	position: relative
	color: $light
	overflow: hidden
	border-radius: 20px
	padding-left: 30px
	padding-right: 30px
	padding-top: 40px
	padding-bottom: 40px
	&__background
		position: absolute
		width: 100%
		height: 100%
		top: 0
		left: 0
		z-index: -1
		object-fit: cover
		transform-origin: center center
		animation: imageZoom 10s infinite alternate
	&__title
		font-size: 36px
		font-weight: 600
		width: 340px
	&__procent
		font-size: 18px
		font-weight: 800
		vertical-align: top
		background-color: $error
		padding-left: 10px
		padding-right: 10px
		padding-top: 3px
		padding-bottom: 3px
		border-radius: 30px
		margin-left: 10px
		position: relative
		top: 5px
	&__descr
		font-size: 20px
		color: #DCDCDC
	&__arrow > *
		transform: rotate(90deg)
		font-size: 20px
		margin-top: 30px
</style>
