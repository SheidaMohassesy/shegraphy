import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCjL-96WTVUdtDEHA5KEWyivqZZcHONBsI',
  authDomain: 'shegraphy-7b5e6.firebaseapp.com',
  projectId: 'shegraphy-7b5e6',
  storageBucket: 'shegraphy-7b5e6.appspot.com',
  messagingSenderId: '997493337097',
  appId: '1:997493337097:web:63985f3695071777b89cd8',
  measurementId: 'G-YEH35LCVR5',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app, 'portfolio');
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
