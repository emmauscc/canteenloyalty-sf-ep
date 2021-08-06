function loadAccount(){
    
    // $('.accountcontainer').append("<div class='imageInfo">+perdata['picture']+"</div>");
    for(i=0;i<arraydata.length-1; i++){
        if (i==0||i==4){} else {
            $('.accountcontainer').append("<button id='key"+i+"' class='infoupdate'>update</button>");
        }
        $('.accountcontainer').append("<div class='informationTitle'>"+objectnames[i]+":</div><br>");         
        $('.accountcontainer').append("<div class='information'>"+arraydata[i]+"</div><br>"); 
    }
};
    //this function is incomplete.
