//proto type hierarchy is a chain of objects that are linked together. It is used to access the properties and methods of an object. It is used to create a new object in memory. It is used to create a new instance of a class. It is used to create a new object in memory. It is used to create a new instance of a class.
//js has prototype behavior.
//everything in js is an object except for primitive data types. Every object has a prototype. The prototype is an object that is used to access the properties and methods of an object. The prototype is also used to create a new object in memory. The prototype is also used to create a new instance of a class. The prototype is also used to create a new object in memory. The prototype is also used to create a new instance of a class.
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__); // Object.Prototype->null
//console.log(Object.prototype.__proto__.__proto__);  // Object.Prototype->null->undefined
//console.log(Object.prototype.__proto__.__proto__.__proto__); // Object.Prototype->null->undefined->error

// Object.prototype.add = function add(a, b) {
//   return a + b;
// }

// console.log(); // function add(){}.__proto__->function.prototype
//Boolean.prototype.__proto__ == Number.prototype.__proto__== String.prototype.__proto__== Object.prototype

// const info = {
//     name:"raju",
//     age:23
// }

// const info2 = {
//     gender:"male"
// }
// console.log(info.name)
// console.log(info.gender) //undefined
// info.__proto__ = info2;
// console.log(info.gender)

// function CreateUser(username,score){
//     this.username = username;
//     this.score = score;
// }

// CreateUser.prototype.increment = function(){
//     this.score++;
//     return this.score;
// }
// CreateUser.prototype.printme = function (){
//     console.log("hi i am zozo")
// }
//  CreateUser.prototype.add = function(a,b){
//     return a + b;
//  }

// let user1 = new CreateUser("xoxo",43);
// console.log(user1)
// user1.printme()
// console.log(user1.increment())
// console.log(user1.add(2,4))

//custome method  in Object.prototype
// Object.prototype.read = function(){
//     console.log('kuchh bhi...')
// };

//custome method in Array.prototype
// Array.prototype.search = function(){
//     console.log('we are searching in array..')
// }

let name = "brijesh";
// let arr = [1,2,3,4];
// arr.search()
// name.search
// arr.read();
// name.read();
// Object.prototype = Array.prototype.search;



//inheritance

const user = {
    username:"chomu",
    email:"chomu@34"
}

const teacher = {
    isteching:true,
}

teacher.__proto__ = user;  // teacher have property of user
//console.log(teacher.username)

const teacherHead = {
    isActive:true,
}

const assistTeacher = {
    assist:false,
    __proto__:teacherHead, //now asistteacher have teacherhead property

}
//console.log(assistTeacher.isActive)

//modern syntax
Object.setPrototypeOf(assistTeacher,teacher);
//console.log(assistTeacher.isteching)