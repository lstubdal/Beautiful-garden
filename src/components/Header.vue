<template>  
    <div class="header">
        <RouterLink :to="{ name: 'home' }" class="header__logo">Logo</RouterLink>
        <nav class="header__nav">
            <RouterLink class="header__page" v-for="page in pages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>
        </nav>
    </div>
    
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
    .header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10vh;
        background-color: white;
        padding: 30px;
    }
    .header__logo {
        flex-grow: 1;
        text-decoration: none;
        color: var(--dark);
    }
    .header__page {
        padding-left: 15px;
        padding-right: 15px;
        color: #F08383;
        text-decoration: none;
    }
    .header__page:hover {
        text-decoration: underline solid 2px;
    }

</style>