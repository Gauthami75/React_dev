const express = require("express")
const data = require("./savedata")
var router = express.Router();
var app = express()
//const fetch = require('node-fetch');

// fetch(data)
// .then(res => {
//     console.log("got data")
// })
// .catch(err=>{
//     console.log(err)
// })
var object_depth =0;
var deep_child =[];
data.map(user => {
    var child = user.deep_childrens;
        deep_child.push(child)  
        if(child.length == 0){
            object_depth = 0;
            data["level"] = object_depth;
        }
        else{
            var max_depth = getDepth(child);
            object_depth = max_depth;
            data["level"] = object_depth;
            //console.log(max_depth);
        }
})
//console.log("data:",data)
function getDepth(userData){
    var current_depth= 0;
    var max_depth =0;
    let string = JSON.stringify(userData)
    for(i=0; i<= string.length ; i++){
        if(string[i] == '{'){
            current_depth++
        }
        if(string[i] == '}'){
            current_depth--
        }
        if(current_depth > max_depth){
            max_depth = current_depth
        }
    }
    return max_depth
}

data.map(user=>{
    var pool = user.pools;
    console.log("UserPool", user.length)
    for(i=0 ; i<= pool.length ; i++){
        //console.log(pool)
    }
    
})

var app = express()
app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(4000, function () {
console.log("Started application on port %d", 4000)
});