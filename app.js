import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import { verifyPasswordResetCode, confirmPasswordReset } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

// ID's
const btn = document.getElementById("submit");
const inputPassword = document.getElementById('pwd');

// const link =
// "https://uearrow.netlify.app?mode=resetPassword&oobCode=KqaDW1NpqATNm9g2z4Jxe-xU2W_gHqejLymXtGsngvcAAAGLFCGIBw&apiKey=AIzaSyBREpqfvoEvgAGumbYB5ueiASibEy5ZfgY&lang=en";
const mode = new URLSearchParams(window.location.search).get("mode");
const actionCode = new URLSearchParams(window.location.search).get("oobCode");

const config = {
    apiKey: "AIzaSyAELRmuJ6ypK5t3_fHXB7MBpIFBLpCkl24",
    authDomain: "arrow-51e15.firebaseapp.com",
    databaseURL: "https://arrow-51e15-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "arrow-51e15",
    storageBucket: "arrow-51e15.appspot.com",
    messagingSenderId: "954686804397",
    appId: "1:954686804397:web:389d475a12cd6f63129124",
    measurementId: "G-WCRZ97MDKN"
};
    
const app = initializeApp(config);
const auth = getAuth();
let newPassword;


function handleResetPassword() {
    console.log(actionCode);
    newPassword = inputPassword.value;
    
    // TODO: Password validation
    verifyPasswordResetCode(auth, actionCode)
        .then((email) => {
            let emailAcc = email;
            console.log(emailAcc);
            console.log(newPassword);

            confirmPasswordReset(auth, actionCode, newPassword).then((resp) => {
                console.log("Successfully change password")
              }).catch((error) => {
                console.log(error);
              });
            })
            .catch((error) => {
            // The OOB code is invalid or expired.
            console.log("The OOB code is invalid or expired.");
            console.log(error);
            });
    }


btn.addEventListener("click", handleResetPassword);
