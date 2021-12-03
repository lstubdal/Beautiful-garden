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
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');
    @import "../style/reset.css";
    @import "../style/variables.css";
    @import "../style/style.css";
</style>