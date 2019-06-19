<template>
<div>
    <div class="polygon-1"></div>
    <div class="wrapper"></div>
    <div class="polygon-2"></div>
    <div class="contact-box height-box-1 box-style">
        <p>{{openingstijden}}</p>
    </div>
    <div class="contact-box height-box-2 box-style">
        <p>{{nummercta}}</p>
    </div>
    <div class="contact-box height-box-3 box-style">
        <div class="grid-view">
            <img :src="call" alt="Call Firgos Suriname">
            <p>{{contactnummer1}}||</p>
            <p>{{contactnummer2}}||</p>
            <p>{{contactnummer3}}||</p>
            <p>{{contactnummer4}}||</p>
        </div>
    </div>
    <div class="adres-container height-box-4">
        <div class="adres-wrapper">
            <div>
                <p>Adres <span><img :src="location" alt="location icon Firgos Suriname"></span></p>
                <p>{{straatennummer}}</p>
                <p>{{distrikt}}</p>
                <p>{{land}}</p>
                <p>{{continent}}</p>
            </div>
            <img class="box-style" :src="routefoto" alt="Firgos Suriname adres">
        </div>
    </div>
    <div class="contact-box height-box-5 box-style">
        <p>Stuur ons een bericht!</p>
        <form action="https://formspree.io/email@domain.tld" method="POST">
            <input type="text" placeholder="NAAM...">
            <input type="email" placeholder="EMAIL ADRES">
            <input type="number" placeholder="TELEFOON NUMMER">
            <textarea name="subject" placeholder="TYP JOUW BERICHT!.."></textarea>
            <input type="submit" value="Verstuur">
        </form>
    </div>
</div>
</template>

<script>
import { fb, db } from './firebaseinit'
import call from '../assets/telephone.svg';
import location from '../assets/location.svg';

export default {
    data() {
        return {
            call: call,
            location: location,
            straatennummer: null,
            openingstijden: null,
            nummercta: null,
            land: null,
            distrikt: null,
            continent: null,
            contactnummer1: null,
            contactnummer2: null,
            contactnummer3: null,
            contactnummer4: null,
            routefoto: null,
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('contact').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.straatennummer = doc.data().straatennummer
                    vm.openingstijden = doc.data().openingstijden
                    vm.nummercta = doc.data().nummercta
                    vm.land = doc.data().land
                    vm.distrikt = doc.data().distrikt
                    vm.continent = doc.data().continent
                    vm.contactnummer1 = doc.data().contactnummer1
                    vm.contactnummer2 = doc.data().contactnummer2
                    vm.contactnummer3 = doc.data().contactnummer3
                    vm.contactnummer4 = doc.data().contactnummer4
                    vm.routefoto = doc.data().routefoto
                })
            })
        })
    },
    watch: {
        '$route': 'fetchContactContent'
    },
    methods: {
        fetchContactContent () {
            db.collection('contact').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    this.straatennummer = doc.data().straatennummer
                    this.openingstijden = doc.data().openingstijden
                    this.nummercta = doc.data().nummercta
                    this.land = doc.data().land
                    this.distrikt = doc.data().distrikt
                    this.continent = doc.data().continent
                    this.contactnummer1 = doc.data().contactnummer1
                    this.contactnummer2 = doc.data().contactnummer2
                    this.contactnummer3 = doc.data().contactnummer3
                    this.contactnummer4 = doc.data().contactnummer4
                    this.routefoto = doc.data().routefoto
                })
            })
        }
    }
    
}
</script>

<style scoped>
.wrapper{
    height: 50vh;
}
.polygon-2{
    height: 190vh;
}
.box-style{
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.height-box-1{
    top: 25%;
}
.height-box-2{
    top: 65%;
}
.height-box-3{
    top: 105%;
}
.height-box-4{
    top: 150%;
}
.height-box-5{
    top: 245%;
}
.contact-box{
    background-color: #FFFFFF;
    position: absolute;
    width: 65vw;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    text-transform: uppercase;
    text-align: center;
    padding: 4rem 4rem;
    color: #EF4937;
    font-weight: 700;
    margin-bottom: 3rem;
}
.grid-view{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
}
.grid-view > img{
    height: 5rem;
    width: 5rem;
}
.adres-container{
    position: absolute;
    width: 65vw;
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
.adres-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 5rem;
}
.adres-wrapper > div > p > span > img{
    height: 1rem;
    width: 1rem;
}
.adres-wrapper > img{
    height: 30rem;
    width: 30rem;
}
form{
    display: grid;
    justify-content: space-around;
    grid-gap: 1rem;
    padding-top: 1rem;
}
input, ::placeholder, textarea{
    font-size: 1.1rem;
    color: #f8a88f;
    border-radius: 0.5rem;
    padding: 0.6rem;
}
input, textarea{
    border: 1px solid #CCCCCC;
}
input[type=submit]{
    background-color: white;
    border: 1px solid #EF4937;
    padding: 0.7rem;
    color: #EF4937;
    text-transform: uppercase;
    font-weight: 550;
}
@media (min-width: 1370px){
    .height-box-1{
    top: 35%;
    }
    .height-box-2{
        top: 65%;
    }
    .height-box-3{
        top: 105%;
    }
    .height-box-4{
        top: 140%;
    }
    .height-box-5{
        top: 215%;
    }
    .wrapper{
        height: 40vh;
    }
    .polygon-2{
        height: 130vh;
    }
}
@media (max-width: 1000px){
    .adres-wrapper{
    grid-template-columns: 1fr;
    }
    .adres-wrapper > img{
        height: 20rem;
        width: 20rem;
    }
}
@media (max-width: 400px){
    .contact-box{
        width: 86vw;
        left: 50%;
        padding: 2rem 1rem;
    }
    .height-box-1{
        top: 35%;
    }
    .height-box-2{
        top: 77%;
    }
    .height-box-3{
        top: 111%;
    }
    .height-box-4{
        top: 150%;
    }
    .adres-container{
        padding: 0;
    }
    .height-box-5{
        top: 260%;
    }
    .polygon-2{
        height: 213vh;
    }
    .grid-view > img{
        height: 2rem;
    }
    .adres-wrapper > img{
        height: 20rem;
        width: 16rem;
    }
}
</style>
