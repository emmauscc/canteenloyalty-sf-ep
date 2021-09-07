function loadAccount(){

    // $('.accountcontainer').append("<div class='imageInfo">+perdata['picture']+"</div>");
    var obnames = localStorage.getItem("odata").split(",");;
    var obvalues = localStorage.getItem("adata").split(",");;
    console.log(obnames);
    console.log(obvalues);
    for(i=0;i<8; i++){
        if (i==0||i==4){} else {
            $('.accountcontainer').append("<button id='key"+i+"' value="+i+" class='infoupdate'>update</button>");
        }
        $('.accountcontainer').append("<div class='informationTitle'>"+obnames[i]+":</div><br>");         
        $('.accountcontainer').append("<div class='information'>"+obvalues[i]+"</div><br>"); 
    }

    

};

function updateDetail(){

    $('.infoupdate').click(function(){
        var obvalues = localStorage.getItem("adata").split(",");
        console.log(obvalues);
        console.log($(this).attr('value'));
        var updateinfo = prompt("Please update this information below");

        obvalues[$(this).attr('value')] = updateinfo;
        console.log(obvalues);

        localStorage.setItem("adata",obvalues);


    });
}
