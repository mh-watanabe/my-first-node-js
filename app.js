'use strict';

const number = process.argv[2] || 0 ;
let sum = 1 ; 

for (let i = number ; i > 1 ; i--) {
  sum = sum * i;
}
  
console.log(sum);