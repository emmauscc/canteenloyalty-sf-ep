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
    
    var newperdata = localStorage.getItem("personaldata");
   // var perdata = JSON.parse(newperdata);
    var perdata = {id:"11111", name:"Jimmy C", grade:"7", campus:"South Plymptom", points:"0", cardNumber:"11112222333444", expiryDate:"11/11", securityNumber:"111", picture:""}
    var objectnames = Object.keys(perdata);
    var arraydata = Object.values(perdata);  
    
    console.log(arraydata);
    console.log(objectnames); 

    
    //loadAccount(); 

    displayCategory("Hot Food", "HotFoodBox");

    displayCategory("Baguette", "BaguetteBox");
    displayCategory("Snacks", "SnacksBox");
    displayCategory("Ice Blocks", "IceBlocksBox");
    displayCategory("Drinks", "DrinksBox");
    displayCategory("Specials", "SpecialsBox");

    addToFavourite();

    var newFavouriteArray = localStorage.getItem("favouriteArray"); 

    var finalFavouriteArray = JSON.parse(newFavouriteArray);

    console.log(finalFavouriteArray);

    displayFavourite(finalFavouriteArray);

    removeFromFavourite();

    addToCart();

    var newCartArray = localStorage.getItem("cartArray"); 

    var finalCartArray = JSON.parse(newCartArray);

    console.log(finalCartArray);

     displayCart(finalCartArray);

    removeFromCart();

    var finalCartTotal = localStorage.getItem("cartTotal");
 
    $('.finalprice').html("$ " + finalCartTotal); 



 

    $('.checkoutbutton').click(function(){
        window.location.href = "checkout.html"
    });
    checkout();
    
    

    


    // userLogin(idNum);
console.log(points);
}



