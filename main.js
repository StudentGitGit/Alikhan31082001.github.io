// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyBdPHqP1JiGeIiE4eOJY-s0hdr3-qK-Q6Q",
  authDomain: "auth-form-f5232.firebaseapp.com",
  projectId: "auth-form-f5232",
  storageBucket: "auth-form-f5232.appspot.com",
  messagingSenderId: "279823544764",
  appId: "1:279823544764:web:d8008ab77855858c08fbb9"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
            window.location.href = "website.html"
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}