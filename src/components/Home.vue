<template>
<div>
    <div class="polygon-1">
        <div class="wrapper">
            <section class="welcome-text">
                <div>
                    <h1>Import & Distributie</h1>
                    <p>Met Kwaliteit en Duurzaamheid op het oog</p>
                    <button @click="$router.push('assortiment')" class="cta-products">Bekijk Ons Assortiment!</button>
                    <button @click="$router.push('contact')" class="cta-contact">Contact Ons!</button>
                </div>
            </section>
            <section class="top-brands">
                <img class="image brand-1" :src="image1" alt="YPE">
                <img class="image brand-2" :src="image2" alt="JOYCE">
                <img class="image brand-3" :src="image3" alt="LIBRESSE">
            </section>
        </div>
    </div>
    <div class="wrapper wrapper-small">
        <div class="about">
            <div>
                <p>Firgos Suriname bestaat sinds<br>1965, maar is een toonaangevende<br>importeur en distributeur sinds<br>het jaar 1996</p>
            </div>
            <button @click="$router.push('contact')" class="cta-contact">Lees Meer Over Ons</button>
        </div>
        <div><img class="image image-xl" :src="image4" alt="Firgos Suriname vooraanzicht"></div>
    </div>
    <div class="polygon-2">
        <div class="outer-grid">
            <div class="grid-brand">
                <div class="grid-image"><img class="" :src="imagegrid1" alt="Libresse-UltraThingLongRapidryx10"> </div>
                <div class="grid-image"><img class="" :src="imagegrid2" alt="Libresse-UltraThinRegularCottonlikex10"> </div>
                <div class="grid-image"><img class="" :src="imagegrid3" alt="Pascual-Yogurts"> </div>
                <div class="grid-image"><img class="" :src="imagegrid4" alt="Mavaleiro-Fondant"> </div>
            </div>
            <div class="assortiment">
                <p>een ruim assortiment dat niet<br>alleen bestaat uit lokale maar<br>ook internationale producten!</p>
                <button @click="$router.push('assortiment')" class="cta-products">Bekijk Ons Assortiment!</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ypeimage from '../assets/ype.jpg' 
import libresseimage from '../assets/UltraThinRegularRapidryx10.jpg' 
import joyceimage from '../assets/joyce.jpg' 
import firgosfront from '../assets/front-firgos.jpg' 
import libressegrid1 from '../assets/UltraThingLongRapidryx10.jpg' 
import libressegrid2 from '../assets/UltraThinRegularCottonlikex10.jpg' 
import pascualgrid from '../assets/Pascual-Yogurts(1).png' 
import mavaleirogrid from '../assets/Fondant.jpg' 
export default {
    data (){
        return {
            image1: ypeimage,
            image2: libresseimage,
            image3: joyceimage,
            image4: firgosfront,
            imagegrid1: libressegrid1,
            imagegrid2: libressegrid2,
            imagegrid3: pascualgrid, 
            imagegrid4: mavaleirogrid
        }
    }
}
</script>

<style>
.polygon-1{
  clip-path: polygon(50% 0%, 100% 0, 100% 53%, 57% 100%, 0 100%, 0 0);
  background-color: #F8E3DD;
  height: 100vh;
  width: 100%;
  z-index: 5;
}
.polygon-2{
  clip-path: polygon(0 0, 100% 68%, 100% 100%, 0 100%);
  background-color: #F8E3DD;
  height: 150vh;
  width: 100%;
  z-index: 1;
}
.wrapper{
    width: 90.7%;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.wrapper-small{
    height: 40vh;
}
.welcome-text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.welcome-text > div{
    margin: 0 auto;
}
.welcome-text > div > h1{
    color:#EF4937;
    text-transform: uppercase;
    font-weight: 900;
    text-shadow:0px 0.2px, 0px 0.2px, 0px 0.2px;
    letter-spacing: 0.8px;
    font-size: 1.8rem;
}
.welcome-text > div > p{
    text-transform: uppercase;
    font-weight: 500;
}
button{
    margin: 1rem 0.5rem 0 0;
    padding: 1rem 1.1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    text-transform: uppercase;
    font-weight: 600;
}
.cta-products{
    background: #EF4937;
    color: white;
    border: 0;
    padding: 1.15rem 1.1rem;
}
.cta-contact{
    background: none;
    border: 0.15em solid #EF4937;
    color: #EF4937;
}
.top-brands{
    position: relative;
    margin-top: 4rem;
}
.image{
    border-radius: 1.5rem;
    max-height: 13rem;
    width: 14rem;
    position: absolute;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.brand-1{
    top: 20%;
    right: 10%;
}
.brand-2{
    top: 50%;
    right: 61%;
    z-index: 10;
}
.brand-3{
    top: 35%;
    right: 35%;
}
.about{
    display: grid;
    color: #FFFFFF;
    font-size: 1.4rem;
    font-weight: 900;
    color: #FFFFFF;
    text-transform: uppercase;
    align-content: end;
    justify-items: end;
    padding-right:6rem;
    padding-top: 11rem;
}
.about > button {
    color: #FFFFFF;
    border-color: #FFFFFF;
}
.image-xl{
    position: relative;
    max-height: 25rem;
    width: 23.4rem;
    top: 25%;
    left: 28.5%;

}
.outer-grid{
    padding-top: 28rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: end;
    
}
.grid-brand{
    display: grid;
    grid-template-rows: 1fr 1 fr;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    max-height: 25rem;
    width: 24rem;
    background-color:#FFFFFF;
    border-radius: 1.5rem;
}
.grid-image > img{
    object-fit: cover;
    height: 100%;
    width: 100%;
}
.assortiment{
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    padding: 3rem;
}
.assortiment > p{
    font-size: 1.4rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #F8A88F;
    
}

</style>
