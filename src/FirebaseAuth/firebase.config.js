// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU3AwckPEYD-B3IwbAu8ImKM51Cv3fk5o",
  authDomain: "assignment-10-2babd.firebaseapp.com",
  projectId: "assignment-10-2babd",
  storageBucket: "assignment-10-2babd.appspot.com",
  messagingSenderId: "889209859186",
  appId: "1:889209859186:web:c88729be1b4f4f111ee6eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
