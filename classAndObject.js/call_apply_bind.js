let user1 = {
    firstname:"brijesh",
    lastname:"rajbhar"
};

let user2 = {
    firstname:"ashwin",
    lastname:"rajput"
};

function PrintDetails(age,city){
    console.log(`hi, i am ${this.firstname} ${this.lastname} and i am ${age} year old and i live in ${city}`);
}

//call
// execute funtion immediately and commma-serparted aurguments
console.log("call")
PrintDetails.call(user1,20,"surat");
PrintDetails.call(user2,22,"vadodara");

//apply
//execute funtion immediately and array of arguments
console.log("apply")
PrintDetails.apply(user1,[22,"delhi"]);
PrintDetails.apply(user2,[34,"mumbai"]);

//bind
//make a copy and excute later.
console.log("bind")
let data = PrintDetails.bind(user1,30,"noida");
data();