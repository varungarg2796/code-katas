//iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// reusing code to save time from parityOutlier!!!
function iqTest(numbers){
    // ...
    const numArray = numbers.split(' ');
    let objMap = {
        odd : [],
        even : []
    };

    for (let num of numArray) {
        if(num % 2 === 0) {
            objMap['even'].push(num);
        } else {
            objMap['odd'].push(num);
        }
    }
    const outlier = objMap['even'].length ===1 ? objMap['even'][0] : objMap['odd'][0];
    const isOutlier = (element) => element === outlier;
    return numArray.findIndex(isOutlier) + 1;
    // return numArray.indexOf(outlier) + 1; //if you don't wanna use findindex

}


console.log(iqTest("2 4 7 8 10"));