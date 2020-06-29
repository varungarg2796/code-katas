// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

function songDecoder(song){
    return song.split("WUB").filter(value => value!="").join(' ');
    // can also do value=> value in the filter
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
