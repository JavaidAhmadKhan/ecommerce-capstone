import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO3tdVqCJ2lyIgb3b84dZkawG-0YLPAYA",
  authDomain: "wolzon-c1d3f.firebaseapp.com",
  projectId: "wolzon-c1d3f",
  storageBucket: "wolzon-c1d3f.appspot.com",
  messagingSenderId: "54400322754",
  appId: "1:54400322754:web:f06af51588616fe5003f5b",
  measurementId: "G-QWRGKKDXQ7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data doesn't exists
  //  create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;
};
