fetch("audio.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var liaudio = document.createElement("li");
        var audio = document.getElementById("audio");
        audio.append(liaudio);
        liaudio.innerHTML = item.nome_audio;
        var audioSource = document.createElement("source");
        var player = document.getElementById("player_audio");
        player.append(audioSource);
        audioSource.setAttribute("src", "item.percorso_audio");
    });
});
