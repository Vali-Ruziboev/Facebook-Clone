import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyArmDeGtUCdmsx_mh8P2enn25V2FLJKwEY",
    authDomain: "facebook-clone-5fca1.firebaseapp.com",
    projectId: "facebook-clone-5fca1",
    storageBucket: "facebook-clone-5fca1.appspot.com",
    messagingSenderId: "407623560611",
    appId: "1:407623560611:web:5aaf1c17e4effa3730be16"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };