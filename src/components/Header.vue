<template>  
    <div class="header">
        <RouterLink :to="{ name: 'home' }" class="header__logo">
            <img class="header__logo-img" src="../../public/img/logo.svg" alt="flower logo"/>
        </RouterLink>

        <nav class="header__nav--mobile">       <!-- get hamburger component, only visible from 800px screen width -->
            <HamburgerMenu />
        </nav>

        <nav class="header__nav">
            <ul>
                <li >
                    <RouterLink class="header__page" v-for="page in navigationPages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>   <!-- Use routerlink to navigate, using :to prop to specify location -->
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import HamburgerMenu from '../components/HamburgerMenu.vue';

    export default {
        components:  {
            HamburgerMenu
        },

        computed: {
            navigationPages() {
                return this.$store.getters.getPages;        // get logic from getPages method in store.js
            }
        }
    }
</script>

<style>
    .header {
        display: flex;
        flex-grow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10vh;
        background-color: var(--light);
    }

    .header__logo-img {
        width: 90%;
        height: 90%;
        padding: 0.5em;
    } 

    .header__list {
        list-style: none;
    }

    .header__nav {
        width: 70%;
    }

    .header__nav li {
        list-style: none;
    }

    .header__nav--mobile {
        display: none;
    }

    .header__page {
        padding-left: 15px;
        padding-right: 15px;
        color: var(--main-color);
        text-decoration: none;
    }

    .header__page:hover {
        text-decoration: underline solid 2px;
    }

    /* ---- MEDIA QUERY ---- */
    @media  screen and (max-width: 1140px) {
        .header__nav--mobile {
            list-style: none;
            display: block;
        }

        .header__nav {
            margin: 0;
            display: none;
        }
    }
</style>