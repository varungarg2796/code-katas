//Given two cells on the standard chess board, determine whether they have the same color or not.
//https://www.codewars.com/kata/5894134c8afa3618c9000146/train/javascript

function chessBoardCellColor(cell1, cell2) {
    return cellColor(cell1) === cellColor(cell2);
}

function cellColor(cell) {
    // odd and odd --> black
    // even and even --> black
    cell = cell.split('');
    if(!isNumEven(cell[1]) && !isCharEven(cell[0])){
        return 'black';
    } else if(isNumEven(cell[1]) && isCharEven(cell[0])){
        return 'black'
    } else {
        return 'white';
    }
}
function isNumEven(num){
    return parseInt(num) % 2 === 0;
}

function isCharEven(char){
    return (parseInt(char, 36) - 9) % 2 === 0;
}

console.log(chessBoardCellColor("A1","H3"));


// OR 

// function chessBoardCellColor(cell1, cell2) {

//     var arr = ["0", "A", "B", "C", "D", "E", "F", "G", "H"];
    
//     return (arr.indexOf(cell1[0]) + parseInt(cell1[1])) % 2 == (arr.indexOf(cell2[0]) + parseInt(cell2[1])) % 2;
// }
