//function along with its lexical enviroment forms a closure. or function bundled together with its lexical scope is called closure.

function x() {
    var a = 7; //lexical scope for function y
    function y() {
        console.log(a); // first it will search a into local scope of y 
        //if not found then it will search a into lexical scope of y which is x
        //if not found then it will search a into global scope
        //if not found then it will throw an error
    }
    y();
}
x();


