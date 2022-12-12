function checkCode() {
    if (document.getElementById("input").value == "10-23-16-6-21" || document.getElementById("input").value == "10231621") {
        document.getElementById("result").innerHTML = "Bravo ! Tu as réussi !<br><button onclick='putGameDetail()'>Jeu suivant</button>";
    } else {
        document.getElementById("result").innerHTML = "Ce n'est pas le bon code !";
    }
}

function putGameDetail() {
    document.getElementById("game-container").innerHTML =
    `
    <div>
        <b>Ils nous manquent certaines informations pour continuer la sauvegarde des œuvres. Pouvez vous les retrouver, celles-ci sont présentes sur les œuvres vous devrez être attentifs pour les retrouver ?</b>
    </div>
    <br>

    <div id="question">
        L'inscription est marqué à coté de la place du pilote sur un véhicule capable d'aller à 340 km/h. Quelle est cette inscription ?
    </div>
    <div>
        <div style="height: 1vh"></div>
        <input type="text" id="input">
        <div style="height: 1vh"></div>
        <button id="btn" onclick="checkInput()">Valider</button>
    </div>
    <br>
    <div id="result"></div>
    `;

    var NewScrip = document.createElement('script');
    NewScrip.src = 'js/detail.js';
    var OldScript = document.getElementsByTagName('script')[0];
    OldScript.parentNode.replaceChild(NewScrip, OldScript);
}