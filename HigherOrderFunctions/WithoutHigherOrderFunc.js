//without higherorderFunction
const radius = [2,5,3,5,9];
const calculateArea = function (radius){
    const output = [];
    for(a of radius){
        output.push(Math.PI*a*a);
    }
    return output;
}
console.log(`area: ${calculateArea(radius).toLocaleString()}`);

const calculateCircumference = function (radius){
    const output = [];
    for(c of radius){
        output.push(Math.PI*c*2);
    }
    return output;
}
console.log(`circumFerence: ${calculateCircumference(radius).toLocaleString()}`);

const calculateDiameter = function (radius){
    const output = [];
    for(c of radius){
        output.push(c*2);
    }
    return output;
}
console.log(`Diameter: ${calculateDiameter(radius).toLocaleString()}`);

