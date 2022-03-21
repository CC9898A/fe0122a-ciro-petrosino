//valori number in variabili(giocatori)
var player1 = 5;
var player2 = 10;
//funzione outpout player
function finalresult() {
    var randomnumber = Math.floor((Math.random() * (100 - 1) + 1));
    var numberdifference = Math.abs(randomnumber - player1);
    var numberdifference2 = Math.abs(randomnumber - player2);
    console.log(randomnumber);
    if (randomnumber == player1) {
        console.log("il giocatore 1 e il vincitore");
    }
    else if (randomnumber == player2) {
        console.log("il giocatore 2 e il vincitore");
    }
    else if (numberdifference < numberdifference2) {
        console.log("Il giocatore 1 si è avvicinato alla vittoria");
    }
    else {
        console.log("il giocatore 2 si è avvicinato alla vittoria");
    }
}
finalresult();
