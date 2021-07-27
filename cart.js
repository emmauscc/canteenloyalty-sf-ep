

    function addToCart(){

        cartArray = JSON.parse(localStorage.getItem("cartArray"));

        if (cartArray == null){
            cartArray = [];
        }

        console.log(cartArray);

        $('.cartButtons').click(function(){

            console.log($(this).attr('id'));

            for (var i=0; i<data.length-1;i++){
                if ($(this).attr('id')=="cart"+[i]){
                    cartArray.push(data[i]);
                    
                }
            }
            
            localStorage.setItem("cartArray",JSON.stringify(cartArray));

            //console.log(cartArray);
            console.log(JSON.parse(localStorage.getItem("cartArray")));
            console.log(cartArray);
        });

        


    }

    function removeFromCart(){

        cartArray = JSON.parse(localStorage.getItem("cartArray"));

        $('.removecartButtons').click(function(){

            console.log($(this).attr('id') + 'gone');

            for (var i=0; i<cartArray.length-1;i++){
                if ($(this).attr('id')=="removecart"+[i]){
                    console.log(cartArray);
                    
                    cartArray.splice(cartArray[i],1);
                    
                    console.log(cartArray);

                    localStorage.setItem("cartArray",JSON.stringify(cartArray));

                    displayCart(cartArray);
                    
                }
            }

            
            localStorage.setItem("cartArray",JSON.stringify(cartArray));

            //console.log(cartArray);
            console.log(JSON.parse(localStorage.getItem("cartArray")));
            console.log(cartArray);
        });

        


    }

    
    

