// This is a simple javascript problem form beecrowd
function area(radius){
    const pi = Math.PI;
    const square = Math.pow(radius, 2);
    const result = pi * square;
    const finalTesult = result.toFixed(4);
    return finalTesult;
}

let r = 100.64;
const result = area(r);
console.log("Area of the cirlce is ",result);