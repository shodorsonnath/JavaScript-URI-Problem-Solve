// This is a simple javascript problem form beecrowd
const x1 = 1.0;
const y1 = 7.0;
const x2 = 5.0;
const y2 = 9.0;
const res1 = x2 - x1;
const res1Power = Math.pow(res1,2);
const res2 = y2 - y1;
const res2Power = Math.pow(res2, 2);
const total = res1Power + res2Power;
const finalResult = Math.sqrt(total);
const finalReasultFixed = finalResult.toFixed(4);
console.log(finalReasultFixed);