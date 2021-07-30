

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
            
            if ($(this).attr('id')=="cart"+[i]){

                console.log(cartArray);

                //console.log(cartArray.includes(data[i]));

                if(cartArray.includes(data[i])==false){

                    cartArray.push(data[i]); 

                    var num = parseFloat(data[i]['Price']);
                    console.log(num);
                    cartTotal = cartTotal + num;
                    console.log("cart total is " + cartTotal);
                    
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

    cartArray = JSON.parse(localStorage.getItem("cartArray"));
    cartTotal = JSON.parse(localStorage.getItem("cartTotal"));


    $('.removecartButtons').click(function(){

        document.location.reload();

        console.log($(this).attr('id') + 'gone');

        for (var i=0; i<cartArray.length;i++){

            if ($(this).attr('id')=="removecart"+[i]){

                cartArray.splice(cartArray[i],1);
                $("#pagecontainercart").empty();
                displayCart(cartArray);

                var num = parseFloat(data[i]['Price']);
                console.log(num);   
                cartTotal = cartTotal - num;
                console.log("cart total is " + cartTotal);
                
            }

        }

        
        localStorage.setItem("cartArray",JSON.stringify(cartArray));
        localStorage.setItem("cartTotal",JSON.stringify(cartTotal));
        
        console.log(JSON.parse(localStorage.getItem("cartArray")));

    });

}

    
    

