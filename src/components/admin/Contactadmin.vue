<template>
<div class="admin">
    <div>
        <Sidebar/>
        <div class="content">
            <h5>straat en Nummer:</h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{straatennummer}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="straatennummer">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Openingstijden:</h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{openingstijden}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="openingstijden">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Nummer Tekst: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{nummercta}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="nummercta">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Land: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{land}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="land">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Distrikt: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{distrikt}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="distrikt">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Continent: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{continent}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="continent">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Kontakt Nummer 1: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{contactnummer1}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="contactnummer1">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Kontakt Nummer 2: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{contactnummer2}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="contactnummer2">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Kontakt Nummer 3: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{contactnummer3}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="contactnummer3">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Kontakt Nummer 4: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{contactnummer4}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="contactnummer4">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Route Beschrijving Foto:</h5>
            <div class="tekst">
                <img :src="routefoto">
                <input type="file" @change="changeImage">
                <button @click="saveImage">Opslaan</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from './Sidebar'
import { fb, db } from '../firebaseinit'
export default {
    name: 'admin-contact',
    components: {
        Sidebar
    },
    data () {
        return {
            state: {
                visibility: true
            },
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
            image: null

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
        },
        editContent (state) {
            this.state.visibility = false
        },
        saveContent () {            
            db.collection('contact').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    doc.ref.update({
                        straatennummer: this.straatennummer,
                        openingstijden: this.openingstijden,
                        nummercta: this.nummercta,
                        land: this.land,
                        distrikt: this.distrikt,
                        continent: this.continent,
                        contactnummer1: this.contactnummer1,
                        contactnummer2: this.contactnummer2,
                        contactnummer3: this.contactnummer3,
                        contactnummer4: this.contactnummer4
                        
                    })
                    .then(() => {
                        this.$router.push('/fsbo/admin/contact-admin')
                        this.state.visibility = true
                    })
                })
            })
        },
        cancelEdit (state) {
            this.state.visibility = true
        },
        changeImage (event) {
           return this.image = event.target.files[0]
        },
        saveImage () {
            if(this.image !== null) {
                this.changeImage
            } 
            let storageRef = fb.storage().ref('contact/' + this.image.name)
            let uploadTask = storageRef.put(this.image) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('contact').doc('Oza2KNa3wM92SxIwuGs4').update({ routefoto: downloadURL})
                })
            })
        },
    }
}
</script>

<style scoped>
h5{
    color: #EF4937;
}
.admin{
    background-color: #F8E3DD;
}
.admin > div{
    padding: 10rem 0 0 5rem;
    display: grid;
    grid-template-columns: 1.5fr 4fr 0.5fr;
    grid-gap: 2rem;
}
.tekst{
    display: grid;
    grid-template-columns: 2fr 0.3fr 0.3fr;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    padding: 3rem;
    margin-bottom: 2rem;
}
button{
    text-decoration: none;
    display: inline-block;
    padding: 0.75rem 1.1rem;
    border: 1px solid #EF4937;
    color: #EF4937;
    border-radius: 0.5rem;
    background: none;
    margin-right: 1rem;
}
input{
  padding: 0.9rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(163, 155, 155);
  margin-right: 1rem;
}
input:focus, button:focus{
  border-color: #EF4937;
  outline: none;
}
</style>
