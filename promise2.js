function fooddata(){
    return promisse1= new Promise((resolve,reject) => {
        setTimeout(()=>{
            const data=[{id:1,name:"apple"},{id:2,name:"mango"}]
            resolve(data)},2000);

    })
}

function quantity(){
    return promise2= new promise ((resolve,reject)=>{
        setTimeout(()=>{ 
            const data=[{id:1, qn:100},{id:2,qn:40}]
        resolve(data)
    },2000);
       
    })
    
}

fooddata()
.then(data =>
    {
        console.log(data);
        return quantity()
    })

quantity()
    .then(data =>
        {
            console.log(data);
            
        })




