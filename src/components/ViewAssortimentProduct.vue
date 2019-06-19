<template>
<div>
    <div class="polygon-1"></div>
        <div class="product-view-wrapper">
            <div class="product-view">
                <div><img :src="imageUrl" alt=""></div>
                <div class="product-detail">
                    <div class="product-text">
                        <h4>Merk: {{brand}}</h4>
                        <p><b>Naam: </b>{{name}}</p>
                        <p><b>Categorie: </b>{{category}}</p>
                        <p><b>Beschrijving: </b>{{desc}}</p>
                    </div>
                    <div class="product-controls">
                        <router-link to="/assortiment">Terug</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { fb, db } from './firebaseinit'
export default {
    name: 'assortiment-product',
    data () {
        return {
            product_id: null,
            name: null,
            desc: null,
            category: null,
            brand: null,
            imageUrl: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('products').where('product_id', '==', to.params.product_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.product_id = doc.data().product_id
                    vm.name = doc.data().name
                    vm.desc = doc.data().desc
                    vm.category = doc.data().category
                    vm.brand = doc.data().brand
                    vm.imageUrl = doc.data().imageUrl
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('products').where('product_id', '==', this.$route.params.product_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    this.product_id = doc.data().product_id
                    this.name = doc.data().name
                    this.desc = doc.data().desc
                    this.category = doc.data().category
                    this.brand = doc.data().brand
                    this.imageUrl = doc.data().imageUrl
                })
            })
        }
    }
}
</script>

<style scoped>
.product-view-wrapper{
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)   
}
.product-view{
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    align-items: center;
    background-color: #FFFFFF;
    padding: 3rem;
    border-radius: 0.5rem;
    margin-bottom: 5rem;
}
img{
    width: 20rem;
    height: 20rem;
}
.product-text{
    display: grid;
    grid-gap: 0.5rem;
}
.product-controls{
    margin-top: 2rem;
}
.product-controls > a,button{
    margin-right: 1rem;

}
.product-controls > a,.edit{
    text-decoration: none;
    display: inline-block;
    padding: 0.75rem 1.1rem;
    border: 1px solid #EF4937;
    color: #EF4937;
    border-radius: 0.5rem;
    background: none;
}
.edit{
    padding: 0.9rem 1.1rem;
}
.delete{
    padding: 1rem 1.1rem;
    border: 0;
    border-radius: 6px;
    background-color: #EF4937;
    color:  #FFFFFF;
    margin-right: 0.5rem;
}
@media (max-width: 1000px){
    .product-view{
        grid-template-columns: 1fr;
    }
    img{
    width: 15rem;
    height: 15rem;
    }
    .product-view-wrapper{
    top: 80%;  
    }
    .polygon-1{
        height: 150vh;
    }
}
@media (max-width: 440px){
    .product-view-wrapper{
        width: 90%;
    }
}
</style>
