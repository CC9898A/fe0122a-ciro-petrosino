

function btniscriviti(btna) {
let nome = $("#nameid").val();
let email = $("#emailid").val();
let rptemail = $("#rptemail").val();    
   console.log(nome,email,rptemail)
   if (nome=="") {
       $("#nameid").next().text("Inserisci correttamente i tuoi dati")
      
       
   } else {
    $("#nameid").next().text("")   
   }
    
}

 
$("#IN").click(btniscriviti)


