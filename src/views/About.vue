<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
.container
  +b.about
    +e.A.back(@click="$router.go(-1)") 
      +e.icon 
        svgi(name="arrow")
      span Вернуться назад
    +e.wrapper
      +e.left
        Item(
          :name="descr.name"
          :price="descr.price"
          :discount="descr.discount"
          :id="descr.id"
          :dir="descr.dir"
          :back="descr.back.url"
          :hero="descr.hero.url"
          full=true
        )
        +e.buynow Купить
      +e.description
        md {{descr.article}}
        +e.buynow._m Купить
      //
        +e.H3.title Возможности набора:
        +b.UL.kit
          +e.LI.item 
            +e.SPAN.command /kit premium
            +e.SPAN.descr - набор вещей "премиум"
          +e.LI.item 
            +e.SPAN.command /tpa
            +e.SPAN.descr - Телепортироваться к точке 
          +e.LI.item 
            +e.SPAN.command /vanish
            +e.SPAN.descr - Изчезнуть
          +e.LI.item 
            +e.SPAN.command /kit premium3
            +e.SPAN.descr - набор вещей "премиум3"
          +e.LI.item 
            +e.SPAN.command /kit premium2
            +e.SPAN.descr - набор вещей "премиум2"
          +e.LI.item 
            +e.SPAN.command /kit premium1
            +e.SPAN.descr - набор вещей "премиум2123123"
        +e.delimetr
        +e.H4 А так же возможности всех предыдущих наборов.
        
</template>

<script>
import Item from "@/components/Item.vue";
import md from 'vue-markdown';


export default {
  name: "about",
  components: {
   Item,
   md
  },
  data: function () {
    return {
      descr: {},
    }
  },
  mounted(){
    this.$store.dispatch("setAbout", {id:this.$route.params.id}).then(data=>{
      this.descr = data;
    });
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
.about
  width: 100%
  padding-top: 60px
  &__back 
    cursor: pointer
    span
      font-weight: 600
      margin-right: 20px
      color: $accent

  &__icon svg
    transform: rotate(-180deg)
  &__wrapper
    width: 100%
    margin-top: 60px
    +flex
    +below(760px)
      flex-direction: column
      justify-content: center
      align-items: center

    .item
      flex-shrink: 0
  &__left
    width: 320px
    flex-shrink: 0
    +below(370px)
      width: 100%
  
  &__description
    margin-left: 60px
    +below(760px)
      margin-left: 0
      width: 320px
    +below(370px)
      width: 100%
      
      
  &__buynow
    width: 100%
    height: 50px
    +flex(center, center)
    background: $accent
    color: #fff
    border-radius: 20px
    cursor: pointer
    transition: background ease-in-out .3s
    +below(760px)
      display: none
    &_m
      display: none
      +below(760px)
        display: flex
        
    &:hover
      background: $accentb
  ul
    padding-left: 0
    li
      list-style: none
      padding-left: 0
      margin-bottom: 20px
      background: #CFE5FF
      padding-top: 5px
      padding-bottom: 5px
      padding-left: 20px
      padding-right: 20px
      margin-right: 20px
      display: block
      width: max-content
  &__title
    margin-bottom: 50px
</style>