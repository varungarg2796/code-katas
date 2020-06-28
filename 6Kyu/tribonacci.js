function tribonacci(signature,n){
    // if(n<3){
    //     let newArr = [];
    //     for( let i = 0; i < n; i++) {
    //         newArr.push(signature[i]);
    //     }
    //     return newArr;
    // }
    for( let i = 0; i < n-3; i++) {
        signature.push(signature[i]+signature[i+1]+signature[i+2]);
    }
    return signature.slice(0, n); //instead of the commented code! 
}
console.log(tribonacci([1,1,1],3));
