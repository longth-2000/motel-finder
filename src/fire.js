
const firebaseConfig = {
    apiKey: "AIzaSyCpv-WV5NMc8oTuMEsg_h_9HJcYzclhZUY",
    authDomain: "delivery-food-f41c6.firebaseapp.com",
    databaseURL: "https://delivery-food-f41c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "delivery-food-f41c6",
    storageBucket: "delivery-food-f41c6.appspot.com",
    messagingSenderId: "712910465523",
    appId: "1:712910465523:web:6a592124fe9917d0820a86"
  };

  import * as firebase from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Get a Firestore instance
export const db = getFirestore(firebase
  .initializeApp(firebaseConfig))
export const storage = getStorage(firebase
  .initializeApp(firebaseConfig), 'gs://delivery-food-f41c6.appspot.com')
  export const uploadFile = async (file) => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file, metadata)
    const downloadUrl = await getDownloadURL(storageRef)
    return downloadUrl
  }
