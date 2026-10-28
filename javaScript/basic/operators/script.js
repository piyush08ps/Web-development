let a=10;
let b=20;
let c="10";
let d="20";


console.log(a==b);
console.log(a==c);
console.log(a===c);
console.log(a!=b);
console.log(a !==c);



let x=5;
let y=2;

console.log(x%y);

let p=10;
let q=3;


console.log(p/q);


let m=true;
let n=false;
let o=true;

console.log(m && n);
console.log(m && o);
console.log(n && o);
console.log(m || n);
console.log(m || o);
console.log(n || o);

console.log(!m && o);
console.log(!n && o);
console.log(!m || n);
console.log(!m || o);


console.log(++a);
console.log(a++);
console.log(a);



// conditional

if(a<b){
    console.log("hello");
}
else{
    console.log("world");
}


console.log("1. check balance");
console.log("2. withdrwal monney");
console.log("3. mini statement");
console.log("4. pin change");
console.log("5. deposit monry");
console.log("6. exit");

let choice=1;

switch(choice){
    case 1:{
        console.log("checking your balance");
        break;
    }
    case 2:{
        console.log("please collect your cash");
        break;
    }
    case 3:{
        console.log("please find your transaction below");
        break;
    }
    case 4:{
        console.log("put your cash into machine");
        break;
    }
    case 5:{
        console.log("Thank you for  ");
        break;
    }

    default:{
        console.log("wrong choice");
        break;
    }
}