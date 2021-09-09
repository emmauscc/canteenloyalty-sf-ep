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

console.log(localStorage);

function main(){

    $('.loginButton').click( function(){loginUser()});
    console.log('middata = '+middata);
    
    var newperdata = JSON.parse(localStorage.getItem("personaldata"));
    console.log(newperdata);
    var perdata = newperdata;
    console.log(perdata);
    //var perdata = {id:"11111", name:"Jimmy C", grade:"7", campus:"South Plymptom", points:"0", cardNumber:"11112222333444", expiryDate:"11/11", securityNumber:"111", picture:""}
    objectnames = Object.keys(perdata);
    var arraydata = Object.values(perdata);  

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



