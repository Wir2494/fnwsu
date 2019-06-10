<template>
    <div>
        <h3>Alle Produkten / ({{products.length + 1}})</h3>
        <ul>
            <li v-for="product in products" v-bind:key="product.id">
                <div class="product-wrapper">
                    <div class="product-image">
                        <img :src="product.imageUrl" alt="Produkt foto">
                    </div>
                    <div class="product-details">
                        <p>{{product.brand}}</p>
                        <p>{{product.name}}</p>
                        <p>{{product.category}}</p>
                    </div>
                    <div class="product-edits">
                        <router-link v-bind:to="{name:'view-product', params:{product_id: product.product_id}}">Bekijk</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { fb, db } from '../firebaseinit'
export default {
    name: "Products",
    data() {
        return {
            products: []
        }
    },
    created () {
        db.collection('products').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'product_id': doc.data().product_id,
                    'name': doc.data().name,
                    'desc': doc.data().desc,
                    'category': doc.data().category,
                    'brand': doc.data().brand,
                    'imageUrl': doc.data().imageUrl
                }
                this.products.push(data)
            })
        })
    }

}
</script>

<style scoped>
    h3{
        text-align: center;
        color: #EF4937;
    }
    ul{
        list-style: none;
        padding: 3rem;
        border-radius: 0.5rem;
        font-size: 1.1rem;
    }
    .product-wrapper{
        display: grid;
        grid-template-columns: 0.7fr 2fr 1fr;
        align-items: center;
        margin-bottom: 1rem;
        background-color: #FFFFFF;
        border-radius: 0.5rem;
        padding: 1rem;
    }
    .product-image > img{
        height: 8rem;
        width: 8rem;
        border-radius: 0.5rem;
    }
    .product-edits > a{
        text-decoration: none;
        display: inline-block;
        padding: 0.75rem 1.1rem;
        border: 1px solid #EF4937;
        color: #EF4937;
        border-radius: 0.5rem;
    }
</style>
