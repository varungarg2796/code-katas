//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete the solution so that it reverses the string passed into it.

function solution(str){
    let answer = '';
    for ( let i = str.length-1; i >= 0; i--){
        answer += str[i];
    }
    return answer;
}

console.log(solution('abcd'));

//OR 

//return str.split('').reverse().join('');  