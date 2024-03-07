

function sor(a,b){
    let c=a.concat(b);
    console.log(c);
    console.log(c.sort(function(x,y){
        return(x-y)}))
}



sor([1,3,2,4],[9,8,7,6]);