<template>
<div class="admin">
    <div>
        <Sidebar/>
        <div class="content">
            <h5>Slogan:</h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{slogan}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="slogan">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Ondertitel:</h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{ondertitel}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="ondertitel">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Over Ons intro: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{overonsintro}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="overonsintro">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Assortiment intro: </h5>
            <div v-if="state.visibility" class="tekst">
                <p>{{assortimentintro}}</p>
                <button @click="editContent">Bewerk</button>
            </div>
            <div v-else class="tekst">
                <input type="text" v-model="assortimentintro">
                <button @click="saveContent">opslaan</button>
                <button @click="cancelEdit">cancel</button>
            </div>
            <h5>Home - Top Merken Foto's</h5>
            <div class="tekst">
                <img :src="fototopmerk1" alt="">
                <input type="file" @change="onImage1Picked" accept="image/*">
                <button @click="saveImage1">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="fototopmerk2" alt="">
                <input type="file" @change="onImage2Picked" accept="image/*">
                <button @click="saveImage2">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="fototopmerk3" alt="">
                <input type="file" @change="onImage3Picked" accept="image/*">
                <button @click="saveImage3">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="fotooveronsintro" alt="">
                <input type="file" @change="onImage4Picked" accept="image/*">
                <button @click="saveImage4">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="assortimentfoto1" alt="">
                <input type="file" @change="onImage5Picked" accept="image/*">
                <button @click="saveImage5">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="assortimentfoto2" alt="">
                <input type="file" @change="onImage6Picked" accept="image/*">
                <button @click="saveImage6">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="assortimentfoto3" alt="">
                <input type="file" @change="onImage7Picked" accept="image/*">
                <button @click="saveImage7">Opslaan</button>
            </div>
            <div class="tekst">
                <img :src="assortimentfoto4" alt="">
                <input type="file" @change="onImage8Picked" accept="image/*">
                <button @click="saveImage8">Opslaan</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from './Sidebar'
import { fb, db } from '../firebaseinit'
import { setTimeout } from 'timers';
export default {
    name: 'admin-home',
    components: {
        Sidebar
    },
    data () {
        return {
            state: {
                visibility: true
            },
            slogan: null,
            ondertitel: null,
            overonsintro: null,
            assortimentintro: null,
            fototopmerk1: null,
            fototopmerk2: null,
            fototopmerk3: null,
            fotooveronsintro: null,
            assortimentfoto1: null,
            assortimentfoto2: null,
            assortimentfoto3: null,
            assortimentfoto4: null,
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            image6: null,
            image7: null,
            image8: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('home').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.slogan = doc.data().slogan
                    vm.ondertitel = doc.data().ondertitel
                    vm.overonsintro = doc.data().overonsintro
                    vm.assortimentintro = doc.data().assortimentintro
                    vm.fototopmerk1 = doc.data().fototopmerk1
                    vm.fototopmerk2 = doc.data().fototopmerk2
                    vm.fototopmerk3 = doc.data().fototopmerk3
                    vm.fotooveronsintro = doc.data().fotooveronsintro
                    vm.assortimentfoto1 = doc.data().assortimentfoto1
                    vm.assortimentfoto2 = doc.data().assortimentfoto2
                    vm.assortimentfoto3 = doc.data().assortimentfoto3
                    vm.assortimentfoto4 = doc.data().assortimentfoto4
                })
            })
        })
    },
    watch: {
        '$route': 'fetchHomeContent'
    },
    methods: {
        fetchHomeContent () {
            db.collection('home').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    this.slogan = doc.data().slogan
                    this.ondertitel = doc.data().ondertitel
                    this.overonsintro = doc.data().overonsintro
                    this.assortimentintro = doc.data().assortimentintro
                    this.fototopmerk1 = doc.data().fototopmerk1
                    this.fototopmerk2 = doc.data().fototopmerk2
                    this.fototopmerk3 = doc.data().fototopmerk3
                    this.fotooveronsintro = doc.data().fotooveronsintro
                    this.assortimentfoto1 = doc.data().assortimentfoto1
                    this.assortimentfoto2 = doc.data().assortimentfoto2
                    this.assortimentfoto3 = doc.data().assortimentfoto3
                    this.assortimentfoto4 = doc.data().assortimentfoto4
                })
            })
        },
        editContent (state) {
            this.state.visibility = false
        },
        saveContent () {            
            db.collection('home').get()
            .then(querySnapshot => {
                querySnapshot.forEach( doc=> {
                    doc.ref.update({
                        slogan: this.slogan,
                        ondertitel: this.ondertitel,
                        overonsintro: this.overonsintro,
                        assortimentintro: this.assortimentintro
                        
                    })
                    .then(() => {
                        this.$router.push('/fsbo/admin/home-admin')
                        this.state.visibility = true
                    })
                })
            })
        },
        cancelEdit (state) {
            this.state.visibility = true
        },
        onImage1Picked (event) {
            return this.image1 = event.target.files[0]
        },
        onImage2Picked (event) {
            return this.image2 = event.target.files[0]
        },
        onImage3Picked (event) {
            return this.image3 = event.target.files[0]
        },
        onImage4Picked (event) {
            return this.image4 = event.target.files[0]
        },
        onImage5Picked (event) {
            return this.image5 = event.target.files[0]
        },
        onImage6Picked (event) {
            return this.image6 = event.target.files[0]
        },
        onImage7Picked (event) {
            return this.image7 = event.target.files[0]
        },
        onImage8Picked (event) {
            return this.image8 = event.target.files[0]
        },
        saveImage1 () {
            if(this.image1 !== null) {
                this.onImage1Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image1.name)
            let uploadTask = storageRef.put(this.image1) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image1.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ fototopmerk1: downloadURL})
                })
            })
        },
        saveImage2 () {
            if(this.image2 !== null) {
                this.onImage2Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image2.name)
            let uploadTask = storageRef.put(this.image2) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image2.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ fototopmerk2: downloadURL})
                })
            })
        },
        saveImage3 () {
            if(this.image3 !== null) {
                this.onImage3Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image3.name)
            let uploadTask = storageRef.put(this.image3) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image3.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ fototopmerk3: downloadURL})
                })
            })
        },
        saveImage4 () {
            if(this.image4 !== null) {
                this.onImage4Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image4.name)
            let uploadTask = storageRef.put(this.image4) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image4.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ fotooveronsintro: downloadURL})
                })
            })
        },
        saveImage5 () {
            if(this.image5 !== null) {
                this.onImage5Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image5.name)
            let uploadTask = storageRef.put(this.image5) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image5.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ assortimentfoto1: downloadURL})
                })
            })
        },
        saveImage6 () {
            if(this.image6 !== null) {
                this.onImage6Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image6.name)
            let uploadTask = storageRef.put(this.image6) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image6.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
                
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ assortimentfoto2: downloadURL})
                })
            })
        },
        saveImage7 () {
            if(this.image7 !== null) {
                this.onImage7Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image7.name)
            let uploadTask = storageRef.put(this.image7) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image7.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ assortimentfoto3: downloadURL})
                })
            })
        },
        saveImage8 () {
            if(this.image8 !== null) {
                this.onImage8Picked
            } 
            let storageRef = fb.storage().ref('home/' + this.image8.name)
            let uploadTask = storageRef.put(this.image8) 
            uploadTask.on('state_changed', (snapshot) => {
                if (snapshot.totalBytes == this.image8.size) {
                    setTimeout(()=> {
                        this.$router.go({path: this.$router.path})
                    },3000)
                }
            }, (error) => {
            // Handle unsuccessful uploads
            }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
                db.collection('home').doc('hNWzd4KnNSpsK4bwGtyz').update({ assortimentfoto4: downloadURL})
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
img{
    height: 12rem;
    width: 12rem;
}
</style>
