// const cart = ["shoes", "pants", "kurta"];

// const orderId = createOrder(cart);
// proceedToPayment(orderId);

// createOrder(cart, function () {
//     proceedToPayment(orderId);
//     });
// // Above there is the issue of `Inversion of Control

//why we need Promises due to inversion of control

//creating Promise
// const Promise = new Promise(function(resolve,reject){
//     let success  = true;
//     if(success){
//         resolve("operation successful");
//     }else{
//         reject("operation failed");
//     }
// })

//consuming a Promise

// Promise.then(function(res){
//     console.log(res);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("Promise completed");
// });
//this will execute immidiately

//this will behave similar to Promise it's show pending state till 5sec not get expire.as expire show fullfilled in console.
function fetchData(){
    return new Promise((resolve,reject)=>{
        let ans = true;
        setTimeout(()=>{
            let data = "data fetched successfuly"
            if(ans){
                resolve(data);
            }else{
                reject("failed to fetch data...")
            }
        },1000)
    })
}

fetchData()
.then(res=>console.log(res))
.catch(error=>console.log(error))

//second issue that solve Promise is  callback hell with help of Promise chaining
//Promise chaining real example

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user logged in");
            resolve({id:1,name:"john doe"});
        },1000)
    })
}

function CheckStock(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("product Available");
            resolve({...user,product:"laptop"})
        },1000)
    })
}
function makePayment(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("payment successful");
            resolve({...order,paymentId:"pay235"});
        },1000)
    })
}

function PlaceOrder(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("order placed..")
            resolve({...order})
        },1000)
    })
}


login()
.then((user)=>CheckStock(user))
.then((order)=>makePayment(order))
.then((order)=>PlaceOrder(order))
.then(result=>console.log(result))
.catch(error=>console.log(error))