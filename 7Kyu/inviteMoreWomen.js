// https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript

// using reduce to calculate sum of array
function inviteMoreWomen(L) {
    return L.reduce( (a,b) => a+b, 0) > 0;
}