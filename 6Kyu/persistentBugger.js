// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let count = 0
    let prod = num;
    while(prod / 10 >= 1){
        count++;
        prod = prodOfDigits(prod);
    }    
    return count;
 }

 function prodOfDigits(num){
    return num.toString().split('').map(Number).reduce(function(product, value) { return product * value; });
 }

 console.log(persistence(999));


 // OR 

//  function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
//  }