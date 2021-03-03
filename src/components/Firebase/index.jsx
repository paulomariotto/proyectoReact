import firebase from 'firebase/app';
import '@firebase/firebase';

const app = firebase.initializeApp({
apiKey: "AIzaSyBqtYVwVltG-9hozF976fVv4qmFDb4sg9Y",
    authDomain: "coderhouse-96c66.firebaseapp.com",
    projectId: "coderhouse-96c66",
    storageBucket: "coderhouse-96c66.appspot.com",
    messagingSenderId: "709404962079",
    appId: "1:709404962079:web:8b3f6cd4e5530357a4d42a"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}