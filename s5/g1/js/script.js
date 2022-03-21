var dataS = new Date();


document.querySelectorAll("div")[0].innerHTML=dataS
document.querySelectorAll("div")[1].innerHTML=dataS.getHours() 
document.querySelectorAll("div")[2].innerHTML=dataS.getMinutes()
document.querySelectorAll("div")[3].innerHTML=dataS.getSeconds()
document.querySelectorAll("div")[4].innerHTML=dataS.toLocaleDateString()

var iso = new Date();

