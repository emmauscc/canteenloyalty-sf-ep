

    function addToCart(){


        for (var i=0;i<data.length-1;i++){
            $("#cart"+[i]).click(function() {
                console.log("Button clicked");
                cartArray.push(data[i]);
    
            }); 
        }

    }

    
    
    
