// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag (string) {
        if(string){
              let newString =  string.replace(/\s+/g,' ').trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
              let generatedHashtag =  '#' + newString;
              return generatedHashtag.length <= 140 && generatedHashtag.length > 1? generatedHashtag : false;
          }
          return false;
}
console.log(generateHashtag('I am   Made'))


// OR


// function generateHashtag (str) {
//     return str.length > 140 || str === '' ? false :
//       '#' + str.split(' ').map(capitalize).join('');
//   }
  
//   function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }