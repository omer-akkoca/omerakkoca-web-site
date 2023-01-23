import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore"
import { firestore } from "../library/firebase";

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

    async getDocument({ collection_name= "", document_name= "" }) {
        let x = {
            data: undefined,
            error:  undefined
        }
        const docRef = doc(firestore, collection_name, document_name)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            x.data = docSnap.data()
        } else {
            x.error = "document_did_not_reading"
        }

        return x;
    }

}

export default FirebaseRequests;