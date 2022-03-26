import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIz4R0mCpoLMr5VVI-T2ulUG0sASGWxkU",
    authDomain: "internship-project-ccbf7.firebaseapp.com",
    projectId: "internship-project-ccbf7",
    storageBucket: "internship-project-ccbf7.appspot.com",
    messagingSenderId: "846242990334",
    appId: "1:846242990334:web:7a864cbe5f6222f5e1bdaf",
    measurementId: "G-V4V6Q7THE5"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)