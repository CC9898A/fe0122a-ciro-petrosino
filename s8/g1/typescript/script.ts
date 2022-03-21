
//valori number in variabili(giocatori)
let player1: number = 5
let player2: number = 10





//funzione outpout player
function finalresult() {
    let randomnumber: number = Math.floor((Math.random() * (100 - 1) + 1));
    let numberdifference: number = Math.abs(randomnumber - player1);
    let numberdifference2: number = Math.abs(randomnumber - player2);
    console.log(randomnumber)
    if (randomnumber == player1) {
        console.log("il giocatore 1 e il vincitore")
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
finalresult()