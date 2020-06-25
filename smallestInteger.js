// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0];
      for (let num of args){
        if ( num < smallest ) smallest = num;
      }
      return smallest;
    }
}

// OR 

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }