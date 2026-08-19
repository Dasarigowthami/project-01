const { log } = require("node:console");

function add(a,b){
    return a+b;
}
// console.log();

function sub(a,b){
    return a-b;
}




console.log(add(3,5)); 
module.exports={add,sub};