/*
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
    
});

//
function firebaseLogin(key){
    var getKeyInfo = firebase.database().ref(key);

    getKeyInfo.on('value', (snapshot) => {
        const tempperdata = snapshot.val();
        console.log(tempperdata);
        middata = JSON.parse(tempperdata);
        console.log(middata);    
        localStorage.setItem("personaldata",tempperdata);
    })
};


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
        
        
        setTimeout(function(){
            console.log(localStorage.getItem("personaldata"));
            //window.location.href = "index.html"
        }, 5000);
        
    }
}; */