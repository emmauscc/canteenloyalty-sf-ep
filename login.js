
$(document).ready(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyAD6I8LABP6IgRjECl6ktRP_xRUajcFQM8",
        authDomain: "canteen-loyalty.firebaseapp.com",
        databaseURL: "https://canteen-loyalty-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "canteen-loyalty",
        storageBucket: "canteen-loyalty.appspot.com",
        messagingSenderId: "721137803742",
        appId: "1:721137803742:web:d1ee73eec75fba91673d4f",
        measurementId: "G-T6VBLGTYVT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    
});

function loginUser(){
    console.log("button pressed");
    console.log($('.IDinput').val());   
    if ($('.IDinput').val().length!=5){
        $('.errormessage').html('Login failed. Try again');
    } else {
        $('.errormessage').html(' ');
        console.log('not empty');
        firebaseLogin($('.IDinput').val());

        localStorage.setItem("personaldata",JSON.stringify(middata));
        console.log(middata); 
        window.location.href = "index.html"
    }
};



function firebaseLogin(key){
    var getKeyInfo = firebase.database().ref(key);

    getKeyInfo.on('value', (snapshot) => {
        const tempperdata = snapshot.val();
        middata = tempperdata;
        middata = JSON.parse(tempperdata);
        console.log(middata);    
    })
};