document.getElementById("nome").addEventListener("click",function () {
var nome=document.getElementById("nome").value;
var cognome=document.getElementById("cognome").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
if (nome == "") {
   alert("inserisci correttamente il tuo nome")
   return false;
}
if (cognome == "") {
    alert("Inserisci correttamente il tuo cognome")
    return false;

}

if (email == "") {
    alert("inserisci correttamente la tua email")
    return false;


}

if (password == "") {
    alert("inserisci la tua password")
    return false;




}
})
