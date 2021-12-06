<template>
    <footer class="footer">
        <nav class="footer__nav">
            <RouterLink class="footer__page" v-for="page in navigationPages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>
        </nav>
    </footer>
</template>

<script>

    export default {
        computed: {
            navigationPages() {
                return this.$store.getters.getPages;
            }
        } 
    }
</script>

<style>
    .footer {
        display: flex;
        justify-content: center;
        align-items: center ;
        width: 100vw;
        height: 20vh;
        background-color: rgb(87, 85, 85);
        color: var(--light);
    }

    .footer__logo {
        position: absolute;
        left: 0;
        padding: 30px;
        color: var(--light);
        text-decoration: none;
        width: 10%;  
        background-color: red;

    }
    .footer__logo-img {
        width: 10%;
        height: 10%;
        padding: 0.5em;
        
    }
    .footer__page {
        font-family: arial;
        text-decoration: none;
        color: var(--light);
        padding-left: 15px;
        padding-right: 15px;
    }
    .footer__page:hover {
        color: #F08383;
        text-decoration: underline 2px solid;
    }
</style>