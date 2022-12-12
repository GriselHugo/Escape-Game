var input = document.getElementById("input");
let result = document.getElementById("result");

function strUpper(str) {
    return str.toUpperCase();
}

function checkInput() {
    const inputUpper = strUpper(input.value);
    console.log(inputUpper);

    if (inputUpper === "JULES") {
        result.innerText = "Bravo ! Vous avez trouvé la bonne réponse !";
        input.value = "";
        document.getElementById("btn").setAttribute("onclick", "checkInput2()");
        document.getElementById("question").innerText = "La deuxième inscription se trouve juste sous la visière d'un deuxième véhicule, celui ayant appartenu à l'actuel maire de Nice.";
    } else {
        result.innerText = "Dommage, vous n'avez pas trouvé la bonne réponse !";
    }
}

function checkInput2() {
    const inputUpper = strUpper(input.value);
    console.log(inputUpper);

    if (inputUpper === "CHRISTIAN ESTROSI") {
        result.innerText = "Bravo ! Vous avez trouvé la bonne réponse !";
        input.value = "";
        document.getElementById("btn").setAttribute("onclick", "checkInput3()");
        document.getElementById("question").innerText = "Enfin la dernière inscription a été écrite par Stéphane Peyron et Chris Havet";
    } else {
        result.innerText = "Dommage, vous n'avez pas trouvé la bonne réponse !";
    }
}

function checkInput3() {
    const inputUpper = strUpper(input.value);
    console.log(inputUpper);

    if (inputUpper === "COURAGE" || inputUpper === "COURAGE !" || inputUpper === "COURAGE!") {
        result.innerText = "Bravo ! Vous avez trouvé la bonne réponse !";
        input.value = "";
        endQuiz();
    } else {
        result.innerText = "Dommage, vous n'avez pas trouvé la bonne réponse !";
    }
}

function endQuiz() {
    result.innerHTML = "Bravo ! Vous avez réussi le quiz ! Allez c'est bientot fini, il ne nous reste qu'une seule chose à faire.<br><button onclick='putSwipeCardGame()'>Suite</button>";
}

function putSwipeCardGame() {
    document.getElementById("game-container").innerHTML =
    `<style>
        #game {
            display: grid;
            place-items: center;
            overflow: hidden;
        }

        #card {
            position: absolute;
            top: 45vh;
            height: 50vh;
            aspect-ratio: 2/3;
            text-align: left;
            border-radius: 10px;
            overflow: hidden;
        }

        p {
            width: 90%;
            margin: auto;
            font-size: 2vh
        }
    </style>
    <p style="height: 25vh; margin-top: 2vh;">
        Il nous reste encore une liste de quelques œuvres à sauver. Mais certaines de cette liste ne sont pas exposées ici et malheureusement
         nous ne savons plus lesquelles. Peux-tu vérifier celles qui sont encore là et nous indiquer celles qui ne sont plus présentes ?
         <br>(Glisse à droite si l'oeuvre est là et à gauche si elle n'est pas ici)
    </p>
    <div id="game">
        <div id="card" class="card 1" style="z-index: 10;">
            <span id="yes" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/true.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 2" style="z-index: 9;">
            <span id="yes" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/true.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 3" style="z-index: 8;">
            <span id="no" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/false.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 4" style="z-index: 7;">
            <span id="yes" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/true.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 5" style="z-index: 6;">
            <span id="no" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/false.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 6" style="z-index: 5;">
            <span id="no" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/false.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 7" style="z-index: 4;">
            <span id="yes" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/true.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 8" style="z-index: 3;">
            <span id="no" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/false.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 9" style="z-index: 2;">
            <span id="yes" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/true.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
        <div id="card" class="card 10" style="z-index: 1;">
            <span id="no" style="position:absolute; width: 100%; height: 100%;">
                <img src="img/false.png" alt="yes" style="width: 100%; height: 100%;">
            </span>
            <span id="check"  style="position:absolute; background-color: green; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="checkmark-outline" style="font-size: 25vw"></ion-icon>
            </span>
            <span id="cross"  style="position:absolute; background-color: red; width: 100%; height: 100%; opacity: 0; display:grid; place-items: center;">
                <ion-icon name="close-outline" style="font-size: 25vw"></ion-icon>
            </span>
        </div>
    </div>`;

    var NewScrip = document.createElement('script');
    NewScrip.src = 'js/swipe.js';
    var OldScript = document.getElementsByTagName('script')[0];
    OldScript.parentNode.replaceChild(NewScrip, OldScript);
}