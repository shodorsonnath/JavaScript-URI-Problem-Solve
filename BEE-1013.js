// This is a simple javascript problem form beecrowd
let a = 7;
let b = 14;
let c = 106;
let temp = a;
if(a < b || a< c){
    if(b < c){
        temp = c;
    }
    else{
        temp = b;
    }
}
console.log(temp,'eh o maior');