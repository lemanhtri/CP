

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";


const firebaseConfig = {
    apiKey: "AIzaSyCKqYkwiZCOVBnsrm0XvBo_KNNKjzS9d8U",
    authDomain: "cp01ji.firebaseapp.com",
    projectId: "cp01ji",
    storageBucket: "cp01ji.appspot.com",
    messagingSenderId: "431765817564",
    appId: "1:431765817564:web:acb9284bae9ffd73ae4c19",
    measurementId: "G-R8T7J25BWB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();



export const dangnhap = async (auth, email, pass) => {
    let isSuccess;
    let infoMessage;
    try {
        const user = await signInWithEmailAndPassword(auth, email, pass);
        isSuccess = true;
    } catch (error) {
        isSuccess = false;
        infoMessage = error.code;

    }
    return {
        isSuccess,
        infoMessage,
    };
};