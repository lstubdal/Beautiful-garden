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


/* TO DO
  1. hamburger menu - DONE
  2. collapsible min-height toDo component - DONE
  3. formatering
  4. slette kode som ikke brukes (store, modules etc...)
  5. legge inn kommentarer
  6. fikse table
  7. universiell utformin (aria labels)
  8. import font på riktig måte

  9. test på netlify før levering
  10. slette lock, modules, dist(?)
  11. reset form

  12. Pin fjerne eller ikke fjerne? -> lage dashboard-component med pin (slot)
  13. slideshow: lage slide component
  14. border radius varible
 */