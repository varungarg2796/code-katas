// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.


// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let disemvowelString = '';
    const vowels = [ 'a', 'A', 'E', 'e', 'I', 'i', 'O','o', 'u', 'U'];
    for ( const char of str){
        if(!vowels.includes(char)){
            disemvowelString += char;
        }
    }
    return disemvowelString;
}

console.log(disemvowel('This website is for losers LOL!'));

// OR

// return str.replace(/[aeiou]/gi, '');

