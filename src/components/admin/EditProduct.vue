<template>
    <div class="edit-product-wrapper">
        <div class="edit-product">
            <Sidebar/>
            <form @submit.prevent="updateProduct">
                <h3>Produkt Bewerken</h3>
                <div class="form-row">
                    <label>ID</label>
                    <input type="text" v-model="product_id" placeholder="ID.." required disabled>
                </div>
                <div class="form-row">
                    <label>Naam</label>
                    <input type="text" v-model="name" placeholder="Produkt naam.." required>
                </div>
                <div class="form-row">
                    <label>Beschrijving</label>
                    <textarea type="text" v-model="desc" placeholder="Product beschrijving.." required></textarea>
                </div>
                <div class="form-row">
                    <label>Categorie</label>
                    <input type="text" v-model="category" placeholder="Produkt categorie.." required>
                </div>
                <div class="form-row">
                    <label>Merk</label>
                    <input type="text" v-model="brand" placeholder="Produkt merk.." required>
                </div>
                <button type="submit">Opslaan</button>
                <router-link to="/fsbo/produkten">Terug</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar'
import { fb, db } from '../firebaseinit'
export default {
    name: 'edit-product',
    components: {
        Sidebar
    },
    data () {
        return {
            product_id: null,
            name: null,
            desc: null,
            category: null,
            brand: null,
            image: null,
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
        },
        updateProduct () {
            db.collection('products').where('product_id', '==', this.$route.params.product_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    doc.ref.update({
                        product_id: this.product_id,
                        name: this.name,
                        desc: this.desc,
                        category: this.category,
                        brand: this.brand,
                        imageUrl: this.imageUrl
                    })
                    .then(() => {
                        this.$router.push({name:'view-product', params: {product_id: this.product_id}})
                    })
                })
            })
        },
        onFileChange (event) {
        return this.image = event.target.files[0]
        }
    }
}
</script>

<style scoped>
.edit-product-wrapper{
    background-color:#F8E3DD;
}
.edit-product{
    padding: 10rem 0 0 5rem;
    display: grid;
    grid-template-columns: 1.5fr 4fr 0.5fr;
    grid-gap: 2rem;
}
h3{
  text-align: center;
  margin-bottom: 2rem;
  color:  #EF4937;
}
form{
  margin: 0 auto 5rem auto;
  background-color: #FFFFFF;
  border-radius: 0.5rem;
  padding: 3rem;
  width: 60%;

}
.form-row {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 0.6rem;
  align-items: center;
}
.form-row > input[type = text], textarea{
  padding: 0.9rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(163, 155, 155);
}
.form-row > input[type = text]:focus, textarea:focus{
  border-color: #EF4937;
  outline: none;
}
textarea{
  height: 5rem;
}
button{
  padding: 1rem 1.1rem;
  border: 0;
  border-radius: 6px;
  background-color: #EF4937;
  color:  #FFFFFF;
  margin-right: 0.5rem;
}
a{
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.1rem;
  border: 1px solid #EF4937;
  color: #EF4937;
  border-radius: 0.5rem;
}
button, a{
  margin-top: 1rem;
}
</style>
