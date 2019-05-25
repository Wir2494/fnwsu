<template>
    <div>
        <div class="nav-wrapper">
            <div class="navbar">
                <div class="logo">
                    <img class="logo-image" v-bind:src="image" alt="FIRGOS SURINAME NV IMPORTEUR EN DISTRIBUTEUR LOGO">
                </div>       
                <nav>
                    <router-link to="/" exact>Home</router-link>
                    <router-link to="/assortiment">Assortiment</router-link>
                    <router-link to="/over-ons">Over Ons</router-link>
                    <router-link to="/contact">Contact</router-link>
                </nav>
            </div>
        </div>
    </div>

</template>

<script>
import image from '../assets/firgos5.png'
export default {
    data() {
        return {
            image: image
        }
    }

}
</script>

<style scoped>
    a.router-link-active{
        border-bottom: 0.2rem solid #F8A88F;
    }
    .logo{
        position: relative;
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        align-content: center;
    }
    .nav-wrapper{
        background-color: #F8E3DD;
        position: absolute;
        left: 50%;
        width: 90.7%;
        z-index: 1000;
        margin-left: -45.35%;
        padding: 0 auto;
    }
    .navbar{
       
       padding-top: 2rem;
       display: grid;
       grid-auto-flow: column;
    }
    .logo-image{
        height: 60px;
        max-width: 100%;
        z-index: 10;
    }
    nav{
        display: grid;
        grid-auto-flow: column;
        grid-gap: 40px;
        justify-content: end;
        align-content: center;
    }
    nav a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.3rem;
        color: #EF4937;
        font-weight: 900;
    }
</style>
