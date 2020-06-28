// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    const numLikes = names.length;
    if (numLikes === 0) {
        return 'no one likes this';
    }
    if (numLikes === 1) {
        return names[0] + ' likes this'
    }
    if (numLikes === 2) {
        return names[0] + ' and ' + names[1] + ' like this'
    }
    if (numLikes === 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    }
    return names[0] + ', ' + names[1] + ' and ' + (numLikes - 2) + ' others like this'
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Varun"]));

// OR was going for this but if else is pretty standard

// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }