// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLx-TjPZjP11OCMC2eDWJJFVl_9fzD8_4",
    authDomain: "kwitter-2-4309d.firebaseapp.com",
    projectId: "kwitter-2-4309d",
    storageBucket: "kwitter-2-4309d.appspot.com",
    messagingSenderId: "535393871086",
    appId: "1:535393871086:web:e93476ad990411bdb87fff"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



