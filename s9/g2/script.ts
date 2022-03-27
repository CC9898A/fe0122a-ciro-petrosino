fetch("audio.json")
.then(res => res.json())
.then(data =>{
    data.forEach((item:any) => {
let liaudio = document.createElement("li");
let audio:any = document.getElementById("audio");
audio.append(liaudio)
liaudio.innerHTML = item.nome_audio
let audioSource = document.createElement("source")
let player:any = document.getElementById("player_audio")
player.append(audioSource)
         audioSource.setAttribute("src","item.percorso_audio") 
})})