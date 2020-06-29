function validParentheses(parens){
    //TODO 
    let indent = 0;
    for (let char of parens){
        if(char === '(' && indent >=0) {
            indent++;
        }
        if(char === ')' && indent >=0){
            indent--;
        }
    }
    return indent === 0;
}
console.log(validParentheses( ")(" ));