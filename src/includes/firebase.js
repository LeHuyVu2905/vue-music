import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCphldLPAaosiFFCxGFTt58edj31-OUf1Q',
  authDomain: 'vue-music-risky-2022.firebaseapp.com',
  projectId: 'vue-music-risky-2022',
  storageBucket: 'vue-music-risky-2022.appspot.com',
  appId: '1:405541446006:web:0bd31ddad0329a41c69a57',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export { 
  auth, db, usersCollection, songsCollection, storage, 
};