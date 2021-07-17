
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDRzJlsKbG89qBlPnTptO3XnDvCUunLLpM",
      authDomain: "kwitter-ab7f6.firebaseapp.com",
      databaseURL: "https://kwitter-ab7f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-ab7f6",
      storageBucket: "kwitter-ab7f6.appspot.com",
      messagingSenderId: "565079138228",
      appId: "1:565079138228:web:b963ad8cc9abe010f8dce1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addroom() {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
           purpose: "adding room_name"
           });
           localStorage.setItem("room_name", room_name);
           window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row = "<div class= 'room_name' id= "+ Room_names +"onclick = 'redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page";
}
