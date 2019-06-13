<template>
<div class="admin">
    <div>
        <Sidebar/>
        <div class="content">
            <h5>Bedrijfsnaam:</h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{bedrijfsnaam}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="bedrijfsnaam">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Bedrijfsprofiel:</h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{bedrijfsprofiel}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="bedrijfsprofiel">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Missie: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{missie}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="missie">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Visie: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{visie}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="visie">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
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
            bedrijfsnaam: null,
            bedrijfsprofiel: null,
            missie: null,
            visie: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('about').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.bedrijfsnaam = doc.data().bedrijfsnaam
                    vm.bedrijfsprofiel = doc.data().bedrijfsprofiel
                    vm.missie = doc.data().missie
                    vm.visie = doc.data().visie
                })
            })
        })
    },
    watch: {
        '$route': 'fetchAboutContent'
    },
    methods: {
        fetchAboutContent () {
            db.collection('about').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    this.bedrijfsnaam = doc.data().bedrijfsnaam
                    this.bedrijfsprofiel = doc.data().bedrijfsprofiel
                    this.missie = doc.data().missie
                    this.visie = doc.data().visie
                })
            })
        },
        editContent (state) {
            this.state.visibility = false
        },
        saveContent () {            
            db.collection('about').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    doc.ref.update({
                        bedrijfsnaam: this.bedrijfsnaam,
                        bedrijfsprofiel: this.bedrijfsprofiel,
                        missie: this.missie,
                        visie: this.visie
                        
                    })
                    .then(() => {
                        this.$router.push('/fsbo/admin/over-ons-admin')
                        this.state.visibility = true
                    })
                })
            })
        },
        cancelEdit (state) {
            this.state.visibility = true
        }
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
