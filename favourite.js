
function addToFavourite(){

    favouriteArray = JSON.parse(localStorage.getItem("favouriteArray"));

    if (favouriteArray == null){

        favouriteArray = [];
        
    }

    $('.favouriteButtons').click(function(){

        console.log($(this).attr('id'));

        for (var i=0; i<data.length;i++){
            
            if ($(this).attr('id')=="favourite"+[i]){

                console.log(favouriteArray.includes(data[i]));

                if(favouriteArray.includes(data[i])==false){

                    console.log("yes");

                    favouriteArray.push(data[i]); 
                    
                }

            }
        
        }

        localStorage.setItem("favouriteArray",JSON.stringify(favouriteArray));

        console.log(favouriteArray);
    });

}

function removeFromFavourite(){

    
    favouriteArray = JSON.parse(localStorage.getItem("favouriteArray"));


    $('.removefavouriteButtons').click(function(){

        document.location.reload();

        console.log($(this).attr('id') + 'gone');

        favouriteArray = JSON.parse(localStorage.getItem("favouriteArray"));

        for (var i=0; i<favouriteArray.length;i++){

            if ($(this).attr('id')=="removefavourite"+[i]){


                console.log(favouriteArray);
                favouriteArray.splice(i,1);
                console.log(favouriteArray);
                //console.log(cartArray[i]['Price']);

                $("#pagecontainerfavourite").empty();
                displayFavourite(favouriteArray);
                
                
            }

        }

        
        localStorage.setItem("favouriteArray",JSON.stringify(favouriteArray));
  
        
        console.log(JSON.parse(localStorage.getItem("favouriteArray")));

    });

}