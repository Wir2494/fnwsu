<template>
<div>
  <form @submit.prevent="saveProduct">
  <h3>Produkt toevoegen</h3>
    <div class="form-row">
      <label>ID</label>
      <input type="text" v-model="product_id" placeholder="ID.." required>
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
    <div class="form-row">
      <label>Kies een Foto</label>
      <input type="file" @change="onFilePicked" accept="image/*" required>
    </div>
    <button type="submit">Opslaan</button>
    <router-link to="/fsbo/produkten">Terug</router-link>
  </form>
</div>
</template>

<script>
import { fb, db } from '../firebaseinit'
export default {
  name: 'addProduct',
  data () {
    return {
      product_id: null,
      name: null,
      desc: null,
      category: null,
      brand: null,
      image: null,
    }
  }, 
  methods: {
    saveProduct () {
      let imageFile
      let imageFileName
      let ext 
      let imageUrl
      let key
      let task
      db.collection('products').add({
        product_id: this.product_id,
        name: this.name,
        desc: this.desc,
        category: this.category,
        brand: this.brand
      })
      .then(docRef => {
        key = docRef.id
        this.$router.push('/fsbo/produkten')
        return key    
      })
      .then(key => {
        if(this.image !== null) {
          this.onFilePicked
          imageFile = this.image
          imageFileName = imageFile.name
          ext = imageFileName.slice(imageFileName.lastIndexOf('.'))
        }
        let storageRef = fb.storage().ref('products/' + key + '.' + ext)
        let uploadTask = storageRef.put(imageFile)
        uploadTask.on('state_changed', (snapshot) => {}, (error) => {
          // Handle unsuccessful uploads
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
            db.collection('products').doc(key).update({ imageUrl: downloadURL})
          });
        });     
      })    
    },
    onFilePicked (event) {
      return this.image = event.target.files[0]
    }  
  }
}
</script>

<style scoped>
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

