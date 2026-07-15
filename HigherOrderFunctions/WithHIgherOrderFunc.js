// const radius = [2,3,6,7];

// const area  = function(radius){
//     return Math.PI*radius*radius;
// }

// const circumFerence = function(radius){
//     return Math.PI*radius*2;
// }

// const Diameter = function(radius){
//     return 2*radius;
// }

// const calculate = function(radius,func){
//     const output = [];
//     for(let a of radius){
//         output.push(func(a));
//     }
//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumFerence));
// console.log(calculate(radius,Diameter));

// more moduler

const radius = [2,3,6,7];

const area  = radius=> Math.PI*radius*radius;
const circumFerence = radius=> Math.PI*radius*2;
const Diameter = radius=> 2*radius;

const calculate = function(radius,func){
    const output = [];
    for(let a of radius){
        output.push(func(a));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumFerence));
console.log(calculate(radius,Diameter));

