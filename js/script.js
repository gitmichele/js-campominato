var gameOn = false;

function allNumArr(min, max){

    var arr = [];
    
    for (var i=min; i<=max; i++){

        arr.push(i);
    }

    return arr;
};

function shuffleArr(array, count){

    for (var i = array.length - 1; i > 0; i--) {
        
        var newIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[newIndex]] = [array[newIndex], array[i]];
    }

    return array.slice(0, count)
};

var orderArr = allNumArr(1,10);
var myArr = shuffleArr(orderArr, 4)
console.log(myArr);