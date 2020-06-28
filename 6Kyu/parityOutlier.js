// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// function findOutlier(integers){
//      const isEvenArrayWithOddOutlier = integers.reduce((a,b) => a+b, 0) % 2 > 0;
//      const sumOfArray = integers.reduce((a,b) => a+b, 0)
//      for (let num of integers) {
//         if( Math.abs(sumOfArray - num) % 2 === 0){
//             return num;
//         }
//      }
//      return isEvenArrayWithOddOutlier;
// }

function findOutlier(integers){
    let objMap = {
        odd : [],
        even : []
    };

    for (let num of integers) {
        if(num % 2 === 0) {
            objMap['even'].push(num);
        } else {
            objMap['odd'].push(num);
        }
    }
    return objMap['even'].length ===1 ? objMap['even'][0] : objMap['odd'][0];
}
console.log(findOutlier([2, 2, 2, 1]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))


//or could have been so much simpler! 

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
// }