import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA66zGZmgdxrAwrkiesMOdyOeDwIYpJCsY",
    authDomain: "discord-clone-de792.firebaseapp.com",
    projectId: "discord-clone-de792",
    storageBucket: "discord-clone-de792.appspot.com",
    messagingSenderId: "836848313091",
    appId: "1:836848313091:web:9ff58cd9cc4118f40f3f36"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider }
  export default db;