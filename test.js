let player1HandScore = [1, 11, 21, 31];
let player1HandHighScore = 0;

var myVar;

function timeOutFunction    () {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    console.log("Hello!");
}

timeOutFunction ();

