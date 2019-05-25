<template>
<div>
    <div class="polygon-1"></div>
    <div class="wrapper"></div>
    <div class="polygon-2"></div>
    <div class="contact-box height-box-1 box-style">
        <p>Wilt u in contact komen met ons dan zijn wij bereikbaar voor u vanaf<br> maandag tot en met vrijdag van 7uur - 16uur<br>en op de zaterdag van 7uur tot 13uur.</p>
    </div>
    <div class="contact-box height-box-2 box-style">
        <p>Heeft u vragen over onze diensten, onze assortiment of wilt u<br>ons bereiken om enig ander reden?</p>
    </div>
    <div class="contact-box height-box-3 box-style">
        <div class="grid-view">
            <img :src="call" alt="Call Firgos Suriname">
            <p>481567</p>
            <p>486400</p>
            <p>480406</p>
            <p>480459</p>
        </div>
    </div>
    <div class="adres-container height-box-4">
        <div class="adres-wrapper">
            <div>
                <p>Adres <span><img :src="location" alt="location icon Firgos Suriname"></span></p>
                <p>Industrie weg zuid 16</p>
                <p>Paramaribo</p>
                <p>Suriname</p>
                <p>Zuid-Amerika</p>
            </div>
            <img class="box-style" :src="adres" alt="Firgos Suriname adres">
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
import call from '../assets/telephone.svg';
import adres from '../assets/adres.jpg';
import location from '../assets/location.svg';

export default {
    data() {
        return {
            call: call,
            adres: adres,
            location: location
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
</style>
