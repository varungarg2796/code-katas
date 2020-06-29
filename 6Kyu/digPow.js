// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
//we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// neat trick to split number to a number array [...num+''].map(n=>+n) //[1, 2, 3, 4, 5]
function digPow(n, p){
    // ...
    let numArray = [...n+''].map(n=>+n);
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += Math.pow(numArray[i],p+i);
    }
    const answer  = sum / n ; 
    return answer % 1 === 0 ? answer : -1;
}

console.log(digPow(92,1));