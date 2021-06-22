
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
    console.log(cartArray);

    // userLogin(idNum);
    totalPoints(totalcost);
    console.log(points);
}