//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

//Return the number (count) of vowels in the given string.

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for( let char of str){
        if(vowels.includes(char)){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(getCount('abracadabra')) //5

// or

// return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;

