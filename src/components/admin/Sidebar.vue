<template>
    <div class="sidebar">
        <h2>Admin Controls</h2>            
        <router-link class="margin-top" to="/fsbo/produkten">Alle Produkten</router-link>
        <router-link to="/fsbo/produkt-toevoegen">Voeg Produkt toe</router-link>
        <router-link to="/fsbo/home">Bewerk Home</router-link>
        <router-link to="/fsbo/over-ons">Bewerk Over ons</router-link>
        <router-link to="/fsbo/contact">Bewerk Contact</router-link>       
    </div>
</template>

<style scoped>
     .sidebar{
        color: #EF4937;
        /* background-color: #ffffff; */
        padding: 2rem;
        border-radius: 0.5rem;
        height: auto;
     }
    a{
        display: block;
        margin-bottom: 2rem;
        text-decoration: none;
        color: #EF4937;
        font-size: 1.2rem;
    }
    .margin-top{
        margin-top: 2rem;
    }
    .sublink{
        font-size: 1.0rem;
    }
</style>
