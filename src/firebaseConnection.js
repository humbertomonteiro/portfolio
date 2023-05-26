import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHWau91hBBNq_iW_qWKCGHWux3l5-wGug",
    authDomain: "exemple-b1f4f.firebaseapp.com",
    projectId: "exemple-b1f4f",
    storageBucket: "exemple-b1f4f.appspot.com",
    messagingSenderId: "414667482674",
    appId: "1:414667482674:web:ce5281cfae702289f07e2b",
    measurementId: "G-201SEB147C"
  };

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }