<template>
    <footer class="footer">
        <RouterLink :to="{ name: 'home' }" class="footer__logo">f.logo</RouterLink>
        <nav class="header__nav">
            <RouterLink class="footer__page" v-for="page in pages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>
        </nav>
    </footer>
</template>

<script>

    export default {
        data() {
            return {  
                pages: [                                                         //array for navigation pages
                    {title: 'To do list', id: 'to-do-list'},                    // id for routerlink => page_id
                    {title: 'Help from experts', id: 'help-from-experts'},  
                    {title: 'Flower slideshow', id: 'flower-slideshow'},
                    {title: 'Flower quiz', id: 'flower-quiz'},
                    {title: 'Flower overview', id: 'flower-overview'}
                ]
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
        color: white;
    }

    .footer__logo {
        position: absolute;
        left: 0;
        padding: 30px;
        color: var(--light);
        text-decoration: none;
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