function rgb(r, g, b){
    return getCode(r) + getCode(g) + getCode(b);
}

function getFraction(n) {
    let numToString = String(n / 16);
    let fraction = numToString.slice(numToString.indexOf('.'));
    return fraction.includes('.') ? fraction : 0;
  }

function getCode(num){
    const hexaDecimals = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    if(num > 255){
        num = 255;
    }
    if(num < 0){
        num = 0;
    }
    let indexFirstHalf = Math.floor(num / 16);
    let indexSecondHalf = parseFloat(getFraction(num)) * 16;
    return hexaDecimals[indexFirstHalf] + hexaDecimals[indexSecondHalf];
}
  console.log(rgb(236,-2,300));
  
// OR


// const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

// function toHex(numb) {
//   if (numb <= 0)   return '00';
//   if (numb > 255)  return 'FF';
//   return numb.toString(16).toUpperCase(); //converts to hexadecimal directly!  
// }