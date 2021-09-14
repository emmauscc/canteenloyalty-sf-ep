function checkout(){
    console.log("checkout");
    var displaydata = localStorage.getItem("adata");

    $('#card').value(displaydata[5]);
    $('#expiry').value(displaydata[6]);
    $('#secure').value(displaydata[7]);

    //test
    //test2

};

function makePayment(){
    var tempdata = localStorage.getItem("adata");
    var tempper = localStorage.getItem("personalData");
    writePersonalData(tempdata[0],'default',tempper)
};

function writePersonalData(userId, path, detail) {
    firebase.database().ref(path).set({

      key1:detail
    });
  }