<template>  
    <div class="header">
        <RouterLink :to="{ name: 'home' }" class="header__logo">Logo</RouterLink>
        <nav class="header__nav">
            <RouterLink class="header__page" v-for="page in navigationPages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>
        </nav>
    </div>
    
</template>
<script>
    export default {
        computed: {
            navigationPages() {
                return this.$store.getters.getPages;        // get logic from getPages in store.js
            }
        }
    }
</script>

<style>
    .header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 8vh;
        background-color: var(--light);
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