function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB84ygHnhu4ZdEw-QgW-VAZEE5dGqiXwDQ",
    authDomain: "lets-chat-web-app-fe966.firebaseapp.com",
    projectId: "lets-chat-web-app-fe966",
    storageBucket: "lets-chat-web-app-fe966.appspot.com",
    messagingSenderId: "258891296281",
    appId: "1:258891296281:web:326a42e62f8bae6d890488",
    measurementId: "G-CJ3Z59HDJ8"
  };
  
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);