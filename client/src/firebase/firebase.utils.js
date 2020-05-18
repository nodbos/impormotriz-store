import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCcyUU3r1mf0QcJ4KNynTXBeOn4xedQRaY', //process.env.REACT_APP_FIREBASE
    authDomain: 'impormotriz-shop-db.firebaseapp.com',
    databaseURL: 'https://impormotriz-shop-db.firebaseio.com',
    projectId: 'impormotriz-shop-db',
    storageBucket: 'impormotriz-shop-db.appspot.com',
    messagingSenderId: '584829029916',
    appId: '1:584829029916:web:6257583abf21f87edf59d9',
    measurementId: 'G-PLER8ZRK5K',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
    userAuth,
    additionalData
) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const getUserCartRef = async userId => {
    const cartsRef = firestore
        .collection('carts')
        .where('userId', '==', userId);
    const snapShot = await cartsRef.get();

    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
    } else {
        return snapShot.docs[0].ref;
    }
};

export const convertCollectionsSnapshotToMap = (
    collections,
    type
) => {
    const transformCollections = collections.docs.map(doc => {
        if (type === 'products') {
            const {
                articulos,
                imageUrl,
                linkUrl,
                size,
                title,
            } = doc.data();

            return {
                id: doc.id,
                articulos,
                imageUrl,
                linkUrl,
                routeName: encodeURI(title.toLowerCase()),
                size,
                title,
            };
        } else if (type === 'posts') {
            const {
                content,
                description,
                imageUrl,
                linkUrl,
                title,
            } = doc.data();

            return {
                content,
                description,
                id: doc.id,
                imageUrl,
                linkUrl,
                routeName: encodeURI(title.toLowerCase()),
                title,
            };
        }
        return {
            id: doc.id,
            error: 'ERROR',
        };
    });

    return transformCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
};

//------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------//

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

//------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------//

export default firebase;
