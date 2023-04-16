let playButton = document.getElementById('play');
let resultDiv = document.getElementById('result');
let p1NameDiv = document.getElementById('p1Name');
let p2NameDiv = document.getElementById('p2Name');
let p1HealthDiv = document.getElementById('p1Health');
let p2HealthDiv = document.getElementById('p2Health');
let p1Name = prompt("Name of PLAYER1?");
let p2Name = prompt("Name of PLAYER2?");

if (p1Name == ""){
    p1Name = "Player 1"
}

if (p2Name == ""){
    p2Name = "Player 2"
}

class Player {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    strike(enemy) {
        enemy.health -= Math.floor(Math.random() * 10);
    }

    heal(){
        this.health += Math.floor(Math.random() * 5);
    }
}

class game{
    reset(){
        Player1.health = 100;
        Player2.health = 100;
        p1HealthDiv.innerText = Player1.health;
        p2HealthDiv.innerText = Player2.health;
        resultDiv.innerText = "";
        funkce = 'keyup';
    }

    simulate(){
        while (Player1.health > 0 && Player2.health > 0){
            Player1.strike(Player2);
            Player2.strike(Player1);
        } 
        p1HealthDiv.innerText = Player1.health;
        p2HealthDiv.innerText = Player2.health;
        if (Player1.health > Player2.health){
            resultDiv.innerText = `And the WINNER is ${Player1.name}!!!`
        } else {
            resultDiv.innerText = `And the WINNER is ${Player2.name}!!!`
        }
    }

    result(winner){
        resultDiv.innerText = `And the WINNER is ${winner}!!!`
    }
}

const Player1 = new Player(p1Name,100);
const Player2 = new Player(p2Name, 100);
const gameClass = new game();

p1NameDiv.innerText = Player1.name;
p2NameDiv.innerText = Player2.name;

document.addEventListener('keyup', function(e){
    if (e.key == "q"){
        Player1.strike(Player2);
        document.getElementById('p1attack').play();
        p2HealthDiv.innerText = Player2.health;
        if (Player2.health < 0){
            p2HealthDiv.innerText = 0;
        }
    } else if (e.key == "a"){
        Player1.heal();
        if (Player1.health >= 100){
            Player1.health = 100;
        }
        document.getElementById('p1heal').play();
        p1HealthDiv.innerText = Player1.health;
    } else if (e.key == "p"){
        Player2.strike(Player1);
        document.getElementById('p2attack').play();
        p1HealthDiv.innerText = Player1.health;
        if (Player1.health < 0){
            p1HealthDiv.innerText = 0;
        }
    } else if (e.key == "l"){
        Player2.heal();
        document.getElementById('p2heal').play();
        if (Player2.health >= 100){
            Player2.health = 100;
        }
        p2HealthDiv.innerText = Player2.health;
    }
    if (Player1.health <= 0 || Player2.health <= 0){
        gameClass.result(Player2.name) ? Player1.health > Player2.health : gameClass.result(Player1.name);
    }
})
