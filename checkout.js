function checkout(){
    console.log("checkout");
    var displaydata = localStorage.getItem("adata").split(",");

    console.log(displaydata[5]);

    $('#card').val(displaydata[5]).prop("defaultValue");
    $('#expiry').val(displaydata[6]).prop("defaultValue");
    $('#secure').val(displaydata[7]).prop("defaultValue");

    //test
    //test2

};

function makePayment(){
    console.log('running payment');
    var tempdata = localStorage.getItem("adata");
    console.log(tempper,tempdata);
    var tempper = localStorage.getItem("personalData");
    writePersonalData(tempper,'users/',tempdata);
    alert("Payment Made. Thankyou for Ordering from the Canteen!")
    setTimeout(function(){
      window.location.href = "login.html"
  }, 6000);
};

function writePersonalData(userId, path, detail) {
    console.log(userId,path,detail);

    firebase.database().ref(path).set({
      key1:detail
    });
  }

  