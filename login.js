$(document).ready(function(){

    $('.loginButton').click(console.log('pressed'));
    
    $('.loginButton').click(loginUser());
        
    function loginUser(){
        console.log("button pressed");
        console.log($('.IDinput').val());
        firebaseLogin($('.IDinput').val());
        console.log(perdata);    
        if (perdata==null){
            $('.alertbox').html('Login failed. Try again');
        }
        if (perdata!=null){
            //window.location.href = "index.html";
        }
    };

    

    function firebaseLogin(key){

        /*
        var getKeyInfo = firebase.database().ref(key);

        getKeyInfo.on('value', (snapshot) => {
            const tempperdata = snapshot.val();
            perdata = JSON.parse(tempperdata);
            console.log(perdata);    
        })
        */
    }

});