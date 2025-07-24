// 1. Replace this config with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyA3rxlVfYrdUYYqkE28BRCBZe2ymcs7b_8",
  authDomain: "trackmybuslk.firebaseapp.com",
  projectId: "trackmybuslk",
  appId: "1:1065474252814:web:59aa4c42cd54b17c9e1c5f"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const recaptchaResponse = grecaptcha.getResponse();

  if (!recaptchaResponse) {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText = "Please complete the reCAPTCHA.";
    return;
  }

  // Proceed with login only if reCAPTCHA is solved
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      if (user.emailVerified) {
        window.location.href = "welcome.html";
      } else {
        firebase.auth().signOut();
        document.getElementById("message").innerText = "Please verify your email before logging in.";
      }
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}


// 3. Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerText = "Login successful!";
      window.location.href = "welcome.html";

    })
    .catch(error => {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerText = error.message;
    });
}
