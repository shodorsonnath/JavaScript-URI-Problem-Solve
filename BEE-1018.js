// This is a simple javascript problem form beecrowd
let n = 576;
console.log(n,'\n');
console.log(parseInt(n/100),'nota(s) de R$ 100,00\n');
n = n % 100;
console.log(parseInt(n/50),'nota(s) de R$ 50,00\n');
n = n % 50;
console.log(parseInt(n/20),'nota(s) de R$ 20,00\n');
n = n % 20;
console.log(parseInt(n/10),'nota(s) de R$ 10,00\n');
n = n % 10;
console.log(parseInt(n/5),'nota(s) de R$ 5,00\n');
n = n % 5;
console.log(parseInt(n/2),'nota(s) de R$ 2,00\n');
n = n % 2;
console.log(parseInt(n),'nota(s) de R$ 1,00\n');