// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

function arrayDiff(a, b) {
  return a.filter(value => !b.includes(value));
}
console.log(arrayDiff([3,4], [3]));