// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak

// Take a given number and return the Arara's equivalent.

// https://www.codewars.com/kata/55b95c76e08bd5eef100001e

function countArara(n) {
    if(n % 2){
        return "adak ".repeat(Math.floor(n / 2))+ 'anane'
    } else {
        return "adak ".repeat(n/2).trim();
    }
}

console.log(countArara(10))

// TRIM removes extra whitespaces before and after your word