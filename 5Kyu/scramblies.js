// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/

function scramble(str1, str2) {
    //code me
    let charMap = {};
    for(let char of str1) {
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    for (let char of str2) {
        if(charMap[char] > 0) {
            charMap[char]--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(scramble('rkqodlw','world'));