import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDCtrZZh2FMFQIGydCF-ckV1rl03xwBxJE",
    authDomain: "omer-akkoca.firebaseapp.com",
    projectId: "omer-akkoca",
    storageBucket: "omer-akkoca.appspot.com",
    messagingSenderId: "662346618116",
    appId: "1:662346618116:web:52c0b69873d8c4ad46ec51"
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

export { firestore }