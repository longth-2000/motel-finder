import {db} from './../../../fire'
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore"
let isFirst = true;

export const mutations = {
    notifications: (state) => {
        getDocs(collection(db, "notifications"), orderBy('date', 'desc')).then(res => {
            res.forEach((doc) => {
              const data = doc.data()
              data.id = doc.id
              state.notifications.push(data)
            });
        })
        // onSnapshot(collection(db, "notifications"), (res) => {
        //     state
        // });
        onSnapshot(collection(db, "notifications"), (snapshot) => {
          if(isFirst) {
            isFirst = false
            return 
          }
          if(state.notifications) {
            snapshot.docChanges().forEach((change) => {
              const data = change.doc.data()
              data.id = change.doc.id
              if (change.type === "added") {
                if(!(state.notifications.find((item) => item.id == change.doc.id))) {
                  state.notifications.unshift(data)
                }
                //   console.log("New city: ", change.doc.id);
              }
              if (change.type === "modified") {
                let noti = state.notifications
                const index = noti.findIndex((item) => item.id == change.doc.id)
                noti[index] = data
                state.notifications = [...noti]
              }
                //   console.log("New city: ", change.doc.id);
              if (change.type === "removed") {
                let noti = state.notifications
                const index = noti.findIndex((item) => item.id == change.doc.id)
                noti.splice(index, 1)

                state.notifications = [...noti]
                //   console.log("New city: ", change.doc.id);
              }
            //   if (change.type === "modified") {
            //       console.log("Modified city: ", change.doc.id);
            //   }
            //   if (change.type === "removed") {
            //       console.log("Removed city: ", change.doc.id);
            //   }
            });
          }       
          });
    },
}