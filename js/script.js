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

        console.log('perso', length);
    }

};

function gameOn(min, max, count, usrMax) {

    var gameArr = startingArr(min, max, count);
    console.log(gameArr);
    var game = getGuessNum(gameArr ,min, max, count);
    endGame(game, usrMax);
};

function switchLevel(level){
    
    switch (level) {
        
        case 0:
            var max = 100;
            break;
        case 1:
            var max = 80;
            break;
        case 2:
            var max = 50;
    };

    return max;
};

var play = document.getElementById('play');
play.addEventListener('click', function(){
    
    var level = parseInt(document.getElementById('level').value);
    var max = switchLevel(level);
    var min = 1;
    var count = 16;
    var usrMax = max - count;

    gameOn(min, max, count, usrMax);
});
