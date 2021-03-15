function startArr(min, max, count){

    arr = [];

    for (var i = 0; i < count; i++) {

        var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

        if (arr.includes(randNum)) {

            i--;
        }
        else {

            arr.push(randNum);
        }
    };

    return arr;
};

function usrGuess(array, min, max, count){

    var guessesCountArr = [];

    for (var i = 0; guessesCountArr.length<count; i++){

        var usrGuess = parseInt(prompt('Numero'));

        if (usrGuess >= min && usrGuess <= max){

            if (array.includes(usrGuess)){

                console.log('perso', guessesCountArr.length);
                break
            }
            else if (guessesCountArr.includes(usrGuess)){

                console.log('gia messo');
            }
            else{

                guessesCountArr.push(usrGuess);
            }
        }
        else{
            console.log('must be a number 1-100');
        }
    }
}

function gameOn(min, max, count) {

    // var min = min;
    // var max = max;
    // var count = count;
    // var startArr = ;
    usrGuess(startArr(min, max, count),min, max, count);

};


gameOn(1,10,5);