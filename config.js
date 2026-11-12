// Pengaturan aplikasi. ISI SEKALI, lalu jangan diubah lagi.
// File ini tidak ikut berubah saat aplikasi diperbarui, jadi cukup upload index.html yang baru.
window.APP_CONFIG = {
  CLIENT_ID: '261058291495-k31m0bmb2b4tt8ggr11ifjbiurcui3c7.apps.googleusercontent.com',   // dari Google Cloud Console
  API_URL: 'https://script.google.com/macros/s/AKfycbz9fOmcReztL1uTLXpw96LZaeYwfPF5yaIgXK4DjM1Qv4YmYFMKsHJh18SA-gOxwjAO/exec',  // URL web app Apps Script, berakhiran /exec
  WA_BANTUAN: '085770330546'
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPEatxQ3hw1-oBnW9S5-2BVdxSFd7pO88",
  authDomain: "zidan-labs-62ab3.firebaseapp.com",
  projectId: "zidan-labs-62ab3",
  storageBucket: "zidan-labs-62ab3.firebasestorage.app",
  messagingSenderId: "413333858443",
  appId: "1:413333858443:web:df70428852426e83384c8e",
  measurementId: "G-M8R2M0THBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
