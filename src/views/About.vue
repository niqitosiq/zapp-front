<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
.container
  +b.about
    +e.A.back(@click="$router.go(-1)") 
      +e.icon 
        svgi(name="arrow")
      span Вернуться назад
    +e.wrapper
      Item(
        :name="descr.name"
        :price="descr.price"
        :discount="descr.discount"
        :id="descr.id"
        :dir="descr.dir"
        full=true
      )
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
  padding-top: 30px
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
    margin-top: 100px
</style>