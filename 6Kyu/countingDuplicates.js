// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text){
    let charMap = {};
    text = text.toLowerCase();
    for(let char of text) {
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    let dataset = Object.values(charMap);
    return count = dataset.filter(x => x > 1).length;
}

console.log(duplicateCount('Indivisibilities'))