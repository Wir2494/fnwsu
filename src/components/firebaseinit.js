import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
import 'firebase/storage'

const fb = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

export {fb, db}