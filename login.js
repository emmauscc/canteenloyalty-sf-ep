function userLogin(key){

    var getKeyInfo = firebase.database().ref(key);

    getKeyInfo.on('value', (snapshot) => {
        const tempperdata = snapshot.val();
        perdata = JSON.parse(tempperdata);
        console.log(perdata);    
    })
}