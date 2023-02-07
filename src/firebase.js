import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcdi8_RtKNQjAQhgrq0f6Z_xILzMnc-yA",
  authDomain:"kskt-bits-9a953.firebaseapp.com",
  projectId: "kskt-bits-9a953",
  storageBucket: "kskt-bits-9a953.appspot.com",
  messagingSenderId: "162618531649",
  appId: "1:162618531649:web:75ed3a4b6a413a87454bc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;