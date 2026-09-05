import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ضعي_API_KEY_هنا",
  authDomain: "sakura-tales.firebaseapp.com",
  projectId: "sakura-tales",
  storageBucket: "sakura-tales.firebasestorage.app",
  messagingSenderId: "1052657784820",
  appId: "1:1052657784820:web:f37da7b0098c47aadf0ba1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
