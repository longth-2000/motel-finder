import {db} from '../../../fire'
import { collection, getDocs, onSnapshot } from "firebase/firestore"
export const mutations = {
    chat: (state) => {
        getDocs(collection(db, "conversations")).then(res => {
            res.forEach((doc) => {
                state.chat.push(doc.data())
            });
        })
        // onSnapshot(collection(db, "notifications"), (res) => {
        //     state
        // });
        onSnapshot(collection(db, "conversations"), (snapshot) => {
          console.log('has new message')
            snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                  state.chat.push(change.doc.data())
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