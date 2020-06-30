//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/

function anagrams(word, words) {

    let charMap = {};
    for(let char of word) {
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    let answer = [];
    
    console.log(charMap)
    let word = 'abba'
    return answer;

}




console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));