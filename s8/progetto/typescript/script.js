//fetch .JSON
fetch("Abbigliamento.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var capo = new negozio(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(capo.getprezzocapo());
        console.log(capo.getsaldocapo());
    });
});
//classe
var negozio = /** @class */ (function () {
    function negozio(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    //metodo 
    negozio.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa - (this.prezzoivainclusa - this.saldo);
    };
    negozio.prototype.getprezzocapo = function () {
        return this.prezzoivainclusa - this.saldo;
    };
    return negozio;
}());
//istanze
