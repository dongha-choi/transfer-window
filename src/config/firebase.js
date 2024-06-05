// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNwqTJpuKTRhH1Iy7pbIYyBT1JOsZrB_g',
  authDomain: 'transfer-window-33538.firebaseapp.com',
  databaseURL:
    'https://transfer-window-33538-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'transfer-window-33538',
  storageBucket: 'transfer-window-33538.appspot.com',
  messagingSenderId: '56779446544',
  appId: '1:56779446544:web:701d01e03b86fee3d7ed95',
  measurementId: 'G-BEMCF6P9RL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth };
