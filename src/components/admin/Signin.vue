<template>
    <div class="polygon-1">
        <h1>Sign in!</h1>
        <form>
            <label for="email">Email Adres:</label>
            <input type="email" name="email" v-model="email">
            <label for="password">Password: </label>
            <input type="password" name="password" v-model="password">
            <input type="submit" value="Log In" v-on:click="login">
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data() {
        return {
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
                        this.$router.push('/');
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
form{
    width: 40%;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
}
</style>
