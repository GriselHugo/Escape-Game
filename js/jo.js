const game = document.getElementById('game');

var begin = document.getElementById('left-bar').getElementsByClassName('dot');
var end = document.getElementById('right-bar').getElementsByClassName('dot');
var text = document.getElementById('victory-text');

let value = [ , ];
var x = 0;

var dotClicked = 0;

var tab = [
    [ , , , ],
    [ , , , ],
    [ , , , ],
    [ , , , ],
    [ , , , ],
];

Array.from(begin).forEach((element) => {
    tab[x][0] = element;
    x++;
});

function drawline() {
    for (var x = 0; tab[x] != undefined; x++) {
        if (tab[x][2] != null && tab[x][3] != null) {
            var line = document.getElementById('line-' + (x + 1));
            var y1 = tab[x][0].getBoundingClientRect().y;
            var x1 = (tab[x][0].getBoundingClientRect().x + tab[x][0].getBoundingClientRect().right) / 2;
            var y2 = tab[x][2];
            var x2 = tab[x][3];

            var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            var xMid = (x1 + x2) / 2;
            var yMid = (y1 + y2) / 2;

            salopeInRadians = Math.atan2(y2 - y1, x2 - x1);
            salopeInDegrees = (salopeInRadians * 180) / Math.PI;

            line.style.width = distance + 'px';
            line.style.transform = 'rotate(' + salopeInDegrees + 'deg)';
            line.style.top = yMid + 'px';
            line.style.left = (xMid - distance / 2) + 'px';
            line.style.height = (tab[x][0].getBoundingClientRect().height) + 'px';
        } else {
            var line = document.getElementById('line-' + (x + 1));
            line.style.width = '0px';
        }
    }
}

game.addEventListener('touchstart', e => {
    e.preventDefault();
    [...e.changedTouches].forEach(touch => {
        tab.forEach((element) => {
            if (`${touch.pageY}` >= element[0].getBoundingClientRect().y - 10 && `${touch.pageY}` <= element[0].getBoundingClientRect().bottom + 10
            && `${touch.pageX}` >= element[0].getBoundingClientRect().x  - 10 && `${touch.pageX}` <= element[0].getBoundingClientRect().right + 10) {
                value[0] = element[0];
                value[1] = element[0].id;
                element[1] = null;
                element[2] = null;
                element[3] = null;
            }
        });
    });
});

function countElements() {
    var count = 0;
    tab.forEach((element) => {
        if (element[1] != null) {
            count++;
        }
    });
    return count;
}

function checkVictory() {
    var victory = true;
    mauvaiseRéponse = 0;
    var count = countElements();
    if (count == 5) {
        text.style.visibility = 'visible';
        tab.forEach((element) => {
            if (element[0].id != element[1]) {
                victory = false;
                mauvaiseRéponse++;
            }
        });
        if (victory) {
            text.innerHTML = "<span>Bravo ! Vous avez résolu cette énigme. Nous pouvons maintenant passer à la suite du musée.</span><br><br><div><button onclick='putNatation()' id='start'>Suite</button></div>";
        } else {
            if (mauvaiseRéponse == 1) {
                text.innerHTML = "<span>Malheureusement, ce n'est pas la bonne solution. Tu as 1 erreur. Réessaye !</span>";
            } else {
                text.innerHTML = "<span>Malheureusement, ce n'est pas la bonne solution. Tu as "+ mauvaiseRéponse +" erreurs. Réessaye !</span>";
            }
        }
    } else {
        text.style.visibility = 'hidden';
    }
}

game.addEventListener('touchmove', e => {
    [...e.changedTouches].forEach(touch => {
        tab.forEach((tab) => {
            if (tab[0] == value[0]) {
                tab[2] = touch.pageY;
                tab[3] = touch.pageX;
            }
        });
    });
    drawline();
});

game.addEventListener('touchend', e => {
    var answer = false;
    [...e.changedTouches].forEach(touch => {
       Array.from(end).forEach(element => {
            if (`${touch.pageY}` >= element.getBoundingClientRect().y - 10 && `${touch.pageY}` <= element.getBoundingClientRect().bottom + 10
            && `${touch.pageX}` >= element.getBoundingClientRect().x - 10 && `${touch.pageX}` <= element.getBoundingClientRect().right + 10 && value[1] != null) {
                console.log(value[1], element.id);
                tab.forEach((tab) => {
                    if (tab[0] == value[0]) {
                        tab[1] = element.id;
                        tab[2] = element.getBoundingClientRect().y;
                        tab[3] = (element.getBoundingClientRect().x + element.getBoundingClientRect().right) / 2;
                    }
                });
                answer = true;
            } else if (answer == false) {
                tab.forEach((tab) => {
                    if (tab[0] == value[0]) {
                        tab[2] = null;
                        tab[3] = null;
                    }
                });
            }
        });
    });
    console.log(tab);
    drawline();
    checkVictory();
    value = [ , ];
});

function putNatation() {
    document.getElementById("game-container").innerHTML = `
    <style>
    .myProgress {
        width: 95vw;
        margin: auto;
        background-color: #ddd;
        border: 1px solid black;
      }

      #myBar {
        width: 0%;
        height: 30px;
        background-color: DodgerBlue;
        text-align: center;
        line-height: 30px;
        color: black;
      }
    </style>
    <p>
        Malheureusement cette partie du musée est innondée, vous devrez faire des mouvements de natation pendant au moins 30 secondes.
        <br><br>
        <img src="img/crawl.gif" alt="natation" id="natation" style="height: 10vh">
    </p>
    <br>
    <button onclick="move()" id="bgn-btn">Commencer l'épreuve</button>
    <br><br>
    <div id="game" class="myProgress">
        <div id="myBar">30s</div>
    </div>
    <br><br>
    <div id="timer">
    `;

    var NewScrip = document.createElement('script');
    NewScrip.src = 'js/natation.js';
    var OldScript = document.getElementsByTagName('script')[0];
    OldScript.parentNode.replaceChild(NewScrip, OldScript);
}