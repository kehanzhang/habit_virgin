import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnzqBYLjaiThEU5_OJ8oPGFUJl9cRFzL8",
  authDomain: "habit-67e09.firebaseapp.com",
  projectId: "habit-67e09",
  storageBucket: "habit-67e09.appspot.com",
  messagingSenderId: "363788444237",
  appId: "1:363788444237:web:5b3d532f85d979caac3204",
  measurementId: "G-54GCWK3KH0",
};

// Initialize Firebase
let app;

app = initializeApp(firebaseConfig);

// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

export const auth = getAuth(app);
