//string are immutable in js.
let str = " Brijesh Bhardwaj  "
console.log(str)
console.log(str.trim()); //trim whitespaces from begining and ending and return new String cz muttation is not allowed.

console.log(str.trim().toUpperCase());
console.log(str.trim().toLowerCase())

let str2 = "John Doe"
console.log(str2.indexOf("D"))
console.log(str2.at(0));
console.log(str2.at(-1));
console.log(str2.concat(str));
console.log(str2.includes("Doe"));