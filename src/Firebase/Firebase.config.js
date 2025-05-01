import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsrPw17UtdDAdDuvEWLrwEwCJfKO4fZYo",
  authDomain: "auth-form-dc02e.firebaseapp.com",
  projectId: "auth-form-dc02e",
  storageBucket: "auth-form-dc02e.firebasestorage.app",
  messagingSenderId: "927986906060",
  appId: "1:927986906060:web:d6f25282d173aa7865a369"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);