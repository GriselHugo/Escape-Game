let cards = document.querySelectorAll('.card');

let startX = 0;
let cardsLeft = document.querySelectorAll('.card').length;
let error = 0;

function finishGame() {
    let game = document.getElementById('game');
    game.style.height = '50vh';
    if (error == 0) {
        game.innerHTML = `<p>Félicitations ! Tu as réussi à sauver toutes les œuvres et en plus sans erreurs !</p>`;
    } else if (error == 1) {
        game.innerHTML = `<p>Félicitations ! Tu as réussi à sauver toutes les œuvres mais tu as fait ${error} erreur.</p>`;
    } else {
        game.innerHTML = `<p>Bravo ! Tu as réussi à sauver toutes les œuvres ! Mais tu as ${error} erreurs.</p>`;
    }
    game.innerHTML += `<button onclick="putNextGame()">Continuer</button>`;
}

function checkCards() {
    if (cardsLeft == 0) {
        finishGame();
    }
}

cards.forEach(card => {
    card.addEventListener('touchstart', e => {
        e.preventDefault();
        [...e.changedTouches].forEach(touch => {
            startX = touch.pageX;
        });
    });

    card.addEventListener('touchmove', e => {
        e.preventDefault();
        [...e.changedTouches].forEach(touch => {
            let check = card.children[1];
            let cross = card.children[2];
            let moveX = touch.pageX;
            let diff = moveX - startX;
            let deg = diff / 10;
            let opacity = diff / 100;

            check.style.opacity = (opacity <= 0) ? 0 : opacity;
            cross.style.opacity = (opacity >= 0) ? 0 : Math.abs(opacity);
            card.style.transform = `translateX(${diff}px) rotate(${deg}deg)`;
        });
    });

    card.addEventListener('touchend', e => {
        e.preventDefault();
        [...e.changedTouches].forEach(touch => {
            let endX = touch.pageX;
            let diff = endX - startX;
            if (diff > 100) {
                card.style.display = "none";
                cardsLeft--;
                if (card.children[0].id == "yes") {
                    console.log("good");
                } else {
                    console.log("bad");
                    error++;
                    subtractTime();
                }
                checkCards();
            } else if (diff < -100) {
                card.style.display = "none";
                cardsLeft--;
                if (card.children[0].id == "no") {
                    console.log("good");
                } else {
                    console.log("bad");
                    error++;
                    subtractTime();
                }
                checkCards();
            } else {
                card.style.transform = `translateX(0)`;
                card.children[1].style.opacity = 0;
                card.children[2].style.opacity = 0;
            }
        });
    });
    console.log("done");
});

function putNextGame() {
    window.location.replace='../victoire.html'
}