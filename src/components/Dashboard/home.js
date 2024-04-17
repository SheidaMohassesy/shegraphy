import { useRef } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCjL-96WTVUdtDEHA5KEWyivqZZcHONBsI',
  authDomain: 'shegraphy-7b5e6.firebaseapp.com',
  projectId: 'shegraphy-7b5e6',
  storageBucket: 'shegraphy-7b5e6.appspot.com',
  messagingSenderId: '997493337097',
  appId: '1:997493337097:web:63985f3695071777b89cd8',
  measurementId: 'G-YEH35LCVR5',
};

const Home = () => {
  const form = useRef();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app, 'portfolio');
  const storage = getStorage(app);

  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description,
              url,
              image: downloadUrl,
            });
          },
          (error) => {
            console.log(error);
            savePortfolio({
              name,
              description,
              url,
              image: '',
            });
          }
        );
      },
      (error) => {
        console.log(error);
        savePortfolio({
          name,
          description,
          url,
          image: null,
        });
      }
    );
  };

  const savePortfolio = async (portfolio) => {
    try {
      console.log(1);
      await addDoc(await collection(db, 'portfolio'), portfolio);
      console.log(2);
      //   console.log(1);
      //   const collectionRef = collection(db, 'portfolio');
      //   console.log(collectionRef);
      //   const docRef = doc(collectionRef, docId);

      //   console.log(docRef);
      //   // Get the document snapshot
      //   const docSnap = await getDoc(docRef);

      //   // Check if the document exists
      //   if (docSnap.exists()) {
      //     console.log('Document data:', docSnap.data());
      //   } else {
      //     console.log('No such document!');
      //   }

      //   const x = collection(db, 'portfolio');
      //   console.log(db);
      //   await addDoc(x, {
      //     name: 'a1',
      //     description: 'd1',
      //     image: 'i1',
      //     url: 'u1',
      //   });
      //   window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert('Failed to add portfolio');
    }
  };

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  );
};

export default Home;
