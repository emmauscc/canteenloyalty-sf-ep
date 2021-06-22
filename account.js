$(document).ready(function(){
    loadAccount();
});


    function loadAccount(){
        var arrayperdata = Object.values(perdata);
        $('.accountcontainer').append("<div class='imageInfo">+perdata['picture']+"</div>");
        for(i=0;i<perdata.length-1; i++){
            $('.accountcontainer').append("<br></br><div class='information'>"+arrayperdata[i]+"</div>"); 
        }
    }
    //this function is incomplete.
