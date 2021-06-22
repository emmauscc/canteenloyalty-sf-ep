

    function addToCart(){

        $("#cart0").click(function() {
            console.log("Button clicked");
            cartArray.push(data[0]);

        }); 

        
        for (var i=0;i<data.length-1;i++){
            $("#cart"+[i]).click(function() {
                console.log("Button clicked");
                cartArray.push(data[i]);
    
            }); 
        }
    
        console.log("You have these items in your cart:" + cartArray);
    }

    
    
    
