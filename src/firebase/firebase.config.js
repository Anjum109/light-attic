// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
    apiKey: "AIzaSyCqtpoF-_7ZWHaGXpsl_miFbo_phTf20rY",
    authDomain: "light-attic.firebaseapp.com",
    projectId: "light-attic",
    storageBucket: "light-attic.appspot.com",
    messagingSenderId: "764006715196",
    appId: "1:764006715196:web:ec958658d30810514ed839"
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;