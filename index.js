const crypto = require('crypto');



function findHash(pattern){
    let number = 0;
    do{
    const hash = crypto.createHash('sha256').update('vrastogi' + number.toString()).digest('hex');
    if(hash.startsWith(pattern)){
        break;
    }
    number++;
    }
    while(true)
        return number;
    }


console.log(findHash('00000'))