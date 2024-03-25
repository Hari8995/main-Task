function fooddata(){
    return promise1 = new Promise ((resolve,reject) => {
        setTimeout(()=>{
            const data=[{id:1,name:"apple"},{id:2,name:"mango"}]
            resolve(data)},2000);

    })
}

function quantity(){
    return promise2 = new Promise ((resolve,reject)=>{
        setTimeout(()=>{ 
            const data=[{id:1, qn:100},{id:2,qn:40}]
        resolve(data)
    },2000);
       
    })
    
}

function price(){
    return promise3 = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const data=[{id:1,price:30},{id:2,price:25}]
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
            console.log("------------------------------");

            console.log(data);
            return price()
            
        })

price()
.then(data=>{
    console.log("------------------------------");
    console.log(data);
}
)


// ============

console.log("xxxxxxxxxxxxxxxxxxxxxx");
setTimeout(()=>{
    console.log("xxxxxxxxxxxxxxxxxxxxxx");
},3000);




