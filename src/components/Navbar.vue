<template>
    <div>
        <div class="nav-wrapper">
            <div class="navbar">
                <div class="logo">
                    <img class="logo-image" v-bind:src="image" alt="FIRGOS SURINAME NV IMPORTEUR EN DISTRIBUTEUR LOGO">
                </div>       
                <nav class="menu">
                    <router-link to="/" exact>Home</router-link>
                    <router-link to="/assortiment">Assortiment</router-link>
                    <router-link to="/over-ons">Over Ons</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <button v-if="isLoggedIn" v-on:click="logout">Logout</button>
                </nav>
                <div class="span">
                    
                </div>
                <nav role="navigation" class="hamburger-menu">
                    <div id="menuToggle">
                        <input type="checkbox">
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <router-link to="/" exact>Home</router-link><br><br>
                            <router-link to="/assortiment">Assortiment</router-link><br><br>
                            <router-link to="/over-ons">Over Ons</router-link><br><br>
                            <router-link to="/contact">Contact</router-link><br><br>
                            <button v-if="isLoggedIn" v-on:click="logout">Logout</button>
                        </ul>
                    </div>
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
nav{
    display: block;
}
.hamburger-menu{
    display: none;
}
span{
    display: none;
}
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
@media (max-width: 1000px) {
    .hamburger-menu{
        display: block;
    }
    .menu{
        display: none;
    }
    #menuToggle
    {
    display: block;
    position: relative;
    top: 15px;
    left: 15%;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    }
    #menuToggle input
    {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    
    cursor: pointer;
    
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    
    -webkit-touch-callout: none;
    }
    #menuToggle span
    {
    display: grid;
    align-content: center;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    
    background: #EF4937;
    border-radius: 3px;
    
    z-index: 1;
    
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;
    }

    #menuToggle span:first-child
    {
    transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2)
    {
    transform-origin: 0% 100%;
    }

    /* 
    * Transform all the slices of hamburger
    * into a crossmark.
    */
    #menuToggle input:checked ~ span
    {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
    }

    /*
    * But let's hide the middle one.
    */
    #menuToggle input:checked ~ span:nth-last-child(3)
    {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
    * Ohyeah and the last one should go the other direction
    */
    #menuToggle input:checked ~ span:nth-last-child(2)
    {
    transform: rotate(-45deg) translate(0, -1px);
    }

    /*
    * Make this absolute positioned
    * at the top left of the screen
    */
    #menu
    {
    position: absolute;
    width: 100px;
    margin: -100px 0px 0 -175px;
    padding: 50px;
    padding-top: 125px;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    background-color: #F8A88F;
    opacity: 0.5;
    /* to stop flickering of text in safari */
    
    transform-origin: 0% 0%;
    transform: translate(0, -100%);
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li
    {
    padding: 10px 0;
    font-size: 22px;
    }

    /*
    * And let's slide it in from the left
    */
    #menuToggle input:checked ~ ul
    {
    transform: none;
    }
}
</style>
