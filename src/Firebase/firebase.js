import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrjkVwiNV1vE3kvkPNQvVLp9y-9tQmKd4",
  authDomain: "pomodoro-18956.firebaseapp.com",
  projectId: "pomodoro-18956",
  storageBucket: "pomodoro-18956.appspot.com",
  messagingSenderId: "624246881526",
  appId: "1:624246881526:web:9f3845a19a51ce5dee00d7",
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);

    const name = res.user.displayName
      .split(" ")
      .filter((_, index) => index === 0)
      .join("");

    return name;
  } catch (err) {
    console.log(err);
  }
};

export const SignOutWithGoogle = async () => {
  try {
    const res = await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
