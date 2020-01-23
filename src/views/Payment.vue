<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.payment
	+e.container.container
		+e.H1.title Вы собираетесь совершить оплату
		+e.descr
			+e.left
				h2 Товар: 
				+e.H3.name {{data.name}}
				+e.type 
					+e.SPAN.itemdescr Тип товара:
					+e.SPAN.itemval {{data.type.name}}
				+e.server
					+e.SPAN.itemdescr Сервер:
					+e.SPAN.itemval {{data.server.name}}
				+e.delimetr
				+e.price
					+e.SPAN.itemdescr Цена с учетом скидки в {{data.discount}}%:
					br
					+e.SPAN.itemval {{data.price/100*data.discount}} рублей
			+e.right
				h2 Введите свой ник в поле ниже:
				+e.form
					+e.input.INPUT.input(id="login" type="text" placeholder="Ник на сервере" 
					@input="check()" v-model="nick")
					+e.check
						+e.INPUT.checkbox(type="checkbox" id="policy" v-model="checked" @change="check()").input
						+e.LABEL.label(for="policy").label Я согласен с 
							a(href="#") политикой 
								br 
								|конфендициальности 
					+e.buy(:class="{active: canBePayed}")
						span Перейти к оплате
						svgi(name="arrow")

</template>

<script>
// @ is an alias to /src
import Item from "@/components/Item.vue";

export default {
	name: "payment",
	components: {
		Item,
	},
	data: function() {
		return {
			data: { "id": "0", "name": "", "price": 0, "discount": 0, "type": { "name": "" }, "server": { "name": ""}},
			checked: true,
			nick: "",
			canBePayed: false,
		}
	},
	methods: {
		check(){
			if (this.nick!="" && this.checked==true){
				this.canBePayed = 1;
			} else {
				this.canBePayed = 0;
			}
		}
	},
	mounted(){
		this.$store.dispatch("getPayment", {id: this.$route.params.id}).then(resp=>{
			this.data = resp;
		})
	}
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
.payment
	&__title
		margin-top: 40px
	&__container
		flex-direction: column
		justify-content: flex-start
		align-items: flex-start
	&__descr
		margin-top: 30px
		box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25)
		width: 100%
		+flex(flex-start, space-between)
		border-radius: 20px
		overflow: hidden
		position: relative
		+below(800px)
			flex-direction: column
			
		h2
			margin-top: 0
	&__buy
		position: absolute
		right: 40px
		bottom: 40px
		background-color: $accent
		padding-top: 20px
		padding-bottom: 20px
		padding-left: 20px
		padding-right: 20px
		border-radius: 40px
		color: $light
		font-weight: 600
		+flex(center,center)
		span
			margin-right: 5px
		opacity: .5
		cursor: no-drop
		transition: opacity ease-in-out .3s
		&.active
			opacity: 1
			cursor: pointer
		+below(960px)
			position: static
			margin-top: 20px
			
	&__form
		+flex(flex-start,flex-start,column)
		a
			color: $accent
	&__input
		width: 100%
		padding-top: 10px
		padding-bottom: 10px
		padding-left: 30px
		border-radius: 20px
		border: solid 1px $accent
		color: $accent
		margin-top: 20px
	&__check
		margin-left: 0px
		//margin-top: /15px
		position: absolute
		bottom: 40px
		+flex(center, center)
		+below(960px)
			position: static
			margin-top: 10px

			
	&__label
		margin-left: 20px
		font-size: 14px
		display: inline-block
		+below(960px)
			margin-top: 10px
			br
				display: none
	&__right
		width: 100%
		padding-top: 40px
		padding-left: 40px
		padding-bottom: 40px
		padding-right: 40px
	&__left	
		width: 350px
		flex-shrink: 0
		border-right: solid 1px #ccc
		padding-left: 40px
		padding-top: 40px
		padding-bottom: 40px
		padding-right: 40px
		background-color: $accent
		color: $light
		min-height: 100%
		+below(800px)
			min-height: auto
			width: 100%
			
	&__delimetr
		width: 100%
		height: 1px
		background-color: #ccc
		margin-top: 20px
		margin-bottom: 20px
	&__itemval
		font-weight: 600
		color: $light
	&__itemdescr
		margin-right: 10px
		color: #e1e1e1
	&__price
		font-size: 18px
		.payment__itemdescr
			color: #e1e1e1
			margin-bottom: 0px
			display: block
		.payment__itemval
			font-size: 25px

</style>