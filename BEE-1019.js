// This is a simple javascript problem form beecrowd
let second = 140153;
const hours = parseInt(second / 3600);
second = second - (hours * 3600)
const minutes = parseInt(second / 60);
second = second - (minutes * 60);
console.log(hours+':'+minutes+':'+second);