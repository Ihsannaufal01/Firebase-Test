// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLc4EOA60q5kAKR7Xm4CETYv_r1Sc-Kp0",
  authDomain: "fir-78943.firebaseapp.com",
  databaseURL: "https://fir-78943-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-78943",
  storageBucket: "fir-78943.appspot.com",
  messagingSenderId: "882331131930",
  appId: "1:882331131930:web:c6df937db9a262b15531a3",
  measurementId: "G-QXNX3R9KGG"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;