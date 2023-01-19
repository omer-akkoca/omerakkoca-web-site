import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { firestore, } from "../library/firebase";

class FirebaseRequests {
    async getFirestore({ collection_name = "", order_by = "id" }) {
        const data = []
        const dataRef = collection(firestore, collection_name)
        const ordered_data = query(dataRef, orderBy(order_by));
        const dataSnapshot = await getDocs(ordered_data)
        dataSnapshot.forEach((doc) => {
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