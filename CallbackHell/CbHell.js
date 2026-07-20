const cart = []
//issue with callback
//1.callback hell
//callback hell occurs when we pass callback again and again.
//callback hell in this scenario in which  code will grow in horizontaly 
//this type of code not readable and maintainable
//structure is known as pyramid of doom
//2.inversion of controll
//whenever we pass a callback function to a function then controll is given to that function.we don't know what will be result we get.bcz when we pass a callback to a function then resposibilty of funciton to excute that callback.
api.getOrder(Cart,function(){
    api.processPayment(function(){
        api.showOrderSummery(function(){
            api.OrderPlaced(function(){
                api.UpdateWallet()
            });
        })
    })
})

// api.getOrder(cart,()=>{
//     api.processPayment(()=>{
//         api.showOrderSummery(()=>{
//             api.OrderPlaced(()=>{
//                 api.UpdateWallet();
//             })
//         })
//     })
// })

