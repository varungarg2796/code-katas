//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//https://www.codewars.com/kata/52597aa56021e91c93000cb0/

var moveZeros = function (arr) {
    let count = 0;
      for (let i = 0; i < arr.length; i++) {
          if(arr[i] === 0) {
              arr.splice(i, 1); 
              i--;
              count++;
          }
      }
      for (let i = 0; i <count; i++) {
          arr.push(0);
      }
      return arr;
}

console.log(moveZeros([ 'a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]));