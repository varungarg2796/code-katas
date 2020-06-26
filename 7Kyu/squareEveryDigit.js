// In this kata, you are asked to square every digit of a number.
//https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
    //may the code be with you  
    num = num.toString();
    return parseInt(num.split('').map((val)=>{return val * val}).join(''));   
}

console.log(squareDigits(9119));


// Explanation
// let result = num
//     .toString()
//     .split("")
//     .map( num => parseInt(num) )
//     .map( num => num * num )
//     .join("")
   
//   return parseInt(result)