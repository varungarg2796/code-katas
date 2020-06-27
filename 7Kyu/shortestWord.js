//Simple, given a string of words, return the length of the shortest word(s).

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
function findShort(s){
    const lengthOfWords = s.split(" ").map(word => word.length);
    return Math.min(...lengthOfWords);
}

console.log(findShort('Hey whatsup man'))

// return Math.min(...s.split(" ").map (s => s.length));