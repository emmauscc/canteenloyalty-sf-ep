
$(document).ready(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyAXPe9NDkBX3zvVxJKE209czStQrWS1oOI",
        authDomain: "canteen-collaborative.firebaseapp.com",
        databaseURL: "https://canteen-collaborative-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "canteen-collaborative",
        storageBucket: "canteen-collaborative.appspot.com",
        messagingSenderId: "1042074687324",
        appId: "1:1042074687324:web:f27e3decefe73c86761399",
        measurementId: "G-YWLEEL631D"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      var stringObject = "{id:'11111', name:'Lacey', grade:'8', campus:'South Plymptom', points:'200', cardNumber:'4444333222111', expiryDate:'11/22', securityNumber:'900', picture:''}";

      var sstring = JSON.stringify(stringObject);

      console.log(sstring);

      console.log(JSON.parse(sstring));
    
});

//

function loginUser(){
    localStorage.clear();
    console.log("button pressed");
    console.log($('.IDinput').val());   
    if ($('.IDinput').val().length!=5){
        $('.errormessage').html('Login failed. Try again');
    } else {
        $('.errormessage').html(' ');
        console.log('not empty');
        firebaseLogin($('.IDinput').val());

        localStorage.setItem("personaldata",middata);
        // console.log(localStorage.getItem("personaldata"))
        console.log(middata); 
        window.location.href = "index.html"
    }
};



function firebaseLogin(key){
    var getKeyInfo = firebase.database().ref(key);

    getKeyInfo.on('value', (snapshot) => {
        const tempperdata = snapshot.val();
        console.log(tempperdata);
        middata = JSON.parse(tempperdata);
        console.log(middata);    
    })
};