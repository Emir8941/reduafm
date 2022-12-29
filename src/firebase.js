import { initializeApp } from "firebase/app";
import  firebase  from "firebase/compat/app";


const firebaseConfig = {
  apiKey: "AIzaSyBEQmulZNpLmBW8N9bM-rN4g_HDXF5LBfc",
  authDomain: "farra-1ad10.firebaseapp.com",
  projectId: "farra-1ad10",
  storageBucket: "farra-1ad10.appspot.com",
  messagingSenderId: "714836713018",
  appId: "1:714836713018:web:10d1ae9c5f874e5515df03",
  measurementId: "G-ZRLVKTNS44"
};

const fireBaseApp = initializeApp(firebaseConfig);

const auth = firebase.getAuth(fireBaseApp)
const provider = new firebase.auth.GoogleAuthProvider()

export{auth, provider}