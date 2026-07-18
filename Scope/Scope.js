//function a(){
    //console.log(b)  //undefined
//}
//a();    //as we know from execution context (assigning memoery)first variable get assigned value undefind and function copy it body as it is then phase two start i.e  code execution.
//var b = 10; // globle scope

function a(){
    console.log(b)  //10 first it will search b into local scope of a then it will search b into lexical scope of a which is globle scope.if not found till global scope then it will throw an error.
}
var b = 10; // globle scope
a();

function c(){ //lexically inside the globle scope.
    var val = 100; //local scope of function c .val is defined in the local scope of function c.
    d();
    function d(){ //lexically inside the function c.it is a child of function c.
        console.log(ans) //40
        console.log(val) //100  first it will search val into local scope of d then it will search val into lexical scope of d which is c then it will search val into global scope.if not found till global scope then it will throw an error.
    }
}

var ans =  40; //globle scope
c(); 
console.log(val) //error because val is not defined in the global scope because it is defined in the local scope of the function c.

//lexical scope is a scope which is created when a function is created.
//lexical is local memory of the function + reference of  parent lexical scope.