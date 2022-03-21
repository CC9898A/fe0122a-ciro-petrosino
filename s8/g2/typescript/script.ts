


class SonAccount {
//saldo attuale
    balanceInit: number
    constructor(balanceInit: number) {
        this.balanceInit=balanceInit;
    }
    onedeposit(deposit1:number): number{
        return this.balanceInit += deposit1;
    }
    oneWithdraw(withdrawal1:number): number{
        return this.balanceInit -= withdrawal1;
    }

    
}
let figlio = new SonAccount (500)
figlio.onedeposit(50);
figlio.oneWithdraw(70);

console.log(figlio);

class motherAccount extends SonAccount{
addinterest():number{
    
}

}
