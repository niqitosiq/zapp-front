<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
.item(:ref="id" @click="about(id);" :class="{notfull: full===false}")
	.image
		img.n1(:src="'http://localhost:1337' + back")
		img.n2(:src="'http://localhost:1337' + hero")
	.descr
		h4.name {{name}}
		p.old(v-if="discount!=0") 
			| {{price}} рублей
		p.new
			| {{ price/100*discount }} рублей
		.buynow(@click.stop="pay(id)")
			| Купить
</template>
<script>
export default {
  name: "",
  props: {
  	"name": String,
  	"price": Number,
  	"discount": Number,
  	"id": Number,
  	"dir": String,
  	"back": String,
  	"hero": String,
  	"full": Boolean
  },
  data: function () {
  	return {}
  },
  methods: {
  	about: function (idref) {
  		if (!this.full){
	  		this.$router.push("/about/" + idref)
	  	} else {
	  		this.pay(idref);
	  	}
  	},
  	pay: function (idref) {
  		this.$router.push("/payment/" + idref)
  	}
  },
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/all";
.item
	width: calc(33% - 10px)
	margin-right: 17.5px
	margin-bottom: 40px
	height: 500px
	position: relative
	cursor: pointer
	&.notfull
		height: 350px
		+below(780px)
			height: 270px
		+below(600px)
			height: 300px
	&:nth-child(3n+0)
		margin-right: 0
	+below(850px)
		width: calc(50% - 10px)
		margin-right: auto
		&:nth-child(2n+0)
			margin-right: 0
		&:nth-child(3n+0)
			margin-right: auto
	+below(770px)
		height: 300px
		
	+below(480px)
		width: 100%
		margin-right: 0
		margin-bottom: 22px
		
	p
		margin: 0
	.name
		font-size: 24px
		padding-top: 30px
	.new
		font-size: 20px
		font-weight: 600
		margin-bottom: 20px
		transform: translateY(0px)
		transition: transform ease-in-out .4s .1s
	.old
		position: relative
		display: inline-block
		transition: opacity ease-in-out .3s .1s
		opacity: 1
		&:before
			content: ''
			position: absolute
			width: 105%
			height: 2px
			top: 50%
			left: 0
			background: $error
	&:not(.notfull)
		cursor: auto
		width: 100%
		.image img
			&.n1
     			animation: item1 3s ease-in-out infinite alternate
			&.n2
     			animation: item2 3s ease-in-out infinite alternate
		+below(770px)
			.buynow
				display: none
			
	&.notfull:hover
		+above(770px)
			.old
				opacity: 0
			.new
				transform: translateY(-40px)
			.buynow
				transform: translateY(0%)
			.image img
				&.n1
					transform: translateY(-25px)
				&.n2
					transform: translate(-50%, -45px)
	.descr
		position: absolute
		bottom: 0
		left: 0
		width: 100%
		padding-top: 90px
		padding-left: 20px
		padding-right: 20px
		overflow: hidden
		color: $light
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0) 30%,$accent 60%, $accent 80%)
		+below(770px)
			overflow: visible
			
	.buynow
		width: 100%
		position: absolute
		left: 0
		bottom: 0
		text-align: center
		padding-top: 10px
		padding-bottom: 10px
		background: $accentb
		color: $light
		font-weight: 800
		font-size: 20px
		transform: translateY(100%)
		transition: transform ease-in-out .4s .1s, background ease-in-out .3s
		border-radius: 20px 20px 0 0 
		+below(770px)
			position: static
			transform: translateY(0)
			border-radius: 20px
			margin-bottom: -15px

		&:hover
			background: #63ABFF
	.image
		width: 100%
		height: 100%
		position: relative
		margin-bottom: 30px
		img
			width: 100%
			height: 100%
			position: absolute
			object-fit: contain
			margin-bottom: inherit
			&.n1
				transform: translateY(-0px)
				top: 0
				left: 0
				transition: transform ease-in-out .3s
			&.n2
				height: 80%
				width: 90%
				bottom: 0
				left: 50%
				transform: translateX(-50%)
				transition: transform ease-in-out .3s
			&.bg

</style>

