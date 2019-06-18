<template>
    <div>
        <div class="polygon-1"></div>
        <div class="wrapper"></div>
        <div class="polygon-2"></div>
        <div class="content-wrapper">
            <div class="category-container">
                <div class="brand-wrapper" ref="brand">
                    <button id="left-button" @click="swipeLeft"><img :src="leftArrow" alt=""></button>
                    <ul id="content" ref="content">
                        <p @click="resetFilteredProductsArray">Alle Produkten</p>
                        <li
                        v-for="uniqueBrand in uniqueBrands"
                        v-bind:key="uniqueBrand"
                        @click="filterByBrand">
                            {{uniqueBrand}}
                        </li>
                    </ul>
                    <button style="float: left;" id="right-button" @click="swipeRight"><img :src="rightArrow" alt=""></button>
                </div>
            </div>
            <div class="grid-product-wrapper">
                <ul>
                    <li v-for="product in visibleProducts" v-bind:key="product.id">
                        <router-link v-bind:to="{name:'assortiment-product', params:{product_id: product.product_id}}"> 
                            <div><img :src="product.imageUrl" alt=""></div>
                            <router-link to="/assortiment">{{product.name}}</router-link>
                        </router-link>
                    </li>
                </ul>
                <Pagination 
                v-bind:filteredProducts = "filteredProducts"
                v-on:page:update = "updatePage"
                v-bind:pageNumber = "pageNumber"
                v-bind:pageSize = "pageSize"></Pagination>
            </div>

        </div>

    </div>
</template>

<script>
import { fb, db } from './firebaseinit'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'
import Pagination from './Pagination.vue'
export default {
    name: 'Assortiment',
    components: {
        Pagination
    },
    data() {
        return {
            products: [],
            filteredProducts: [],
            pageNumber: 0,
            pageSize: 20,
            visibleProducts: [],
            rightArrow: rightArrow,
            leftArrow: leftArrow
        }
    },
    created () {
        db.collection('products').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'product_id': doc.data().product_id,
                    'brand': doc.data().brand,
                    'name': doc.data().name,
                    'imageUrl': doc.data().imageUrl
                }
                this.products.push(data)
            })
        })
        this.filteredProducts = this.products
    },
    computed: {
        uniqueBrands() {
            let length = this.products.length
            let uniqBrands = []
            for(let i = 0; i < length; i++ ) {
                if(uniqBrands.indexOf(this.products[i].brand) === -1){
                    uniqBrands.push(this.products[i].brand)
                }
            }
            return uniqBrands
        }
    },
    beforeUpdate() {
        this.updateVisibleProducts()
    },
    methods: {
        scrollTo(element, scrollPixels, duration) {
        const scrollPos = element.scrollLeft;
        // Condition to check if scrolling is required
        if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) 
            {// Get the start timestamp
                const startTime =
                "now" in window.performance
                    ? performance.now()
                    : new Date().getTime();
                
                function scroll(timestamp) {
                //Calculate the timeelapsed
                const timeElapsed = timestamp - startTime;
                //Calculate progress 
                const progress = Math.min(timeElapsed / duration, 1);
                //Set the scrolleft
                element.scrollLeft = scrollPos + scrollPixels * progress;
                //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
                if (timeElapsed < duration) {
                    //Request for animation
                    window.requestAnimationFrame(scroll);
                } else {
                    return;
                }
                }
                //Call requestAnimationFrame on scroll function first time
                window.requestAnimationFrame(scroll);
            }
        },
        swipeLeft() {
        const content = this.$refs.content;
        this.scrollTo(content, -300, 800);
        },
        swipeRight() {
        const content = this.$refs.content;
        this.scrollTo(content, 300, 800);
        },
        filterByBrand(event) {
            let brandName = event.target.innerText
            let length = this.products.length
            let filteredByBrand = []
            for(let i = 0; i < length; i++){
                if(brandName.toLowerCase() === this.products[i].brand.toLowerCase()){
                    filteredByBrand.push(this.products[i])
                }
            }
            this.filteredProducts = filteredByBrand
            this.updateVisibleProducts()
        },
        resetFilteredProductsArray(){
            this.filteredProducts = this.products
            this.updateVisibleProducts()
        },
        updateVisibleProducts(){
            this.visibleProducts = this.filteredProducts.slice(this.pageNumber * this.pageSize,(this.pageNumber * this.pageSize) + this.pageSize)

            if (this.visibleProducts.length == 0 && this.pageNumber > 0) {
                this.updatePage(this.pageNumber - 1)
            }
        },
        updatePage(pageNumber){
            this.pageNumber = pageNumber
            this.updateVisibleProducts() 
            const brand = this.$refs.brand;
            this.scrollTo(brand,{
                top: 0,
                left: 0
            });         
        }
    }

}
</script>

<style scoped>
.wrapper{
    height: 25vh;
}
.polygon-2{
    height: 120vh;
}
img{
    width: 100%;
    height: 10rem;
    object-fit: contain;
    border: 1px solid #beb6b6;
    border-radius: 0.5rem;
}
.content-wrapper{
    position: absolute;
    width: 70%;
    top: 22%;
    left: 50%;
    transform: translate(-50%,0%)
}
.brand-wrapper{
    text-transform: uppercase;
    font-weight: 1rem;
    display: grid;
    grid-auto-flow: column;
}
.brand-wrapper > button{
    background: none;
    border: none;
}
.brand-wrapper > button:focus{
    outline: none;
}
.brand-wrapper > button > img{
    height: 2rem;
    width: 2rem;
    border: none;
    margin: 1rem;
}
.brand-wrapper > ul {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 0.7rem;
    overflow: hidden;
    white-space: nowrap;
    padding: 0.5rem;
}
.brand-wrapper > ul > li,p{
    padding: 1rem 1rem;
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    list-style: none;
    color: #F8A88F;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
}
.grid-product-wrapper{
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    margin-top: 4rem;
}
.grid-product-wrapper > ul{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap: 1rem;
    justify-items: center;
    padding: 2rem;
}
.grid-product-wrapper > ul > li{
    list-style: none;
    margin-bottom: 1rem;
}
a{
    display: block;
    text-align: center;
    text-transform: uppercase;
    color: #F8A88F;
    font-weight: 600;
    margin-top: 0.5rem;
    text-decoration: none;
}
@media (min-width: 1370px){
    img{
        height: 15rem;
    }
    .grid-product-wrapper > ul{
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));    
    }
    .polygon-2{
        height: 80vh;
    }
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .polygon-2{
      height: 140vh;
  }
}
@media (max-width: 1090px) {
  img{
        height: 10rem;
    }
    .grid-product-wrapper > ul{
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));    
    }
    .polygon-2{
        height: 80vh;
    }
    .grid-product-wrapper{
        font-size: 0.7rem;
    }
    .content-wrapper{
    top: 15%;
    }
    .wrapper{
        height: 100vh;
    }
    .polygon-2{
        height: 130vh;
    }
}
@media (max-width: 840px) {
    .wrapper{
        height: 140vh;
    }
}
@media (max-width: 1090px) {
    .wrapper{
        height: 300vh;
    }
    .polygon-2{
        height: 400vh;
    }
}
</style>
