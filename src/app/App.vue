<template>
  <Header/>
  <RouterView />    <!-- show dashboard -->
  <Footer/>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";  

export default {
  components: {
    Header,
    Footer
  },
};
</script>

<style>
    @import "../style/font.css";
    @import "../style/reset.css";
    @import "../style/variables.css";
    @import "../style/style.css";
</style>