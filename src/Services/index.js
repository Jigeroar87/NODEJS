import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyDcEtnBSIZm9b8_wFpQNujbVZtrjIAs4sc",
    authDomain: "pf-web-51803.firebaseapp.com",
    projectId: "pf-web-51803",
    storageBucket: "pf-web-51803.appspot.com",
    messagingSenderId: "669503907802",
    appId: "1:669503907802:web:9882f59cf7b3b46d6102e3",
  };


  const app = initializeApp(config);
  const db = getFirestore(app)


  export default db
  