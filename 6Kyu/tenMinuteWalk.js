function isValidWalk(walk) {
    if (walk.length != 10) return false; 
    let north = walk.filter(direction=>direction ==='n').length;
    let south = walk.filter(direction=>direction ==='s').length;
    let east = walk.filter(direction=>direction ==='e').length;
    let west = walk.filter(direction=>direction ==='w').length;
    if(north === south && east === west){
        return true;
    } else {
        return false;
    }
}

console.log(isValidWalk(['n','n','n','n','n','s','s','s','s','s']));



//OR  Neat way but iterating the array 4 times

// function isValidWalk(walk) {
//     function count(val) {
//       return walk.filter(function(a){return a==val;}).length;
//     }
//     return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }

//Best practice (iterates over once)

// const isValidWalk = walk => {
//     if (walk.length !== 10) return false;
  
//     let directions = {
//       north: 0,
//       west: 0,
//     };
  
//     for (let step of walk) {
//       switch (step) {
//         case 'n':
//           directions.north++;
//           break;
//         case 's':
//           directions.north--;
//           break;
//         case 'w':
//           directions.west++;
//           break;
//         case 'e':
//           directions.west--;
//           break;
//       }
//     }
  
//     return directions.north === directions.west;
//   };