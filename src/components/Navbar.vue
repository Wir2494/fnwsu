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
                    <button v-if="isLoggedIn" v-on:click="logout">Logout</button>
                </nav>
            </div>
        </div>
    </div>

</template>

<script>
import firebase from 'firebase'
import image from '../assets/firgos5.png'
export default {
    name: 'navbar',
    data() {
        return {
            image: image,
            isLoggedIn: false,
            currentUser: false
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods: {
        logout() {
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.go({path: this.$router.path});
            });
        }
    }

}
</script>

<style scoped>
button{
    background: #EF4937;
    border-radius: 0.5rem;
    border: 1px solid #EF4937;
    color: #ffffff;
    padding: 0.5rem 0.9rem;
    font-weight: 600;
    text-transform: uppercase;

}
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
