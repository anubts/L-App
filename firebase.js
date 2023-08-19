
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgjDhDkcYoca6rpb78vufSgYOn6udPB6Y",
    authDomain: "laundry-application-c28e2.firebaseapp.com",
    projectId: "laundry-application-c28e2",
    storageBucket: "laundry-application-c28e2.appspot.com",
    messagingSenderId: "556998374876",
    appId: "1:556998374876:web:58fe65a9dbbec85f790b19"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};