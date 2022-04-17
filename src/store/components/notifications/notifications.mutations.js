import {db} from './../../../fire'
import { collection, getDocs, onSnapshot } from "firebase/firestore"
export const mutations = {
    notifications: (state) => {
        getDocs(collection(db, "notifications")).then(res => {
            res.forEach((doc) => {
                state.notifications.push(doc.data())
            });
        })
        // onSnapshot(collection(db, "notifications"), (res) => {
        //     state
        // });
        onSnapshot(collection(db, "notifications"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                  state.notifications.push(change.doc.data())
                //   console.log("New city: ", change.doc.id);
              }
            //   if (change.type === "modified") {
            //       console.log("Modified city: ", change.doc.id);
            //   }
            //   if (change.type === "removed") {
            //       console.log("Removed city: ", change.doc.id);
            //   }
            });
          });
    },
}