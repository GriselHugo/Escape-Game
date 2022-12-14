const pieces = document.getElementsByClassName("puzzle-piece");
var selectedPieceN = 0;

pieces[0].classList.add("selected");
let selectedPiece = pieces[0];
selectedPieceN = 0;
//console.log(selectedPieceN);
var RotationAngle = [
    90,
    0,
    270,
    180
];

pieces[0].style.transform = `translate(-50%, -50%) rotate(${RotationAngle[0]}deg)`;
pieces[1].style.transform = `translate(-50%, -50%) rotate(${RotationAngle[1]}deg)`;
pieces[2].style.transform = `translate(-50%, -50%) rotate(${RotationAngle[2]}deg)`;
pieces[3].style.transform = `translate(-50%, -50%) rotate(${RotationAngle[3]}deg)`;

function putBorder() {
    for (let i = 0; i < pieces.length; i++) {
        if (RotationAngle[i] == 0) {
            pieces[i].style.outline = "2px solid green";
        } else {
            pieces[i].style.outline = "2px solid red";
        }
    }
}

putBorder();

for (let i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener("click", function() {
        if (selectedPiece) {
            selectedPiece.classList.remove("selected");
        }

        selectedPiece = pieces[i];
        selectedPiece.classList.add("selected");
        selectedPieceN = i;
        //console.log(selectedPieceN);
    });
}

document.getElementById("up").addEventListener("click", function() {
    if (selectedPieceN > 0) {
        selectedPiece.classList.remove("selected");
        pieces[selectedPieceN - 1].classList.add("selected");
        selectedPiece = pieces[selectedPieceN - 1];
        selectedPieceN--;
    } else {
        selectedPiece.classList.remove("selected");
        pieces[pieces.length - 1].classList.add("selected");
        selectedPiece = pieces[pieces.length - 1];
        selectedPieceN = pieces.length - 1;
    }
    //console.log(selectedPieceN);
});

document.getElementById("down").addEventListener("click", function() {
    if (selectedPieceN < pieces.length - 1) {
        selectedPiece.classList.remove("selected");
        pieces[selectedPieceN + 1].classList.add("selected");
        selectedPiece = pieces[selectedPieceN + 1];
        selectedPieceN++;
    } else {
        selectedPiece.classList.remove("selected");
        pieces[0].classList.add("selected");
        selectedPiece = pieces[0];
        selectedPieceN = 0;
    }
    //console.log(selectedPieceN);
});

function checkInvNum() {
    if (document.getElementById("input").value == "2003.106.1") {
        document.getElementById("controls").innerHTML = "Bravo ! Tu as r??ussi !<br><button onclick='putCodeGame()'>Jeu suivant</button>";
    } else {
        document.getElementById("controls").innerHTML = `F??licitation ! Vous avez r??ussi ?? r??soudre ce puzzle, toutefois il vous manque encore une information pour pouvoir sauver cette ??uvre. Pouvez vous retrouver ?? quel est le num??ro d'inventaire de la pi??ce qui contient ce d??tail ?<br><div style="height: 1vh"></div><input placeholder="0000.000.0" type="text" id="input"><div style="height: 1vh"></div><button id="btn" onclick="checkInvNum()">Valider</button><br>Ce n'est pas le bon num??ro d'inventaire !`;
    }
}

checkWin = function() {
    for (let i = 0; i < pieces.length; i++) {
        if (RotationAngle[i] != 0) {
            return;
        }
    }
    pieces[0].style.zIndex = 1;
    pieces[0].classList.add("selected");
    document.getElementById("controls").style.height = "auto";
    document.getElementById("controls").style.display = "block";
    document.getElementById("controls").style.justifyContent = "inherit";
    document.getElementById("controls").innerHTML = `F??licitation ! Vous avez r??ussi ?? r??soudre ce puzzle, toutefois il vous manque encore une information pour pouvoir sauver cette ??uvre. Pouvez vous retrouver ?? quel est le num??ro d'inventaire de la pi??ce qui contient ce d??tail ?<br><div style="height: 1vh"></div><input placeholder="0000.000.0" type="text" id="input"><div style="height: 1vh"></div><button id="btn" onclick="checkInvNum()">Valider</button>`;
}

document.getElementById("back").addEventListener("click", function() {
    RotationAngle[selectedPieceN] == 0 ? RotationAngle[selectedPieceN] = 360 - 22.5 : RotationAngle[selectedPieceN] -= 22.5;
    if (RotationAngle[selectedPieceN] == 0) {
        pieces[selectedPieceN].style.outline = "2px solid green";
    } else {
        pieces[selectedPieceN].style.outline = "2px solid red";
    }
    selectedPiece.style.transform = `translate(-50%, -50%) rotate(${RotationAngle[selectedPieceN]}deg)`;
    //console.log(RotationAngle);
    checkWin();
});

document.getElementById("forward").addEventListener("click", function() {
    RotationAngle[selectedPieceN] == 360 - 22.5 ? RotationAngle[selectedPieceN] = 0 : RotationAngle[selectedPieceN] += 22.5;
    if (RotationAngle[selectedPieceN] == 0) {
        pieces[selectedPieceN].style.outline = "2px solid green";
    } else {
        pieces[selectedPieceN].style.outline = "2px solid red";
    }
    selectedPiece.style.transform = `translate(-50%, -50%) rotate(${RotationAngle[selectedPieceN]}deg)`;
    //console.log(RotationAngle);
    checkWin();
});

function putCodeGame() {
    document.getElementById("game-container").innerHTML =
    `
    <div>
        Pour acc??der ?? la suite du mus??e il nous faut un code que cepandant nous ne connaissons pas. Nous avons seulement une liste de noms : Zidane - Tr??mouli??re - Darleux - Djorkaeff - Hivernat.
    </div>
    <br>
    <div>
        <div style="height: 1vh"></div>
        <input type="text" id="input">
        <div style="height: 1vh"></div>
        <button id="btn" onclick="checkCode()">Valider</button>
    </div>
    <br>
    <div id="result"></div>
    `;

    var NewScrip = document.createElement('script');
    NewScrip.src = 'js/code.js';
    var OldScript = document.getElementsByTagName('script')[0];
    OldScript.parentNode.replaceChild(NewScrip, OldScript);
}