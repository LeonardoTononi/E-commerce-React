import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC5MfRlPI2IcArXgRK-wZkb19wkOwWvLXQ',
  authDomain: 'crwn-commerce-db.firebaseapp.com',
  databaseURL: 'https://crwn-commerce-db.firebaseio.com',
  projectId: 'crwn-commerce-db',
  storageBucket: 'crwn-commerce-db.appspot.com',
  messagingSenderId: '753625557228',
  appId: '1:753625557228:web:6781a2a375e0b6c7'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
