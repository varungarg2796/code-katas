// https://www.codewars.com/kata/54edbc7200b811e956000556

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let counter = 0;
    for (const bool of arrayOfSheep) {
        if (bool) {
            counter++;
        }
    }
    return counter;
}

//OR 

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }

