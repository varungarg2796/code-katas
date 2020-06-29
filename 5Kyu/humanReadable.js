function humanReadable(seconds) {
    // TODO
    let numHours = 0, numMinutes = 0, numSeconds = 0;
    numHours = parseInt(( seconds / 3600 ));
    if(numHours > 1){
        numMinutes = parseInt((( seconds % 3600 ) / 60 ));
    } else {
        numMinutes = parseInt(seconds / 60);
    }
    if(numMinutes > 1) {
        numSeconds = numMinutes % 60;
    } else if ( seconds < 60) {
        numSeconds = seconds;
    }
    return parseInt(numHours) + ":" + parseInt(numMinutes) + ":" + parseInt(numSeconds);
}


console.log(humanReadable(90));