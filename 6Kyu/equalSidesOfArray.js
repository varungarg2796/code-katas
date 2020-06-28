// You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript


// empty arrays are equal to 0 in the problem
function findEvenIndex(arr){
  //Code goes here!
  for (let index = 0 ; index < arr.length ; index++) {
      if (sumOfArray(arr.slice(0,index)) === sumOfArray(arr.slice(index+1, arr.length))){
          return index;
      };
  }
  return -1;
}

function sumOfArray(array){
    if(array.length === 0) return 0;
    return array.reduce( (a,b) => a+b, 0);
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
