//function Statement aka function Declaration
//function are heart of js

a()
function a(){ 
    console.log("a is called");
}

//function Expression
//b()
var b = function(){
    console.log("b is called");
}
//deference in fn expression and fn statement is hoisted. initialy b is undefined when jsengine execure till line 10 it is undefined and at 11 it is defined.i.e at line 11 function is assigned to b;
//named fn expression
var c = function xyz(){
    console.log("xyz")
}
c()

//anonymaous function without name used as callback and can be use where function are use as a value just like function expression
// function(){
//     console.log("hello")
// }


//first class function -> a function that can be return from another function and pass as argument and can be use as a value.
const Greet = function(param1){
    console.log(param1)
}

function PrintG(callback){
    for(let i = 0;i<5;i++){
        Greet('good morning..');
    }
}

PrintG(Greet);





