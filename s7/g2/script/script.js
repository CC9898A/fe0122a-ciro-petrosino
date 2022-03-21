class user {
    constructor(nome, cognome, email, password) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
    }
}



var utente1 = new user("ciro", "petrosino", "gmail", "kkk");
var utente2 = new user("filippo", "d", "gmail", "kkk");
var utente3 = new user("mateos", "m", "gmail", "kkk");
var utente4 = new user("valerio", "d'", "gmail", "kkk");


//local storage data

localStorage.setItem('user',JSON.stringify(utente1));
localStorage.setItem('user2',JSON.stringify(utente2));
localStorage.setItem('user3',JSON.stringify(utente3));
localStorage.setItem('user4',JSON.stringify(utente4));
