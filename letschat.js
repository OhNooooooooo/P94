var firebaseConfig = {
    apiKey: "AIzaSyARrcIkXDKKTPnqaU1iXEvBrxITYodaYs0",
    authDomain: "letsachatdatabase.firebaseapp.com",
    databaseURL: "https://letsachatdatabase-default-rtdb.firebaseio.com",
    projectId: "letsachatdatabase",
    storageBucket: "letsachatdatabase.appspot.com",
    messagingSenderId: "946071523965",
    appId: "1:946071523965:web:c6bf84e61d563be7d01714"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "addinguser",
        
    });
    window.location="letschat.html"
}