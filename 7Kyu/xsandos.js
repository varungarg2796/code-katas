// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let xcount = 0; let ocount = 0;
    for (const char of str){
        if(char === 'x' || char === 'X'){
            xcount++;
        }
        if(char === 'o' || char === 'O'){
            ocount++;
        }
    }
    return xcount === ocount;
}

//or

// SUCH A NICE WAY! This

//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;

