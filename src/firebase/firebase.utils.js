import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC5MfRlPI2IcArXgRK-wZkb19wkOwWvLXQ',
  authDomain: 'crwn-commerce-db.firebaseapp.com',
  databaseURL: 'https://crwn-commerce-db.firebaseio.com',
  projectId: 'crwn-commerce-db',
  storageBucket: '',
  messagingSenderId: '753625557228',
  appId: '1:753625557228:web:6781a2a375e0b6c7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;