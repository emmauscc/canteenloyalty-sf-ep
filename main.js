var tempperdata;
var middata;
// var idNum = $('username').val();
var totalcost;
var points;

var objectnames;
var arraydata;
var data = []; 
var cartArray = [ ];
var cartTotal = 0;


$(document).ready(main);

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

firebaseLogin(48830);

console.log(localStorage);

function main(){

    $('.loginButton').click( function(){loginUser()});
    console.log('middata = '+middata);
    
    var perdata = JSON.parse(localStorage.getItem("personaldata"));
    console.log(perdata);
    //var perdata = {id:"11111", name:"Jimmy C", grade:"7", campus:"South Plymptom", points:"0", cardNumber:"11112222333444", expiryDate:"11/11", securityNumber:"111", picture:""}
    objectnames = Object.keys(perdata);
    arraydata = Object.values(perdata);  

    localStorage.setItem("adata",arraydata);
    localStorage.setItem("odata",objectnames);
    
    console.log(arraydata);
    console.log(objectnames); 

    loadAccount();
    updateDetail();
    
    displayCategory("Hot Food", "HotFoodBox");

    displayCategory("Baguette", "BaguetteBox");
    displayCategory("Snacks", "SnacksBox");
    displayCategory("Ice Blocks", "IceBlocksBox");
    displayCategory("Drinks", "DrinksBox");
    displayCategory("Specials", "SpecialsBox");

    addToCart();

    var newCartArray = localStorage.getItem("cartArray"); 

    var finalCartArray = JSON.parse(newCartArray);

    console.log(finalCartArray);

    displayCart(finalCartArray);

    removeFromCart();

    addToFavourite();

    var newFavouriteArray = localStorage.getItem("favouriteArray"); 

    var finalFavouriteArray = JSON.parse(newFavouriteArray);

    console.log(finalFavouriteArray);

    displayFavourite(finalFavouriteArray);

    removeFromFavourite();

    var finalCartTotal = localStorage.getItem("cartTotal");
 
    $('.finalprice').html("$ " + finalCartTotal); 

    totalPoints(cartTotal)
    $('.acpoints').html(" Number of earned Points: "+points);
    console.log(points);

    checkout();

    
 
    
    
    
    

    


    // userLogin(idNum);
console.log(points);
}

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
            window.location.href = "index.html"
        }, 300);
        
    }
};