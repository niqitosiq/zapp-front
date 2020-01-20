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
          full=true
        )
        +e.buynow Купить
      +e.description
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

  export default {
  name: "about",
  components: {
   Item
  },
  data: function () {
    return {
      descr: '',
    }
  },
   methods: {
  },
  mounted(){
    let data = this.$store.state.shopList;
    this.descr = data.filter((item)=>{console.log(item); return (item.id == this.$route.params.id)})[0]
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
    .item
      flex-shrink: 0
  &__left
    width: 320px
    flex-shrink: 0

  &__description
    margin-left: 60px
  &__buynow
    width: 100%
    height: 50px
    +flex(center, center)
    background: $accent
    color: #fff
    border-radius: 20px
    cursor: pointer
    transition: background ease-in-out .3s
    &:hover
      background: $accentb
  .kit
    padding-left: 0
    &__item
      list-style: none
      padding-left: 0
      margin-bottom: 30px

    &__command
      background: #CFE5FF
      padding-top: 5px
      padding-bottom: 5px
      padding-left: 20px
      padding-right: 20px
      margin-right: 20px
    &__descr
      color: $grayt
  &__title
    margin-bottom: 50px
</style>