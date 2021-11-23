<template>
  <div class="dashboard">
    <div class="dashboard__container">
      <h1 class="dashboard__component dashboard__title">
        Beautiful <br />
        garden
      </h1>
      <div class="dashboard__component dashboard__toDoList">
        <ToDoList />
      </div>
      <div class="dashboard__component">Help from flower experts</div>
      <div class="dashboard__component">Slideshow</div>
      <div class="dashboard__component">Time to learn about flowers</div>
      <div class="dashboard__component">All the flowers in the garden</div>
    </div>
  </div>
</template>

<script>
import ToDoList from "../components/ToDo.vue";

export default {
  components: {
    ToDoList,
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>