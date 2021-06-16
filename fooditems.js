$(document).ready(function(){

    var data = [];

    $.ajax({
            
        url:"menu.csv", 
        dataType:"text", 
        async: false,
        
        success: function(result){
            
            var JSONfile = csvJSON(result);
            
            data = JSON.parse(JSONfile);
            
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
    display(data);

    
    
    function display(a){
        for (var i=0;i<a.length-1;i++){
             $('.shoppingcontainer').append("<div></div>").children().last().addClass("grid"+[i]);
             $('.grid'+[i]).append("<h3>" + a[i]["Item"] + "</h3>").append(" ").append("<br>").append("<p>$"+a[i]["Price"]+"</p>");
             $('.grid'+[i]).append("<br>").append("<img src=\"http://via.placeholder.com/150x150/163658?text=Food Image\">").append("<br>");
             $('.grid'+[i]).css({"height": "250px", "width":"190px", "float":"left", "border":"solid #eab02b 3px","text-align":"center", "margin":"2px"});
         }
    }
    

});    



