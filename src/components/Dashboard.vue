<template>
  <div class="dashboard">
    <div class="dashboard__container">
      <h1 class="dashboard__title">
        Beautiful <br /> garden 
        <p class="dashboard__undertitle">By Sølvi &#38; Lotte</p>
      </h1>

      <div class="dashboard__component"><ToDo /></div>   
      <div class="dashboard__component"><ContactForm /></div>
      <div class="dashboard__component"><Slideshow/></div>
      <div class="dashboard__component"><QuizApp/></div>
      <div class="dashboard__component"><Table/></div>

      <Collapsible :title="this.componentTitles.toDo" class="dashboard__component--mobile"> 
        <ToDo /> 
      </Collapsible>

      <Collapsible :title="this.componentTitles.contact" class="dashboard__component--mobile" > 
        <ContactForm /> 
      </Collapsible>

      <Collapsible :title="this.componentTitles.slideshow" class="dashboard__component--mobile" > 
        <Slideshow /> 
      </Collapsible>

      <Collapsible :title="this.componentTitles.quiz" class="dashboard__component--mobile" > 
        <QuizApp /> 
      </Collapsible>

      <Collapsible :title="this.componentTitles.table" class="dashboard__component--mobile" > 
        <Table /> 
      </Collapsible>
    </div>
  </div>
</template>

<script>
  import ToDo from "../components/ToDo.vue";
  import ContactForm from "../components/ContactUs.vue"; 
  import Slideshow from "../components/Slideshow.vue";
  import QuizApp from '../components/QuizApp.vue';
  import Table from '../components/Table.vue';
  import Collapsible from '../components/Collapsible.vue'

  export default {
      components: {
        ToDo,
        ContactForm,
        Slideshow,
        QuizApp,
        Table,
        Collapsible
      },

      data() {
        return {
          componentTitles: { 
            toDo: 'flowerstuff to do',
            contact: 'help from experts',
            slideshow: 'flower slideshow',
            quiz: 'time to learn about flowers',
            table: 'all the flowers'
          }
        }
      }
    };
</script>

<style>
  .dashboard {
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  .dashboard__titleContainer {
    display: flex;	
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dashboard__title {
    color: var(--main-color);
    font-size: 70px;
    text-shadow: var(--text-shadow), var(--text-border-around);
    text-align: center;
    padding: 6%;
  }

  .dashboard__undertitle {
    font-size: 1.3rem;
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    padding: 5%;
    color: black;
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
    display: block;
    width: 97%;
    height: 97%;
  }
  
  .dashboard__component--mobile {
    display: none;
  }


/* ---- MEDIA QUERY ---- */

@media screen and (max-width: 800px) {
  .dashboard {
    flex-direction: column;
  }
	.dashboard__container {
		display: flex;
    flex-direction: column;
    justify-content: center;	
	}
  .dashboard__component {
    display: none;
  }
  .dashboard__component--mobile {
    display: block;
  }
  .dashboard__title {
    padding: 0;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 45px;
  }
}
</style>