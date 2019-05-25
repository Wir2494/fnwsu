<template>
    <div>
        <footer class="footer">
            <div class="footer-wrapper">
                <!-- <div class="logo">
                    
                </div> -->
                <div class="about-preview-text">
                    <div>
                        <img class="logo-image" v-bind:src="image" alt="FIRGOS SURINAME NV IMPORTEUR EN DISTRIBUTEUR LOGO">
                        <p>als importeur en distributeur<br>van de welbekende merk libresse<br>en nog vele anderen zijn wij...<br>
                            <router-link to="/over-ons">lees meer over ons>></router-link>
                        </p>
                    </div>
                    
                </div>
                <div class="adres">
                    <ul>
                        <li class="underline">Adres</li>
                        <li>Industrie weg zuid #16</li>
                        <li>Paramaribo</li>
                        <li>Suriname</li>
                        <li>Zuid-Amerika</li>
                    </ul>
                </div>
                <div class="contact-details">
                    <div>
                        <ul>
                            <li class="underline">Telefoon</li>
                            <li>481-567</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li class="underline">Openingstijden</li>
                            <li>Ma/vrij: 7u - 16u</li>
                            <li>Zat: 7u - 13u</li>
                        </ul>
                    </div>
                </div>
            </div>   
            <div class="copyright">
                <p>FIRGOS - SURINAME NV - 2019&copy;</p>
            </div>
        </footer>
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
.footer{
    background-color: #9D9A9A;
    color: #F8E3DD;
    font-size: 1rem;
    line-height: 150%;
    font-weight: 900;
    text-transform: uppercase;
}
.footer-wrapper{
    display: grid;
    grid-auto-flow: column;
    padding: 5rem 0;
}
.logo-image{
    height: 60px;
    max-width: 100%;
    margin-left: 3.9rem;
}
.about-preview-text > div{
    display: grid;
    grid-auto-flow: column;
}
.footer a{
    color: #EF4937;
    text-decoration: none;
    display: block;
    margin-top: 1.5rem;
}
ul{
    list-style-type: none;
}
.underline{
    display: block;
    border-bottom: 2px solid  #F8E3DD;
    width: 9rem;
}
.copyright{
    background-color: #888484;
    color: black;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 0.8rem;
    text-align: center; 
}
</style>
