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
      <div class="dashboard__component"><Slideshow/></div>
      <div class="dashboard__component"><QuizApp/></div>
      <div class="dashboard__component"><Table/></div>
    </div>
  </div>
</template>

<script>
import ToDoList from "../components/ToDo.vue";
import ContactForm from "../components/ContactUs.vue"; 
import Slideshow from "../components/Slideshow.vue";
import QuizApp from '../components/QuizApp.vue';
import Table from '../components/Table.vue';


export default {
  components: {
    ToDoList,
    ContactForm,
    Slideshow,
    QuizApp,
    Table,

  },
};
</script>

<style>
  .dashboard {
    display: flex;
    justify-content: center;
    height: 120vh;
    width: 100vw;
  }
  .dashboard__titleContainer {
    display: flex;	
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dashboard__title {
    color: #F08383;
    font-size: 70px;
    text-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    padding: 6%;
  }
  .dashboard__undertitle {
    font-size: 30px;
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    padding: 5%;
  }
  .dashboard__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 2%;
    row-gap: 2%;
    column-gap: 2%;
  }
  .dashboard__component {
    width: 97%;
    height: 97%;
  }


/* ---- MEDIA QUERY ---- */

@media screen and (max-width: 480px) {
	.dashboard__container {
		grid-template-columns: 1fr;	
	  }

  }
</style>