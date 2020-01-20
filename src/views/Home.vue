<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
.home.container
	Header
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
