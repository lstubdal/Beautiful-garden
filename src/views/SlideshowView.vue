<template>
    <div class="slideshow__container">
        <Slideshow />
    </div>
</template>

<script>

    import Slideshow from '../components/Slideshow.vue';
    
     export default {
         components: { 
             Slideshow 
        }
    }
</script>

<style>
    .slideshow__container {
        height: 85vh;
        width: 100vw;
    }
</style>