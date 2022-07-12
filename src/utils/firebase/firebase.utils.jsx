import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth';

 import {
     getFirestore,
     doc,
     getDoc,
     setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD09d-DX_5Gm8z6HUpxLKdFZiuHlbfgp5o",
    authDomain: "shopp-db-d1f35.firebaseapp.com",
    projectId: "shopp-db-d1f35",
    storageBucket: "shopp-db-d1f35.appspot.com",
    messagingSenderId: "938369297486",
    appId: "1:938369297486:web:b7594824cf4bca951fe71f",
    measurementId: "G-C55XYGW911"
};

  
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    
    //if user data does not exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
 
        //create / set the document with the data from userAuth in my collection
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)

        }
    }

    // if user data exists
    return userDocRef
}