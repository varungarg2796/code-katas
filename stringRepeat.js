// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// repeate the string n number of times
function repeatStr (n, s) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        answer += s;
     }
    return answer;
}

// OR 

// function repeatStr (n, s) {
//     return s.repeat(n);
// }