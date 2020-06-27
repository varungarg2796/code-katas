// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    // your code
    let word = '';
    for ( const char in s){
        word += constructMumble(s[char], char) + '-';
    }
    return word.substring(0, word.length - 1);
}

function constructMumble(letter, number) {
    let mumbledWord = '' + letter.toUpperCase();
    for(let i = 0; i < number; i++) {
        mumbledWord += letter.toLowerCase();
    }
    return mumbledWord;
}

console.log(accum('ZpglnRxqenU'))

// OR 

//Where c is character and i is index
// return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');