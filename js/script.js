// array di numeri casuali non ripetuti
function startingArr(min, max, limit){

    arr = [];

    for (var i = 0; i < limit; i++) {

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

// array numeri inseriti dall'usr - torno la lunghezza
function getGuessNum(array, min, max, limit){

    var usrArr = [];

    while (usrArr.length<limit){

        var usrGuess = parseInt(prompt('Numero'));

        if (usrGuess >= min && usrGuess <= max){

            if (array.includes(usrGuess)){

                break
            }
            else if (usrArr.includes(usrGuess)){

                console.log('gia messo');
                console.log(usrArr, usrArr.length);
            }
            else{

                usrArr.push(usrGuess);
                console.log(usrArr, usrArr.length)
            }
        }
        else{
            console.log('deve essere un numero tra min e max');
        }
    }

    return (usrArr.length);
}

// uso la lunghezza dei numeri usr per vedere se vince/perde
function endGame(length, limit){

    if(length == limit){
        
        console.log('vinto');
    }
    else{

        console.log('perso', length);
    }

};

// selezione difficoltà
function switchLevel(num) {

    switch (num) {

        case 0:
            var max = 100;
            break;
        case 1:
            var max = 80;
            break;
        case 2:
            var max = 5;
    };

    return max;
};

// unisco funzioni
function gameOn() {

    var level = parseInt(document.getElementById('level').value);
    var gameMax = switchLevel(level);
    var gameMin = 1;
    var randCount = 3;
    var usrCount = gameMax - randCount;

    var randArr = startingArr(gameMin, gameMax, randCount);
    console.log(randArr);
    var usrArrLng = getGuessNum(randArr, gameMin, gameMax, usrCount);
    endGame(usrArrLng, usrCount);
};

// gameOn parte al click del pulsante play
var play = document.getElementById('play');
play.addEventListener('click', function(){

    gameOn();
});
