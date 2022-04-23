import { db } from '../../../fire'
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore"
let isFirst = true;
// export const mutations = {
//     chat: (state) => {
//         getDocs(collection(db, "conversations"), orderBy('created_at', 'asc')).then(res => {
//             res.forEach((doc) => {
//                 state.chat.push(doc.data())
//             });
//         })
//         // onSnapshot(collection(db, "notifications"), (res) => {
//         //     state
//         // });
//         onSnapshot(collection(db, "conversations"), (snapshot) => {
//           console.log('has new message')
//             snapshot.docChanges().forEach((change) => {
//               if (change.type === "added") {
//                   state.chat.push(change.doc.data())
//                 //   console.log("New city: ", change.doc.id);
//               }
//             //   if (change.type === "modified") {
//             //       console.log("Modified city: ", change.doc.id);
//             //   }
//             //   if (change.type === "removed") {
//             //       console.log("Removed city: ", change.doc.id);
//             //   }
//             });
//           });
//     },
// }
export const mutations = {
    chat: (state) => {
        getDocs(collection(db, "conversations"), orderBy('created_at', 'desc')).then(res => {
                res.forEach((doc) => {
                    const data = doc.data()
                    data.id = doc.id
                    state.chat.push(data)
                });
            })
            // onSnapshot(collection(db, "notifications"), (res) => {
            //     state
            // });
        onSnapshot(collection(db, "conversations"), (snapshot) => {
            console.log('isFirst', isFirst)
            if(isFirst) {
                isFirst = false
                return;
            }
            if (state.chat) {
                snapshot.docChanges().forEach((change) => {
                    const data = change.doc.data()
                    data.id = change.doc.id
                    if (change.type === "added") {
                        if (!(state.chat.find((item) => item.id == change.doc.id))) {
                            state.chat.push(data)
                        }
                        //   console.log("New city: ", change.doc.id);
                    }
                    if (change.type === "modified") {
                        let noti = state.chat
                        const index = noti.findIndex((item) => item.id == change.doc.id)
                        noti[index] = data
                        state.chat = [...noti]
                    }
                    //   console.log("New city: ", change.doc.id);
                    if (change.type === "removed") {
                        let noti = state.chat
                        const index = noti.findIndex((item) => item.id == change.doc.id)
                        noti.splice(index, 1)

                        state.chat = [...noti]
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
    setConversation(state, payload) {
        state.conversation = payload
    },
    openChatFrame(state, payload) {
        state.isOpen = payload
    }

}