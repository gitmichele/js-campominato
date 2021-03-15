
function randomArr(min, max, count){

    arr = [];

    for (i=0; i<count; i++){

        var randNum = Math.floor(Math.random()*(max - min + 1)) + min;
        if (arr.includes(randNum)){

            i--;
        }
        else{

            arr.push(randNum);
        }
   };

   return arr;
};

function getUsrGuess(arr, count){

    var usrGuessesArr = [];


    for (var i=0; usrGuessesArr.length<count && gameOn == true; i++){
        var usrNum = parseInt(prompt('Numero'));
        console.log(usrGuessesArr);
        

        if (usrNum>0 && usrNum <=100){

            if (arr.includes(usrNum)) {

                console.log('perso', usrGuessesArr.length);
                gameOn = false;
            }
            else if (usrGuessesArr.includes(usrNum)) {

                console.log('gia messo');
            }
            else {

                usrGuessesArr.push(usrNum)
                console.log(usrGuessesArr.length);
            }
        }
        else{

            console.log('must be a number 1-100');
        }
    }

    return gameOn
};


function game(min, max, count){
    var myArr = randomArr(min, max, count);
    console.log(myArr);
    var usrGuessesArr = getUsrGuess(myArr, count);
};


var gameOn = true;
game(1, 10, 5, []);
    

