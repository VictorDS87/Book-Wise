import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDpC-OKZo8ZT_PeDI6Hnu0RwZj6etJoQpM",
  authDomain: "bookwise-bd40f.firebaseapp.com",
  projectId: "bookwise-bd40f",
  storageBucket: "bookwise-bd40f.appspot.com",
  messagingSenderId: "999519468679",
  appId: "1:999519468679:web:4247639062c7ab9e374c22"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const providerGoogle = new GoogleAuthProvider();
const providerGitHub = new GithubAuthProvider();
export {auth, providerGoogle, providerGitHub}