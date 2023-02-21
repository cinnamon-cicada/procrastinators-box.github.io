import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9OdbrBcnMpmSjWQA8qMXfu79319ILVd0",
  authDomain: "procrastinator-s-box.firebaseapp.com",
  projectId: "procrastinator-s-box",
  storageBucket: "procrastinator-s-box.appspot.com",
  messagingSenderId: "1091604736507",
  appId: "1:1091604736507:web:29ec163b373ecfeeb7435e",
  measurementId: "G-3J2SF14LVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'module';
document.getElementsByTagName('head')[0].appendChild(script);
*/

function testFB() {
  //console.log(firebase);
}
