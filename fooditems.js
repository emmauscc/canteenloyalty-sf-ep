$(document).ready(function(){

    var data = [];

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
    
    displayCategory("HotFood", "HotFoodBox");
    displayCategory("Baguette", "BaguetteBox");
    displayCategory("Snacks", "SnacksBox");
    displayCategory("Ice Blocks", "IceBlocksBox");
    displayCategory("Drinks", "DrinksBox");
    displayCategory("Specials", "SpecialsBox");
    
    function displayCategory(title,box){
        $('.shoppingcontainer').append("<h2>"+title+"<br></br></h2>").children().last().addClass(box).attr("id",box).append(display(data,title,"."+box)).css({"float": "left"});          
    }
   
    function display(a,category,b){

        for (var i=0;i<a.length-1;i++){

            if (a[i]["Category"]==category){
                console.log(a[i]["Category"]); 
                $(b).append("<div></div>").children().last().addClass("grid"+[i]);             
                $('.grid'+[i]).append("<h3>" + a[i]["Item"] + "</h3>").append(" ").append("<br>").append("<p>$"+a[i]["Price"]+"</p>");
                $('.grid'+[i]).append("<br>").append("<img src=\"http://via.placeholder.com/150x150/163658?text=Food Image\">").append("<br>").append("<button type='button' id='cart'"+[i]+">Add to Cart</button>");
                $('.grid'+[i]).css({ "width":"190px", "float":"left", "border":"solid #eab02b 3px","text-align":"center", "margin":"2px"});
            }
        }
    }
    

});    



