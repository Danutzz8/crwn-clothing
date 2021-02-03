import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrCFtcvGct5-oxLlx4f8s42hMAHjRaTJ4",
    authDomain: "crown-db-b33d6.firebaseapp.com",
    projectId: "crown-db-b33d6",
    storageBucket: "crown-db-b33d6.appspot.com",
    messagingSenderId: "511235884669",
    appId: "1:511235884669:web:faa609676b59e69b311314",
    measurementId: "G-MRM4L68JVB"
  };

  export const createUserProfileDocument = async (userAuth, aditionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

     if(!snapShot.exists) {
         const { displayName, email } = userAuth;
         const createdAt = new Date();

         try {
             await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData 
             })

         } catch (error) {
            console.log('error creating user', error.message);
         }
     }

     return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
          };
      });
      
      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
