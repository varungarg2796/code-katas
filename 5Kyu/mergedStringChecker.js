// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, part1, part2) {
    for(let i = 0; i < s.length; i++) {
      if( part1[0] === s[i] && part2[0] === s[i] ) {
        return isMerge(s.substring(i + 1), part1.substring(1), part2) || isMerge(s.substring(i + 1), part1, part2.substring(1));
      }
      else if( part1[0] === s[i] ) part1 = part1.substring(1);
      else if( part2[0] === s[i] ) part2 = part2.substring(1);
      else return false;
    }
    return !part1 && !part2;
  }