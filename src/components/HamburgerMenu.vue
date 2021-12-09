<template>
    <div class="hamburger">
        <img class="hamburger__img" src="/img/hamburger.svg" alt="hamburger menu"/>

        <nav class="hamburger__nav">
<!--             <ul>
                <li class="hamburger__list">
                    <RouterLink class="header__page" v-for="page in navigationPages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>
                </li>
            </ul> -->
        </nav>
    </div>
    <slot />
</template>

<script>
    export default {
        computed: {
            navigationPages() {
                return this.$store.getters.getPages;
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>


<style>
    .hamburger {
        height: 100%;
        width: 100%;
        padding-left: 20px;
        cursor: pointer;
        margin-top: 55%;
    }

    .hamburger__img {
        width: 20%;
        height: 20%;
    }

    .hamburger__list {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        list-style: none;
    }
    
</style>