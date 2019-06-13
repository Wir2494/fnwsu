<template>
    <div class="polygon-1">
        <div class="form-wrapper">
            <div class="form-container">
                <img :src="logo" alt="Firgos Suriname NV Logo">
                <h3>Login</h3>
                <form>
                    <div class="form-group">
                        <label for="email">Email Adres:</label>
                        <input type="email" name="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password: </label>
                        <input type="password" name="password" v-model="password">
                    </div>
                    <input type="submit" value="Log In" v-on:click="login">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import logo from '../../assets/firgos5.png'
export default {
    name: 'login',
    data() {
        return {
            logo: logo,
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(e) {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                        alert(`You are logged in as ${user.user.email}`);
                        this.$router.go({path: this.$router.path});
                    },
                    err => {
                        alert(err.message);
                    }
                );
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
.polygon-1{
    padding-top: 15rem;
    text-align: center;
}
.form-wrapper {
    display: grid;
    justify-content: center;
    align-content: center;
}
h3{
    color: #EF4937;
    margin: 1rem 0 2rem 0;
}
.form-container {
    padding: 4rem 6rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
}
img{
    width: 3rem;
    height: 4rem;
}
.form-group{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    margin-bottom: 1rem;
}
input{
    padding: 0.9rem 0.6rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(163, 155, 155);
    border-color: #EF4937;
    outline: none;
}
input[type=submit]{
    padding: 1rem 3rem;
    border: 0;
    border-radius: 6px;
    background-color: #EF4937;
    color:  #FFFFFF;
    margin-right: 0.5rem;
}
</style>
