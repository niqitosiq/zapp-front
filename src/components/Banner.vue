<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
  		
+b.banner(v-if="visible")
	+e.IMG.background(v-lazy="imgUrl")
	+e.H1.title 
		| {{ banner.title }}
		+e.SPAN.procent {{ banner.discount }}
	+e.P.descr {{ banner.description }}
	+e.arrow
		svgi(name="arrow")
</template>

<script>

export default {
  name: "Banner",
  data: function () {
  	return {
  		//'http://localhost:1337' + this.$store.state.banner.background.url
  		//imgUrl: '',
  		visible: false,
  		banner: {},
  	}
  },
  props: {
  	imgUrl: String,
  },
  methods: {},
  mounted(){
  	this.$store.dispatch("getBanner").then((data)=>{
  		this.banner = data;
  		let url = data.background.url;
  		if (url){
  			this.imgUrl = 'http://localhost:1337' + url;
  			this.visible =  true;
  		}
  	})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
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
