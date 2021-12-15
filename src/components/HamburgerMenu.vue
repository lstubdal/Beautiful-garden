<template>
    <div class="hamburger">
        <button @click="displayHamburger" aria-label="hamburger menu">
            <img class="hamburger__img" 
             src="/img/hamburger.svg" 
             alt="hamburger menu"/>
        </button>

        <nav class="hamburger__nav" v-if="this.hamburgerVisible">   <!-- show menu when hamburger button clicked -->
            <ul>
                <li>
                    <RouterLink class="hamburger__page" v-for="page in navigationPages" :to="{ name: page.title, params: {page_id: page.id }}">{{ page.title }}</RouterLink>    <!-- same navigation logikk as header and footer -->
                </li>
            </ul> 
        </nav>
    </div>
</template>

<script>
    export default {
        computed: {
            navigationPages() {
                return this.$store.getters.getPages;        /* same logic as header and footer */
            }
        },

        data() {
            return {
                hamburgerVisible: false     /* variable to controll hamburger status */
                
            }
        },
        
        methods: {
            displayHamburger() {
                this.hamburgerVisible = !this.hamburgerVisible         /* switch variable status based on hamburger is clicked or not */
            }
        }
    }
</script>


<style>
    .hamburger {
        padding: 1em;
    }

    .hamburger__img {
        cursor: pointer;
    }

    .hamburger__nav {
        position: absolute;     /* to be placed outside headerbox */
        right: 0;
        max-width: 190px;
        min-width: 180px;
        padding: 1.3em;
        border-radius: 10px;
        line-height: 1.6em;
        background-color: var(--main-color);
    }
    .hamburger__nav ul {
        list-style: none;
    }
    
    .hamburger__page {
        display: flex;
        flex-direction: column;
        color: var(--dark);
        text-decoration: none;
    }
 
    .hamburger__page:hover {
        color: var(--light);
        text-decoration: underline solid 2px var(--light);
    }
</style>