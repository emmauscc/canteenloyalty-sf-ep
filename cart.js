

    function addToCart(){

        cartArray = JSON.parse(localStorage.getItem("cartArray"));

        if (cartArray == null){
            cartArray = [];
            localStorage.setItem("cartTotal",0);
            
        }

        else{
            cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
        }

        //console.log(cartArray);

        $('.cartButtons').click(function(){

            console.log($(this).attr('id'));

            for (var i=0; i<data.length;i++){

                
                
                if ($(this).attr('id')=="cart"+[i]){

                    console.log(cartArray);

                    //console.log(cartArray.includes(data[i]));

                    if(cartArray.includes(data[i])==false){

                        var num = parseFloat(data[i]['Price']);
                        console.log(num);
                        
                        cartArray.push(data[i]); 
                        cartTotal = cartTotal + num;
                        console.log("cart total is " + cartTotal);
                        
                    }

                    
  
                }

                
            
            }

            
            
            localStorage.setItem("cartArray",JSON.stringify(cartArray));
            localStorage.setItem("cartTotal",JSON.stringify(cartTotal));

            

            //console.log(cartArray);
            console.log(JSON.parse(localStorage.getItem("cartArray")));
            console.log(cartArray);
        });

        


    }

  

    function removeFromCart(){

        cartArray = JSON.parse(localStorage.getItem("cartArray"));

        $('.removecartButtons').click(function(){

            document.location.reload();

            console.log($(this).attr('id') + 'gone');

            for (var i=0; i<cartArray.length;i++){
                if ($(this).attr('id')=="removecart"+[i]){
                    console.log(cartArray);
                    
                    cartArray.splice(cartArray[i],1);
                    
                    console.log(cartArray);

                
                    $("#pagecontainercart").empty();
                
                    displayCart(cartArray);
                    
                    
                }
            }

            
            localStorage.setItem("cartArray",JSON.stringify(cartArray));
            

            //console.log(cartArray);
            console.log(JSON.parse(localStorage.getItem("cartArray")));
            console.log(cartArray);
        });

        


    }

    
    

