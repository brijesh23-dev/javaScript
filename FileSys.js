const { error } = require("console");
const fs = require("fs");
//fs.writeFile('./test.txt','hello how are you.if you need anything just let me know.',(error)=>{});

// fs.readFile('./test.txt',"utf8",(error,data)=>{
//     if(error) throw error;
//     else console.log(data);
// })

fs.appendFile('./test.txt','\n i am fine thank you.',(error)=>{
    if(error) throw error;
    else console.log("file appended successfully");
})

