<template>
<div>
    <div class="polygon-1">
        <div class="wrapper">
            <section class="welcome-text">
                <div>
                    <h1>{{slogan}}</h1>
                    <p>{{ondertitel}}</p>
                    <button @click="$router.push('assortiment')" class="cta-products">Bekijk Ons Assortiment!</button>
                    <button @click="$router.push('contact')" class="cta-contact">Contact Ons!</button>
                </div>
            </section>
            <section class="top-brands">
                <div class="brand-1"><img :src="fototopmerk1" alt=""></div>
                <div class="brand-2"><img :src="fototopmerk2" alt=""></div>
                <div class="brand-3"><img :src="fototopmerk3" alt=""></div>
            </section>
        </div>
    </div>
    <div class="wrapper wrapper-small">
        <div class="about">
            <div>
                <p>{{overonsintro}}</p>
            </div>
            <button @click="$router.push('contact')" class="cta-contact">Lees Meer Over Ons</button>
        </div>
        <div><img class="image image-xl" :src="fotooveronsintro" alt="Firgos Suriname vooraanzicht"></div>
    </div>
    <div class="polygon-2">
        <div class="outer-grid">
            <div class="grid-brand">
                <div class="grid-image"><img class="" :src="assortimentfoto1" alt=""> </div>
                <div class="grid-image"><img class="" :src="assortimentfoto2" alt=""> </div>
                <div class="grid-image"><img class="" :src="assortimentfoto3" alt=""> </div>
                <div class="grid-image"><img class="" :src="assortimentfoto4" alt=""> </div>
            </div>
            <div class="assortiment">
                <p>{{assortimentintro}}</p>
                <button @click="$router.push('assortiment')" class="cta-products">Bekijk Ons Assortiment!</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { fb, db } from './firebaseinit'

export default {
    data (){
        return {
            slogan: null,
            ondertitel: null,
            overonsintro: null,
            assortimentintro: null,
            fototopmerk1: null,
            fototopmerk2: null,
            fototopmerk3: null,
            fotooveronsintro: null,
            assortimentfoto1: null,
            assortimentfoto2: null,
            assortimentfoto3: null,
            assortimentfoto4: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('home').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.slogan = doc.data().slogan
                    vm.ondertitel = doc.data().ondertitel
                    vm.overonsintro = doc.data().overonsintro
                    vm.assortimentintro = doc.data().assortimentintro
                    vm.fototopmerk1 = doc.data().fototopmerk1
                    vm.fototopmerk2 = doc.data().fototopmerk2
                    vm.fototopmerk3 = doc.data().fototopmerk3
                    vm.fotooveronsintro = doc.data().fotooveronsintro
                    vm.assortimentfoto1 = doc.data().assortimentfoto1
                    vm.assortimentfoto2 = doc.data().assortimentfoto2
                    vm.assortimentfoto3 = doc.data().assortimentfoto3
                    vm.assortimentfoto4 = doc.data().assortimentfoto4
                })
            })
        })
    },
    watch: {
        '$route': 'fetchHomeContent'
    },
    methods: {
        fetchHomeContent () {
            db.collection('home').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    this.slogan = doc.data().slogan
                    this.ondertitel = doc.data().ondertitel
                    this.overonsintro = doc.data().overonsintro
                    this.assortimentintro = doc.data().assortimentintro
                    this.fototopmerk1 = doc.data().fototopmerk1
                    this.fototopmerk2 = doc.data().fototopmerk2
                    this.fototopmerk3 = doc.data().fototopmerk3
                    this.fotooveronsintro = doc.data().fotooveronsintro
                    this.assortimentfoto1 = doc.data().assortimentfoto1
                    this.assortimentfoto2 = doc.data().assortimentfoto2
                    this.assortimentfoto3 = doc.data().assortimentfoto3
                    this.assortimentfoto4 = doc.data().assortimentfoto4
                })
            })
        },
    }
}
</script>

<style scoped>
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
.top-brands > div{
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1.5rem;
    height: 13rem;
    width: 14rem;
    position: absolute;
    
}
.top-brands > div > img{
    height: 13rem;
    width: 14rem;
    border-radius: 1.5rem;
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
    grid-template-rows: 1fr 1fr;
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
