//Simple, remove the spaces from the string, then return the resultant string.

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x) {
    let answer = '';
    for (let char of x) {
        if (char !== ' ') {
            answer += char;
        }
    }
    return answer;
}

// OR function noSpace(x){return x.split(' ').join('')}