// n DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


function DNAStrand(dna){
    let complementary = '';
    for(let char of dna){
        if ( char === 'A') {
            complementary += 'T';
        }
        if ( char === 'T') {
            complementary += 'A';
        }
        if ( char === 'C') {
            complementary += 'G';
        }
        if ( char === 'G') {
            complementary += 'C';
        }
    }
    return complementary;
}

// OR

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }