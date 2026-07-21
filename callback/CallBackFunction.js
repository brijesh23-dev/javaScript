//callback functions are that fn can be passed to another fn.
// Functions are first class citizens ie. take a function A and pass it to another function B. Here, A is a callback
// function. So basically I am giving access to function B to call function A. This callback function gives us the access
// to whole Asynchronous world in Synchronous world.
//JS is a synchronous and single threaded language. But due to callbacks, we can do async things in JS

function PrintData(data, cb) {
    setTimeout(() => {
        console.log(data);
        cb();
    },
    Math.floor(Math.random()*1000+1),
)
}

function fetchData() {
    PrintData("data1", () => {
        PrintData("data2", () => {
            PrintData("data3",()=>{

            });
        })
    })
}

//fetchData();

function a(){
    console.log("a");
    b();
}
function b(){
    console.log("b");
    setTimeout(function xy(){
        console.log("it is webapi.")
    },5000);
}
a();

document.getElementById("btn").addEventListener("click",function xyz(){
     console.log("button was clicked");
})



