// Use the same Firebase config here too
const firebaseConfig = {
  apiKey: "AIzaSyA3rxlVfYrdUYYqkE28BRCBZe2ymcs7b_8",
  authDomain: "trackmybuslk.firebaseapp.com",
  projectId: "trackmybuslk",
  appId: "1:1065474252814:web:59aa4c42cd54b17c9e1c5f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Show user email
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("welcome-message").innerText = `Welcome, ${user.email}!`;
  } else {
    // No user is signed in → redirect to login
    window.location.href = "index.html";
  }
});

// Logout function
function logout() {
  auth.signOut()
    .then(() => {
      window.location.href = "index.html"; // Redirect to login page
    })
    .catch(error => {
      alert("Logout failed: " + error.message);
    });
};

auth.onAuthStateChanged(user => {
  if (user) {
    if (user.emailVerified) {
      document.getElementById("welcome-message").innerText = `Welcome, ${user.email}!`;
    } else {
      alert("Please verify your email first.");
      auth.signOut().then(() => window.location.href = "index.html");
    }
  } else {
    window.location.href = "index.html";
  }
});
