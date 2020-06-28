// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
    let newWord = '';
    let wordMap = {};
    word = word.toLowerCase();
    for(let char of word) {
        if(!wordMap[char]){
            wordMap[char] = 1;
        } else {
            wordMap[char]++;
        }
    }
    for(let char of word) {
        if(wordMap[char] > 1){
            newWord += ')'
        } else {
            newWord += '('
        }
    }
    return newWord
}

duplicateEncode('recede')
