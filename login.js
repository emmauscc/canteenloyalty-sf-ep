
$(document).ready(function(){
    $('.loginButton').click(loginUser());
});

function loginUser(){
    console.log("button pressed");
    console.log($('.IDinput').val().length);   
    if ($('.IDinput').val().length<5||$('.IDinput').val().length>5){
        $('.errormessage').html('Login failed. Try again');
    } else {
        console.log('not empty');
        firebaseLogin($('.IDinput').val());
        console.log(middata); 
        // window.location.href = "index.html"
    }
};



function firebaseLogin(key){
    var getKeyInfo = firebase.database().ref(key);

    getKeyInfo.on('value', (snapshot) => {
        const tempperdata = snapshot.val();
        middata = JSON.parse(tempperdata);
        console.log(middata);    
    })
};