function pigIt(str){
    //Code here
    let newString = '';
    str = str.split(' ');
    console.log(str);
    for (let word of str) {
        if (!word.match(/^[.,:!?]/)) {
            const toAppend = word.charAt(0) + 'ay ';
            const wordToAdd = word + toAppend;
            newString += wordToAdd.slice(1);
        } else {
            newString += word + ' ';
        }
    }
    return newString.trim();
}

console.log(pigIt('Pig latin is cool'));

// function pigIt(str) {
//     var arrayWord = str.split(' ');
//     return arrayWord.map(function(word) {
//       var firstLetter = word.charAt(0);
//       return word.slice(1) + firstLetter + 'ay';
//     }).join(' ');
// }