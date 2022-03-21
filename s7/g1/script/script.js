document.getElementById("invio").addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (nome == "") {
        document.querySelector("#nome").style.border = "1px solid  red";
    } else {
        document.querySelector("#nome").style.border = "";
    }
    if (cognome == "") {
        document.querySelector("#cognome").style.border = "1px solid  red";
    } else {
        document.querySelector("#cognome").style.border = "";
    }

    if (email == "") {
        document.querySelector("#email").style.border = "1px solid  red";
    } else {
        document.querySelector("#email").style.border = "";
    }

    if (password == "") {
        document.querySelector("#password").style.border = "1px solid  red";
    } else {
        document.querySelector("#password").style.border = "";
    }

const utente1=new user (nome,cognome,email,password)

localStorage.setItem("User",JSON.stringify(utente1))
})


class user {
    constructor(nome, cognome, email, password) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
    }
}


 


















