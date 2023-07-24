import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxppgKbeRWeG9uUjf94Sd9oLG73kCC68I",
  authDomain: "auth-native-practice.firebaseapp.com",
  projectId: "auth-native-practice",
  storageBucket: "auth-native-practice.appspot.com",
  messagingSenderId: "343083778326",
  appId: "1:343083778326:web:2b8aa9af30502c9db1d037",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
