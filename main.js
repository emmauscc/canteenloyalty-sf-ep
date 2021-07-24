
var perdata = {id:"10236", name:"Steven", grade:"9", class:"9M", campus:"South Plympton", points:"100", cardNumber:"1111222233334444", expiryDate:"04/29", securityNumber:"111", picture:""}


// console.log(arraifiedObject(0))

var tempperdata;
// var idNum = $('username').val();
var totalcost = 12;
var points;

// userLogin(idNum);
totalPoints(totalcost);
console.log(points);
var data = []; 
var cartArray = [];

$(document).ready(main);


function main(){
    var perdata;
    var tempperdata;
    // var idNum = $('username').val();
    var totalcost = 12;
    var points;
    

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
    /*
    addToCart();
    console.log(cartArray);
    display(cartArray,"Baguette","#pagecontainercart");
    */

    // userLogin(idNum);
    totalPoints(totalcost);
    console.log(points);
}
