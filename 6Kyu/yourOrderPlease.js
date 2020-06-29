//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// O(n^2) solution but a O(n) will require to use regex
function order(words){
    if (words.length === 0) return '';
    words = words.split(' ');
    let arr = [];
    for (let word of words) {
        for (let char of word){
            if(parseInt(char)){
                arr[char] = word;
            }
        }
    }
    return arr.join(' ').trim();
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'))

//O(n)

// function order(str)
// {
//   str=str.split(" ");
//   var index, result=new Array(str.length);
//   for(var i in str)
//   {
//     index=str[i].match(/\d/);
//     result[index-1]=str[i];
//   }
//   return result.join(" ");
// }