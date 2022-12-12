const departMinutes = 0;
const departSecondes = 30;
const tempsDepart = departMinutes * 60 + departSecondes;
let temps = departMinutes * 60 + departSecondes;

function beginTimer() {
    let timer = null;
    let minutes = 0;
    let secondes = 0;
    let timerElement = document.getElementById("timer");
    document.getElementById("progress").style.visibility = "visible";

    timer = setInterval(() => {
        minutes = parseInt(temps / 60, 10);
        secondes = parseInt(temps % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;
        timerElement.innerHTML = `${minutes}:${secondes}`
        document.getElementById("progress").value = 100 - (temps / tempsDepart) * 100;
        temps = temps <= 0 ? endTimer() : temps - 1;
    }, 1000
    );

    function endTimer() {
        document.getElementById("progress").style.visibility = "hidden";
        clearInterval(timer);
        timer = null;
        progressInterval = null;
        timerElement.innerHTML = "Terminé !<br><button onclick='putIntroCircularPuzzle()' id='start'>Suite</button>"
    }
}

function putIntroCircularPuzzle() {
    document.getElementById("game-container").innerHTML = `
    <br>Il faut que l'on rempertorie un pièce présente dans la salle consacrée au duel. Nous n'avons seulement qu'une photo d'une partie remarquable sur l'objet, et celle-ci est mélangée. Vous allez devoir remettre les morceaux en place grace aux boutons pour recontituer la photo et ensuite chercher l'œuvre correspondante.<br><br><button onclick='putCircularPuzzle()' id='start'>J'ai compris</button>
    `;
}

function putCircularPuzzle() {
    document.getElementById("game-container").innerHTML =
    `
    <style>
        .puzzle-piece {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: brightness(0.75);
            border-radius: 50%;
        }

        .selected {
            filter: brightness(1);
        }

        ion-icon {
            font-size: 5vh;
        }
    </style>

    <div id="game" style="position: relative; margin: auto; width: 90vw; height: 50vh; color: black; overflow: hidden;">
        <div class="puzzle-piece" style="width: 90vw; max-width: 50vh; height: 90vw; max-height: 50vh;">
            <img src='img/puzzle-circu-1.png' style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
        <div class="puzzle-piece" style="width: 67.5vw; max-width: 37.5vh; height: 67.5vw; max-height: 37.5vh;">
            <img src='img/puzzle-circu-2.png' style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
        <div class="puzzle-piece" style="width: 45vw; max-width: 25vh; height: 45vw; max-height: 25vh;">
            <img src='img/puzzle-circu-3.png' style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
        <div class="puzzle-piece" style="background-color: red; width: 22.5vw; max-width: 12.5vh; height: 22.5vw; max-height: 12.5vh;">
            <img src='img/puzzle-circu-4.png' style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
    </div>
    <div id="controls" style="width: 90vw; height: 10vh; margin: auto; display: flex; justify-content: space-between;">
        <div style="display: grid; place-content: center">
            <ion-icon id="back" name="caret-back"></ion-icon>
        </div>
        <div style="position: relative; width: 5vh;">
            <div style="position: absolute; top: 0">
                <ion-icon id="up" name="caret-up"></ion-icon>
            </div>
            <div style="position: absolute; bottom: 0">
                <ion-icon id="down" name="caret-down"></ion-icon>
            </div>
        </div>
        <div style="display: grid; place-content: center">
            <ion-icon id="forward" name="caret-forward"></ion-icon>
        </div>
    </div>
    `;

    var NewScrip = document.createElement('script');
    NewScrip.src = 'js/puzzle.js';
    var OldScript = document.getElementsByTagName('script')[0];
    OldScript.parentNode.replaceChild(NewScrip, OldScript);
}