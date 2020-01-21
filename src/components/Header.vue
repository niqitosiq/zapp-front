<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.HEADER.header
  +e.IMG.logo(src="/images/logo.svg")
  +e.block
    transition(name="fade_top")
      +e.UL.menu(v-if="burger")
        +e.LI.list-item 
          a(href="#") Донаты
        +e.LI.list-item 
          a(href="#") Правила сервера
    +b.burger( @click="burger = !burger")
      +e.line._1(:class="{active: burger}")
      +e.line._2(:class="{active: burger}")
      +e.line._3(:class="{active: burger}")
      +e.cross
        +e.line._4(:class="{active: burger}")
        +e.line._5(:class="{active: burger}")
    +e.online
      +e.adress
        +e.SPAN.placeholder ip:
        +e.SPAN.ip {{ $store.state.html.ip }}
        +e.status
    

</template>

<script>
export default {
  name: "Header",
  data: function(){
    return {
      burger: 0,
    }
  },
  mounted: function () {
    if (window.innerWidth>480){
      this.burger = 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "@/assets/sass/all";
.header
  padding-top: 20px
  width: 100%
  +flex(flex-start, space-between)
  +below(480px)
    position: relative
  &__logo
    +below(480px)
      height: 65px
  &__block
    +flex
    +below(780px)
      flex-direction: column
    +below(480px)
      align-items: flex-end
      justify-content: flex-start
      //flex-direction: row

  &__menu
    margin-top: 5px
    margin-bottom: 0
    margin-right: 50px
    +flex
    +below(780px)
      margin-right: 0
      margin-bottom: 20px
      padding-left: 0
    +below(480px)
      position: absolute
      top: 100%
      flex-direction: column
      justify-content: center
      align-items: center
      margin-left: 0
      width: 100%
      padding-top: 30px
      padding-bottom: 30px
      background-color: $accent
      margin-top: 30px
      z-index: 10

  &__list-item
    text-decoration: none
    list-style: none
    margin-right: 35px
    font-weight: 500
    color: $grayt
    font-size: 18px
    +below(780px)
      margin-right: 0
      margin-left: 35px
    +below(480px)
      margin-left: 0
      margin-bottom: 20px
      color: $light
      &:last-child
        margin-bottom: 0
  &__adress
    +flex(flex-end, center)
    +below(780px)
      justify-content: flex-end
    +below(330px)
      display: none

  &__placeholder
    font-weight: 500
    color: $gray
    font-size: 18px
  &__ip
    font-weight: 600
    color: $accent
    font-size: 24px
    margin-left: 10px
    margin-bottom: -3px
  &__status
    width: 18px
    height: 18px
    border-radius: 15px
    background-color: #11FF37
    margin-left: 15px
    margin-bottom: 0px
    overflow: hidden
    position: relative
    &:before
      content: ''
      position: absolute
      width: 100%
      height: 100%
      border-radius: 100%
      background-color: #9aff81
      animation: circleUp 1s infinite alternate
.burger
  width: 40px
  height: 25px
  position: relative
  margin-bottom: 10px
  cursor: pointer
  display: none
  +below(480px)
    display: block
  &__line
    position: absolute
    width: 100%
    height: 2px
    background-color: $gray
    transition: transform ease-in-out .4s
    left: 0
    &_1, &_2, &_3
      transform: scaleX(1)
      transform-origin: left center
      &.active
        transform: scaleX(0)
    &_1
      top: 0
      transition-delay: 0s
    &_2
      top: 50%
      transition-delay: 0.2s
    &_3
      top: 100%
      transition-delay: 0.4s
    &_4
      transform: scale(0) rotate(45deg)
      transform-origin: left top
      left: 6px
      &.active
        transform: scaleX(1) rotate(45deg)
        transition-delay: 0.6s
    &_5
      transform: scale(0) rotate(-45deg)
      transform-origin: right top
      right: 6px
      left: auto
      &.active
        transform: scaleX(1) rotate(-45deg)
        transition-delay: 0.8s

</style>
