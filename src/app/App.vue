<template>
  <div class="dashboard">
    <div class="dashboard__container">
      <h1 class="dashboard__component dashboard__title">
        Beautiful <br />
        garden
      </h1>
      <div class="dashboard__component">
        <ToDoList />
      </div>
      <div class="dashboard__component"><ContactForm /></div>
      <div class="dashboard__component">Slideshow</div>
      <div class="dashboard__component">Time to learn about flowers</div>
      <div class="dashboard__component">All the flowers in the garden</div>
    </div>
  </div>
</template>

<script>
import ToDoList from "../components/ToDo.vue";
import ContactForm from "../components/KontaktOss.vue"; // NB! Husk å endre til engelsknavn 

export default {
  components: {
    ToDoList,
    ContactForm,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>