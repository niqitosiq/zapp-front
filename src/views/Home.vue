<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
.home
	.container
		Banner
	.container
		Quiz
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Quiz from "@/components/Quiz.vue";

export default {
  name: "home",
  components: {
    Banner,
    Quiz
  }
};
</script>
