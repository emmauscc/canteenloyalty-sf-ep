

    function addToCart(){

        console.log(cartArray);

        $('.cartButtons').click(function(){

            console.log($(this).attr('id'));

            for (var i=0; i<data.length-1;i++){
                if ($(this).attr('id')=="cart"+[i]){
                    cartArray.push(data[i]);
                    
                }
            }
            
            console.log(cartArray);

        });

        


    }

    
    
    
