import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    //your config
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

export { firestore }
