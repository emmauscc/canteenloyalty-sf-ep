var cartArray = [];

function displayCategory(title,box){
    $('.shoppingcontainer').append("<h2>"+title+"<br></br></h2>").children().last().addClass(box).attr("id",box).append(display(data,title,"."+box)).css({"float": "left"}); 
    console.log("display working");        
}

function display(dataset,category,location){

    for (var i=0;i<dataset.length-1;i++){

        if (dataset[i]["Category"]==category){
            console.log(dataset[i]["Category"]); 
            $(location).append("<div></div>").children().last().addClass("grid"+[i]);             
            $('.grid'+[i]).append("<h3>" + dataset[i]["Item"] + "</h3>").append(" ").append("<br>").append("<p>$"+dataset[i]["Price"]+"</p>");
            $('.grid'+[i]).append("<br>").append("<img src=\"http://via.placeholder.com/150x150/163658?text=Food Image\">").append("<br>").append("<button type='button'>Add to Cart</button>").children().last().addClass("cartButtons").attr("id","cart"+[i]);
            $('.grid'+[i]).css({ "width":"190px", "float":"left", "border":"solid #eab02b 3px","text-align":"center", "margin":"2px"});
        }
    }
}

$(document).ready(function(){


    $.ajax({
            
        url:"https://raw.githubusercontent.com/emmauscc/canteenloyalty-sf-ep/master/menu.csv", 
        dataType:"text", 
        async: false,
        
        success: function(result){
            
            var JSONfile = csvJSON(result);
            
            data = JSON.parse(JSONfile);

            console.log(data);

            console.log(Object.keys(data[0]));

            console.log(data[15]["Type\r"]);
            
        }   
    })
    
   
    function csvJSON(csv){
    
        var lines=csv.split("\n");
    
        var result = [];
    
        var headers=lines[0].split(",");
    
        for(var i=1;i<lines.length;i++){
    
            var obj = {};
            var currentline=lines[i].split(",");
    
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
    
            result.push(obj);
    
        } 
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
    }
    
    console.log("ready");
    console.log(data);
    
    
    
    
   
   
    

});    



