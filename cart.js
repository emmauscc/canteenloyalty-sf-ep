

function addToCart(){

    console.log("addToCart");

    cartArray = JSON.parse(localStorage.getItem("cartArray")); // 


    console.log("hello");

    $('.cartButtons').click(function(){

        cartArray = JSON.parse(localStorage.getItem("cartArray")); // 

        if (cartArray == null){
            
            cartArray = [];
            localStorage.setItem("cartTotal",0);
    
        }
    
        else{
    
            cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
    
        }

        var cartArrayItems = [];

        for (var i=0;i<cartArray.length;i++){
            cartArrayItems.push(cartArray[i]['Item']);
        }

        console.log(cartArrayItems);

        console.log($(this).attr('id'));

        
        for (var i=0; i<data.length;i++){

            var qtyvalue = $("#qty" + [i]).val(); //
            
            if ($(this).attr('id')=="cart"+[i]){

                console.log(cartArray);

                if (qtyvalue == 0){
                    $('#qty'+[i]).attr('placeholder', 'QTY???');
                    $('#qty'+[i]).css({ "color":"red"});
                    console.log("qty value missing")
                }

                else{

                    $('#cart'+[i]).css({"background-color":"white"});

                    $('#qty'+[i]).css({ "color":"black"});

                    console.log(cartArray.includes(data[i]));

                    if(cartArrayItems.includes(data[i]['Item'])==false){ //

                        data[i]["Quantity"] = qtyvalue;
                        
                        cartArray.push(data[i]); //

                        var num = parseFloat(data[i]['Price']); //
                        num = num*data[i]["Quantity"];
                        cartTotal = cartTotal + num;
                        console.log("cart total is " + cartTotal);
                        

                        
                    }

                }

            }
        
        }  

        localStorage.setItem("cartArray",JSON.stringify(cartArray));
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));

        console.log(JSON.parse(localStorage.getItem("cartArray")));
        console.log(cartArray);
    });


    $('.clearbutton').click(function(){
        console.log("clear processed")
        cartTotal = 0; 
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));
        cartArray = [];
        localStorage.setItem("cartArray",JSON.stringify(cartArray));
        document.location.reload();
    });

    $(".checkoutbutton").click(function(){
        console.log("checkout processed");
        window.location.href = "checkout.html";
    })


}



function removeFromCart(){

    
    cartTotal = JSON.parse(localStorage.getItem("cartTotal"));


    $('.removecartButtons').click(function(){

        document.location.reload();

        console.log($(this).attr('id') + 'gone');

        cartArray = JSON.parse(localStorage.getItem("cartArray"));

        for (var i=0; i<cartArray.length;i++){

            if ($(this).attr('id')=="removecart"+[i]){

                cartArray.splice(i,1);
                console.log(cartArray);

                $(".cartitems").empty();
                displayCart(cartArray);
                cartTotal = 0;

                for (var i=0; i<cartArray.length;i++){
                    var num = parseFloat(cartArray[i]['Price']);
                    num = num*cartArray[i]["Quantity"];
                    cartTotal = cartTotal + num;
                    console.log("cart total is " + cartTotal);
                    
                }
                
            }

        }

        
        localStorage.setItem("cartArray",JSON.stringify(cartArray));
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));
        
        console.log(JSON.parse(localStorage.getItem("cartArray")));

    });

    
    $(".changeqtyButtons").click(function(){

        console.log("qtybutton clicked");

        

        for (var i=0; i<cartArray.length;i++){

            

            var qtyvalue = $("#removeqty" + [i]).val();

            if (qtyvalue != cartArray[i]['Quantity']){

                if ($(this).attr('id')=="changeqty"+[i]){

                    $('#changeqty'+[i]).css({"background-color":"white"});

                    cartArray[i]["Quantity"] = qtyvalue;    
                    
                }

            }

            var num = parseFloat(cartArray[i]['Price']);
                
            cartTotal = 0;

            if (cartArray[i]["Quantity"] == 1){
                cartTotal = cartTotal + num;
                console.log("cart total is " + cartTotal);
            }

            else{
                num = num*cartArray[i]["Quantity"];
                cartTotal = cartTotal + num;
                console.log("cart total is " + cartTotal);
            }

            if ($(this).attr('id')=="changeqty"+[i]){

                $('.finalprice').html("$ " + cartTotal); 

            }
            
        }


        localStorage.setItem("cartArray",JSON.stringify(cartArray));
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));
        
    });

}

    
    

