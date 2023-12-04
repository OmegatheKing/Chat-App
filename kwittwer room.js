//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAhltf8YpVwhzjOcuVNI9qRHV_oEeyePF4",
  authDomain: "kwitter-93-d962c.firebaseapp.com",
  databaseURL: "https://kwitter-93-d962c-default-rtdb.firebaseio.com",
  projectId: "kwitter-93-d962c",
  storageBucket: "kwitter-93-d962c.appspot.com",
  messagingSenderId: "939097668736",
  appId: "1:939097668736:web:011445c73ef37486583a65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - "+ Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
  //End code
  });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter romm.html"
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter romm.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
