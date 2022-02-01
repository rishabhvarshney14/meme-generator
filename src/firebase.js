import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import {getFirestore} from '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyD39zKZXtAwqH-wQb2FwzJCpCjgjKwhiVM",
    authDomain: "meme-generator-1d110.firebaseapp.com",
    projectId: "meme-generator-1d110",
    storageBucket: "meme-generator-1d110.appspot.com",
    messagingSenderId: "490253750927",
    appId: "1:490253750927:web:e17a4c516357460f7416fa",
    measurementId: "G-MJK4K0NJJ5"
})

export const auth = app.auth()
export const db = getFirestore(app)

export default app 
