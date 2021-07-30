
// var perdata = {id:"10236", name:"Steven", grade:"9", class:"9M", campus:"South Plympton", points:"100", cardNumber:"1111222233334444", expiryDate:"04/29", securityNumber:"111", picture:""}
var perdata = {};

// console.log(arraifiedObject(0))

var tempperdata;
// var idNum = $('username').val();
var totalcost;
var points;

// userLogin(idNum);
totalPoints(totalcost);
console.log(points);
var data = []; 
var cartArray = [];

$(document).ready(main);

function main(){
    

    var firebaseConfig = {
        apiKey: "AIzaSyAD6I8LABP6IgRjECl6ktRP_xRUajcFQM8",
        authDomain: "canteen-loyalty.firebaseapp.com",
        databaseURL: "https://canteen-loyalty-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "canteen-loyalty",
        storageBucket: "canteen-loyalty.appspot.com",
        messagingSenderId: "721137803742",
        appId: "1:721137803742:web:d1ee73eec75fba91673d4f",
        measurementId: "G-T6VBLGTYVT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

    $('.loginButton').click(console.log('pressed'));
    
    
    

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

    /*
    addToCart();
    console.log(cartArray);
    display(cartArray,"Baguette","#pagecontainercart");
    */

    // userLogin(idNum);
    totalPoints(totalcost);
    console.log(points);
}
