function checkout(){
    console.log("checkout");
    var displaydata = localStorage.getItem("adata");

    $('.card').val(displaydata[5]);
    $('.expiry').val(displaydata[6]);
    $('.secure').val(displaydata[7]);

    //test
    //test2

};

function makePayment(){
    console.log('running payment');
    var tempdata = localStorage.getItem("adata");
    console.log(tempper,tempdata);
    var tempper = localStorage.getItem("personalData");
    writePersonalData(tempper,'users/',tempdata);
};

function writePersonalData(userId, path, detail) {
    console.log(userId,path,detail);

    firebase.database().ref(path).set({
      key1:detail
    });
  }

  