function startingArr(min, max, count){

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

function getGuessNum(array, min, max, count){

    var guessesCountArr = [];

    while (guessesCountArr.length<(max - count)){

        var usrGuess = parseInt(prompt('Numero'));

        if (usrGuess >= min && usrGuess <= max){

            if (array.includes(usrGuess)){

                break
            }
            else if (guessesCountArr.includes(usrGuess)){

                console.log('gia messo');
                console.log(guessesCountArr, guessesCountArr.length);
            }
            else{

                guessesCountArr.push(usrGuess);
                console.log(guessesCountArr, guessesCountArr.length)
            }
        }
        else{
            console.log('deve essere un numero tra min e max');
        }
    }

    return (guessesCountArr.length);
}

function endGame(length, num){

    if(length == num){
        
        console.log('vinto');
    }
    else{

        console.log('perso');
    }

};

function gameOn() {

    var min = 1;
    var max = 5;
    var count = 3;
    var usrPoss = max - count;
    var gameArr = startingArr(min, max, count);
    console.log(gameArr);
    var game = getGuessNum(gameArr ,min, max, count);
    console.log(game);
    endGame(game, usrPoss);
};


var gioca = document.getElementById('gioca');
gioca.addEventListener('click', function(){

    gameOn();
});