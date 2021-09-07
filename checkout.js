function checkout(){
    console.log("checkout");
    var displaydata = localStorage.getItem("adata");

    $('#card').value(displaydata[5]);
    $('#expiry').value(displaydata[6]);
    $('#secure').value(displaydata[7]);

    //test
    //test2

};