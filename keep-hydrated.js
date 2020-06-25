// https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript


// 0.5L required to cycle 1H. return number of L required to survive time hours
function litres(time) {
  const truncatedTime = Math.trunc(time);
  return Math.trunc(truncatedTime * 0.5);
}

console.log(litres(5));

// OR 

// function litres(time) {
//     return Math.floor(time * 0.5);
// }