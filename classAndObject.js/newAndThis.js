//this keyword is used to refer to the current object. It is used to access the properties and methods of the current object. It is used to refer to the current instance of a class.
//to refer to the current object in a method. It is used to refer to the current object in a constructor. It is used to refer to the current object in a function.
//this in term of global scope refers to the global object. In a browser, the global object is the window object. In Node.js, the global object is the global object. In strict mode, this is undefined in a function that is not called as a method of an object.this means=>{} in functional scope and this means=>window in global scope.

//new keyword is used to create an instance of a class. It is used to create an object of a class. It is used to call the constructor of a class. It is used to initialize the properties of an object. It is used to create a new object in memory. It is used to create a new instance of a class.
//new keyword create a new {} in memory and return the reference of that object.

function student(name, age) {
  this.name = name;
  this.age = age;
    function greet() {
    console.log(`my name is ${this.name} and i am ${this.age} year old.`);
    }
  console.log(this);
}

let s1 = new student("aanand", 23);
let s2 =  new student("aloo", 43);
console.log("------------------------------");
console.log(s1);
//console.log(s1.greet)
console.log(s2);
console.log(this);
