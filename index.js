
function writeCards(arrStrings, eventName){
    let newArr = [];
    for(let i = 0; i < arrStrings.length; i++){
        newArr.push(`Thank you, ${arrStrings[i]}, for the wonderful ${eventName} gift!`);
        console.log(newArr)
    }
    return newArr;
}; 

function countDown(integer){
    while(integer >= 0){
        console.log(integer);
        integer--;
    }
}


