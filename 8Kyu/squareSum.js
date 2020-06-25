// https://www.codewars.com/kata/515e271a311df0350d00000f

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let answer = 0;
    for (const num of numbers) {
        answer += (num * num);
    }
    return answer;
}