 const a = () =>{
    b();
    console.log('a');
 }

 const b = () =>{
    c();
    console.log('b');
 }
 const c = () =>{
    count();
    console.log('c');
 }

 const count = ()=>{
    setTimeout(()=>{
        console.log('count');
    },4000)
 }
 a();