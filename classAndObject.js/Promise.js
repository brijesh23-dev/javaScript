const getData = ()=>{
    setTimeout(()=>{
        return new Promise((resolve, reject) => {
            resolve(()=>console.log('data fetch successfull'))
            reject((error)=> console.log("error: ",error))
        })
    },1000)
}

getData();