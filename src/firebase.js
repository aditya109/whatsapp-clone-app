import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAD_T3caUoR2lW3ZJa3g_EKUad0aOU8FBM",
    authDomain: "whatsapp-clone-app-44acc.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-app-44acc.firebaseio.com",
    projectId: "whatsapp-clone-app-44acc",
    storageBucket: "whatsapp-clone-app-44acc.appspot.com",
    messagingSenderId: "62227275467",
    appId: "1:62227275467:web:565c556253043491dd454e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;