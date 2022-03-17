
//fetch .JSON
fetch("Abbigliamento.json")
    .then(res => res.json())
    .then(data => {
        data.forEach((item: any) => {
            let capo=new negozio(item.id,item.codprod,item.collezione,item.capo,item.modello,item.quantita,item.colore,item.prezzoivaesclusa,item.prezzoivainclusa,item.disponibile,item.saldo)
        
        console.log(capo.getprezzocapo());
        console.log(capo.getsaldocapo())
        
        
        })


    })


//classe
class negozio {
    id: number 
    codprod: number 
    collezione: string 
    capo: string 
    modello: number 
    quantita: number 
    colore: string 
    prezzoivaesclusa: number 
    prezzoivainclusa: number 
    disponibile: string 
    saldo: number 


    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }
//metodo 
    getsaldocapo(){
        return this.prezzoivainclusa - (this.prezzoivainclusa-this.saldo);
    }
    getprezzocapo(){
        return this.prezzoivainclusa - this.saldo;
    }
}
//istanze






