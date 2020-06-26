// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
    const isOdd = s.length % 2;
    if(isOdd) {
        const middleIndex = Math.floor(s.length/2);
        return s[middleIndex];
    } else {
        const middleIndex = s.length/2;
        console.log(index);
        return s[middleIndex-1] + s[middleIndex];
    }
}

console.log(getMiddle('ABAB'))

// or
// function getMiddle(s)
// {
//   return s.length % 2 ? s.charAt(Math.floor(s.length/2)) : s.substr(s.length/2-1, 2);
// }