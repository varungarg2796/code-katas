//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    const numberArray = numbers.split(' ');
    return Math.max(...numberArray) + ' ' + Math.min(...numberArray)
}

console.log(highAndLow('1 2 -3 4 5'));