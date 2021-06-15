function login(idNum, password) {
    readSpecificData(idNum)
    
}

function readSpecificData(key){

    var getKeyInfo = firebase.database().ref(key);

    getKeyInfo.on('value', (snapshot) => {
        const perdata = snapshot.val();

        console.log(perdata);    
    })
}