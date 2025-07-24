// Your Firebase config (same as other files)
const firebaseConfig = {
  apiKey: "AIzaSyA3rxlVfYrdUYYqkE28BRCBZe2ymcs7b_8",
  authDomain: "trackmybuslk.firebaseapp.com",
  projectId: "trackmybuslk",
  appId: "1:1065474252814:web:59aa4c42cd54b17c9e1c5f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;

      // Send verification email
      user.sendEmailVerification()
        .then(() => {
          document.getElementById("message").style.color = "green";
          document.getElementById("message").innerText =
            "Account created! A verification email has been sent.";
        })
        .catch(error => {
          document.getElementById("message").style.color = "red";
          document.getElementById("message").innerText =
            "Error sending verification email: " + error.message;
        });
    })
    .catch(error => {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerText = error.message;
    });
}
