//qui aggancio il get al bottone
let bottone = document.getElementById("add_btn");

//qui assegno la funzione al bottone
bottone.addEventListener("click", function () {
    let aggiunta = document.getElementById("task_txt").value;
    let lista = document.getElementById("tasks_list_html");
//qui assegno l'output al ul html
    var ul = document.createElement("li");
    ul.innerHTML = aggiunta;

    lista.append(ul);

//qui assegno la rimozione degli elementi inseriti con l'input
    ul.addEventListener("click", function () {
        ul.remove();
    })


})












//con questa funzione salvo e aggiorno i dati in localstorage
function salvaDatiNelDb(aggiunta){

   

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}
