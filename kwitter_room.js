
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgBUFulf9LrBffVXpGpQ0eZ9qcTRwpObQ",
    authDomain: "project-84-29432.firebaseapp.com",
    projectId: "project-84-29432",
    storageBucket: "project-84-29432.appspot.com",
    messagingSenderId: "307105925926",
    appId: "1:307105925926:web:ea338d31e8b5540fefcfe7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();