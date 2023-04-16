let score;
let absoluteScore = 0;
let RPS = ['Rock', 'Paper', 'Scissors'];

const pcChoice = () => {
    return RPS[Math.floor(Math.random() * 3)];
}

const game = (user, pc) => {
    if (user == pc){
        score = 0;
    } else if (user == "Rock" && pc == "Scissors"){
        score = 1;
    } else if (user == "Paper" && pc == "Rock"){
        score = 1;
    } else if (user == "Scissors" && pc == "Paper"){
        score = 1;
    } else {
        score = -1;
    }
    return score;
}

let rpsButtons = document.querySelectorAll('.rpsButton');
let htmlScore = document.getElementById('score');

rpsButtons.forEach(button => {
    button.onclick = () => {
        absoluteScore += game(button.value, pcChoice());
        htmlScore.innerText = absoluteScore;
    }
})

let clearButton = document.getElementById('clear');
clearButton.onclick = () => {
    absoluteScore = 0;
    htmlScore.innerText = absoluteScore;
}