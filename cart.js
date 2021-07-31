

function addToCart(){

    cartArray = JSON.parse(localStorage.getItem("cartArray"));

    if (cartArray == null){
        
        cartArray = [];
        localStorage.setItem("cartTotal",0);
        
    }

    else{

        cartTotal = JSON.parse(localStorage.getItem("cartTotal"));

    }



    $('.cartButtons').click(function(){

        console.log($(this).attr('id'));

        
        for (var i=0; i<data.length;i++){

            var qtyvalue = $("#qty" + [i]).val();
            
            if ($(this).attr('id')=="cart"+[i]){

                console.log(cartArray);

                //console.log(cartArray.includes(data[i]));

                if (qtyvalue == 0){
                    $('#qty'+[i]).attr('placeholder', 'QTY???');
                    $('#qty'+[i]).css({ "color":"red"});
                    console.log("qty value missing")
                }

                else{

                    $('#qty'+[i]).css({ "color":"black"});

                    if(cartArray.includes(data[i])==false){

                        console.log("qty value is" + qtyvalue);

                        cartArray.push(data[i]); 

                        var num = parseFloat(data[i]['Price']);
                        console.log(num);
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

}



function removeFromCart(){

    
    cartTotal = JSON.parse(localStorage.getItem("cartTotal"));


    $('.removecartButtons').click(function(){

        document.location.reload();

        console.log($(this).attr('id') + 'gone');

        cartArray = JSON.parse(localStorage.getItem("cartArray"));

        for (var i=0; i<cartArray.length;i++){

            if ($(this).attr('id')=="removecart"+[i]){


                console.log(cartArray);
                cartArray.splice(i,1);
                console.log(cartArray);
                //console.log(cartArray[i]['Price']);

                $(".cartitems").empty();
                displayCart(cartArray);
                cartTotal = 0;

                for (var i=0; i<cartArray.length;i++){
                    var num = parseFloat(cartArray[i]['Price']);
                    cartTotal = cartTotal + num;
                }

                /*

                var num = parseFloat(data[i]['Price']);
                console.log(num);   
                cartTotal = cartTotal - num;
                cartTotal = cartTotal.toFixed(1);
                console.log("cart total is " + cartTotal);

                */
                
            }

        }

        
        localStorage.setItem("cartArray",JSON.stringify(cartArray));
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));
        
        console.log(JSON.parse(localStorage.getItem("cartArray")));

    });

}

    
    

