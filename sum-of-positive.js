//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript


// Return the sum of the array of only positive numbers
function positiveSum(arr) {
    let sum = 0;
    
    for ( let num of arr ) {
      if ( num > 0 ) { 
        sum = sum + num;
      }
    }
    return sum;
}

// OR 

// function positiveSum(arr) {
//     return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
// }