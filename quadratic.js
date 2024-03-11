let a=1;
let b=6;
let c=2;
let d=b*b-(4*a*c);
let r1=0;
let r2=0;
console.log(d);
switch(true){
    case d>0:
        r1=(-b+Math.sqrt(d))/(2*a);
        r2=(-b-Math.sqrt(d))/(2*a);
        console.log("roots of the equation are:", r1,r2);
        break;

    case d==0:
        r1=-b/(2*a);
        console.log("roots are same ",r1,r1);
        break;

    default:
        console.log("value of d is < 0 ");
        break;


    
}
