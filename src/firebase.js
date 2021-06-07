import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_l-msEm70RXT9tyOJgd6I8YG-n0BCngw",
    authDomain: "facebook-clone-6ebe7.firebaseapp.com",
    databaseURL: "https://facebook-clone-6ebe7.firebaseio.com",
    projectId: "facebook-clone-6ebe7",
    storageBucket: "facebook-clone-6ebe7.appspot.com",
    messagingSenderId: "809488010232",
    appId: "1:809488010232:web:0c722aade3f808cb71a40d",
    measurementId: "G-WV5PRBCM5K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;