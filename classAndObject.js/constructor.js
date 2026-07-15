
class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  Greet(){
    return (" good morning")
  }
}
let s2 = new Student("aloo", 43, "trans");
//console.log(s2)
//console.log(s2.Greet())

//inheritance

class User{
  constructor(username){
    this.username = username;
  }
  getMe(){
    console.log(`i am ${this.username}`)
  }
}

class teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email = email;
    this.password = password;
  }
  Callme(){
    console.log(`your password must be equal to ${this.password}`)
  }
}

let t1 = new teacher("akhandchomu","akhand@12","dfjladjdl")
console.log(t1)
t1.Callme()

console.log(t1 instanceof teacher)
console.log(t1 instanceof User)
