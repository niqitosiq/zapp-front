<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
.home
	.container
		Header
	.container
		Banner
	.container
		Quiz
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Quiz from "@/components/Quiz.vue";

export default {
  name: "home",
  components: {
  	Header,
    Banner,
    Quiz
  }
};
</script>
