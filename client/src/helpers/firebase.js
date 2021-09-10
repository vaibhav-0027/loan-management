import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDF58fXXrQDdhbTeu2zjDQJxl48ZIZEoNE",
    authDomain: "loan-management-95418.firebaseapp.com",
    projectId: "loan-management-95418",
    storageBucket: "loan-management-95418.appspot.com",
    messagingSenderId: "266181542728",
    appId: "1:266181542728:web:7f8fe1dcfc6d99abdfa97d",
    measurementId: "G-P4GTNKWC3T"
}

const app = initializeApp(firebaseConfig)

export const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export const auth = getAuth()

export default app 