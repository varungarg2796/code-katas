// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])

function dirReduc(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if((arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH')
        || (arr[i] === 'EAST' && arr[i + 1] === 'WEST') || (arr[i] === 'WEST' && arr[i + 1] === 'EAST') && i>-1) {
       arr.splice(i, 2);
       count ++;
       } 
    }
    return count === 0 ? arr : dirReduc(arr);
}

console.log(dirReduc(['NORTH', 'SOUTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST']))
//console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))


// OR 

// function isOppo(dir1,dir2) {
//     if (dir1 + dir2 === 'SOUTHNORTH') return true;
//     if (dir1 + dir2 === 'NORTHSOUTH') return true;
//     if (dir1 + dir2 === 'EASTWEST') return true;
//     if (dir1 + dir2 === 'WESTEAST') return true;
//     return false;
// }
  
// function dirReduc(arr){
//   var len = arr.length
//   for (var i = 0; i < len - 1; i++) {
//     if (isOppo(arr[i], arr[i+1])) {
//       arr.splice(i,2);
//       return dirReduc(arr);
//     }
//   }
//   return arr;
// }