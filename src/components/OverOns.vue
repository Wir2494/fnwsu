<template>
<div>
    <div class="polygon-1">
        <div class="svg-icons">
            <img :src="ship" alt="Import Shipping">
            <img :src="crane" alt="Import Crane Port">
            <img :src="truck" alt="Truck Delivery Distribution">
            <img :src="shop" alt="Shop Storage Warehouse Supermarket Distribution">
        </div>
    </div>
    <div class="wrapper"></div>
    <div class="polygon-2"></div>
    <div class="about-container box-style">
        <p class="title"><b>firgos suriname nv</b></p>
        <p>firgos suriname bestaat sinds 1965. de toenmalige activiteiten waren in papier en grafische goederen. geleidelijkerwijs werd de overstap naar consumenten goederen en persoonlijke verzorgingsprodukten gemaakt.</p><br>
        <p>in 1996 werd de volledige overstap gemaakt naar import en distributie van allerhande food en non-food produkten. sinds toen specialiseert firgos suriname nv zich niet alleen in lokale maar ook in internationale produkten.</p><br>
        <p>als importeur en distributeur van welbekende merken zoals libresse, heroi en pascual zijn wij een niet te vergeten deel van de samenleving.</p>
    </div>
    <div class="company-values-container">
        <div class="company-values">
            <div class="missie box-style">
                <p class="title">Missie</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum et ex debitis quaerat temporibus consectetur, laborum odio corrupti eaque praesentium cum iusto mollitia iure sunt beatae fugit fugiat consequatur officia!</p>
            </div>
            <div class="visie box-style">
                <p class="title">Visie</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quasi ratione. Distinctio officia, repellat iure expedita omnis fuga? Excepturi, eos consectetur aut tenetur impedit dignissimos ex dolor enim assumenda pariatur.</p>
            </div>
        </div>
    </div>
    <div class="company-values-container move">
        <div class="company-values grid">
            <div class="missie box-style">
                <p>Wij horen graag van u in geval er vragen zijn</p>
            </div>
            <div class="visie box-style contact">
                <router-link class="cta" to="/contact">Contact Ons!</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ship from '../assets/cargo-ship.svg'
import crane from '../assets/crane.svg'
import truck from '../assets/delivery-truck.svg'
import shop from '../assets/shop.svg'
export default {
    data() {
        return {
            ship: ship,
            crane: crane,
            truck: truck,
            shop: shop
        }
    }
}
</script>

<style scoped>
.box-style{
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.svg-icons{
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    justify-content: center;
    padding-top: 10rem;
    grid-gap: 2rem;
}
img{
    height: 8rem;
    width: 9.5rem;
}
.about-container{
    background-color: #FFFFFF;
    position: absolute;
    width: 65vw;
    top: 60%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    text-transform: uppercase;
    text-align: center;
    padding: 4rem 4rem;
    color: #F8A88F;
    font-weight: 700;
    margin-bottom: 3rem;
}
.title{
    color: #EF4937;
    padding-bottom: 4rem;
    font-size: 1.2rem;
    font-weight: 900;
}
.wrapper{
    height: 50vh;
}
.company-values-container{
    position: absolute;
    width: 75vw;
    top: 140%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    text-transform: uppercase;
    text-align: center;
    background-color: none;
    margin-bottom: 3rem;
}
.company-values{
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
}
.missie{
    background-color: #FFFFFF;
    padding: 4rem 4rem;
    color: #F8A88F;
    font-weight: 700;
}
.visie{
    background-color: #FFFFFF;
    padding: 4rem 4rem;
    color: #F8A88F;
    font-weight: 700;
}
.move{    
    top: 205%;
}
.grid{
    grid-template-columns: 3fr 1fr;
}
.contact{
    background-color: #F8A88F; 
}
.cta{
    color: #FFFFFF;
    text-decoration: none;
}
.polygon-2{
    height: 90vh;
}
</style>
