// array di numeri casuali non ripetuti
function getRandNum (min ,max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function startingArr(min, max, limit) {

    arr = [];

    while ( arr.length < limit) {

        var randNum = getRandNum(min, max)

        if (!arr.includes(randNum)) {

            arr.push(randNum);
        }
    };

    return arr;
};

// array numeri inseriti dall'usr - torno la lunghezza
function getGuessNum(array, min, max, limit) {

    var usrArr = [];

    while (usrArr.length < limit && !array.includes(usrGuess)) {

     var usrGuess = parseInt(prompt('numero')) 

        if (usrGuess >= min && usrGuess <= max) {

            if (usrArr.includes(usrGuess)) {

                console.log('gia messo');
                console.log(usrArr, usrArr.length);
            }
            else {

                usrArr.push(usrGuess);
                console.log(usrArr, usrArr.length)
            }
        }
        else {
            console.log('deve essere un numero tra min e max');
        }
    }

    return (usrArr.length - 1);
}

// uso la lunghezza dei numeri usr per vedere se vince/perde
function endGame(length, limit) {

    if (length == limit) {

        document.getElementById('res').innerHTML = 'Vittoria';
    }
    else {

        document.getElementById('res').innerHTML = 'Punteggio: ' + length;
    }

    document.getElementById('play').innerHTML = 'Play again'

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
            var max = 50;
    };

    return max;
};

// unisco funzioni
function gameOn() {

    var level = parseInt(document.getElementById('level').value);
    var gameMax = switchLevel(level);
    var gameMin = 1;
    var randCount = 16;
    var usrCount = gameMax - randCount;

    var randArr = startingArr(gameMin, gameMax, randCount);
    console.log(randArr);
    var usrArrLng = getGuessNum(randArr, gameMin, gameMax, usrCount);
    endGame(usrArrLng, usrCount);
};

// gameOn parte al click del pulsante play
var play = document.getElementById('play');
play.addEventListener('click', function () {

    gameOn();
});

