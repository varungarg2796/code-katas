function solve(s){
    //..
    if (s.length === 1) {
       return true;
    }
    s = s.split('').sort().join('');
    let firstCharCode = s.charCodeAt(0);
    for ( let i = 1 ; i < s.length ; i++) {
      if(s.charCodeAt(i) - firstCharCode !== 1) {
         return false;
      }
      firstCharCode = s.charCodeAt(i);
    }
    return true;
}