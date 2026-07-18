
function heigth(a) {
    function width(b) {
        return a * b;
    }
    return width;
}

const ans = heigth(45);
console.log(ans(2));

// here a is a parameter of function a and a is a variable in global scope.function b have lexical scope of function a.function c have lexical scope of function b. event after execution of function a, function b and function c will still have access to the value of a because of closure. in closure function have access to the variables of its lexical scope even after the execution of the function.
//execution context of function a is created and when function a is executed, the execution context of function a is destroyed but the lexical environment of function a is not destroyed because function b and function c have access to the value of a.

function a(a) {
    return function b(b = 2) {
        return function c(c) {
            return a + b + c;
        }
    }
}

console.log(a(2)(5)(2));

//in arrow function 

const A = (a) => (b) => (c) => a + b + c;
console.log(A(2)(5)(78));