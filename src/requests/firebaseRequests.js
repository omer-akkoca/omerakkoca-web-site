import { collection, getDocs } from "firebase/firestore"
import { firestore } from "../library/firebase";

class FirebaseRequests {
    async getFirestore({ collection_name= "" }) {
        const data = []
        const querySnapshot = await getDocs(collection(firestore, collection_name))
        querySnapshot.forEach((doc) => {
            let element = {
                id: doc.id,
                ...doc.data()
            }
            data.push(element)
        })

        return { data }
    }
}

export default FirebaseRequests;