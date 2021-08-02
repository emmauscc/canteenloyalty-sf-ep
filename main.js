
var perdata = {id:"11111", name:"Jimmy C", grade:"7", campus:"South Plymptom", points:"0", cardNumber:"11112222333444", expiryDate:"11/11", securityNumber:"111", picture:""}
var objectnames = Object.keys(perdata);
var arraydata = Object.values(perdata);   //arraifiedObject(perdata);

// console.log(arraifiedObject(0))

var tempperdata;
var middata;
// var idNum = $('username').val();
var totalcost;
var points;

// userLogin(idNum);
totalPoints(totalcost);
console.log(points);
var data = []; 
var cartArray = [];
var cartTotal = 0;

$(document).ready(main);

function main(){
    

    

    $('.loginButton').click( function(){loginUser()});
    console.log('middata = '+middata);

    console.log(arraydata);
    console.log(objectnames);
    loadAccount();

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

    var finalCartTotal = localStorage.getItem("cartTotal");
 
    $('.finalprice').html("$ " + finalCartTotal); 
  
    addToFavourite();

    var newFavouriteArray = localStorage.getItem("favouriteArray"); 

    var finalFavouriteArray = JSON.parse(newFavouriteArray);

    console.log(finalFavouriteArray);

    displayFavourite(finalFavouriteArray);

    removeFromFavourite();
    

    


    // userLogin(idNum);
    totalPoints(totalcost);
    console.log(points);
}

/*
function arraifiedObject(x){
  arraydata = object.values(x);
} */