var firebaseConfig = {
    apiKey: "AIzaSyDWL25ZDcZIOKff_a1F7wdri5DuhZ5sS7A",
    authDomain: "letschat-final.firebaseapp.com",
    databaseURL: "https://letschat-final-default-rtdb.firebaseio.com",
    projectId: "letschat-final",
    storageBucket: "letschat-final.appspot.com",
    messagingSenderId: "1050451637926",
    appId: "1:1050451637926:web:4bd74a6b352fdd4f34a667",
    measurementId: "G-85KN2E7LW9"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    });});}
       getData();