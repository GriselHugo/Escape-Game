function putJO() {
    document.getElementById("game-container").innerHTML = `
    <style>
    .game {
        box-sizing: content-box;
        width: 90vw;
        height: 400px;
        background-color: white;
        border : 1.5vw darkorange ridge;
        margin: auto;
        margin-top: 1vh;
    }

    .left-bar {
        height: 100%;
        width: 30%;
        float: left;
    }

    .medal {
        height: 20%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .right-bar {
        height: 100%;
        width: 30%;
        float: right;
    }

    .torch {
        height: calc((1/3) * 100%);
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .image {
        width: 80%;
        height: 100%;
    }

    .medal-img {
        height: 100%;
        outline: 1px solid black;
    }

    .torch-img {
        width: 100%;
        max-height: calc(200px * (2 / 3));
        max-width: 200px;
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        outline: 1px solid black;
    }

    .dot-place {
        width: 20%;
        height: 100%;
    }

    .dot {
        background-color: black;
        min-width: 10px;
        min-height: 10px;
        width: 75%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 101;
    }

    .line {
        background-color: black;
        position: absolute;
        z-index: 100;
    }
    </style>

    <p>Il faut que nous regroupions ensemble les torches et les médailles olympiques sans les mélanger. Peux tu relier les médailles avec les torches correspondant aux mêmes Jeux Olympiques ?</p>
        <div id="game" class="game">
            <div id="left-bar" class="left-bar">
                <div class="medal">
                    <div class="image">
                        <img class="medal-img" src="img/m1.png">
                    </div>
                    <div class="dot-place">
                        <div id="1" class="dot"></div>
                    </div>
                </div>
                <div class="medal">
                    <div class="image">
                        <img class="medal-img" src="img/m2.png">
                    </div>
                    <div class="dot-place">
                        <div id="2" class="dot"></div>
                    </div>
                </div>
                <div class="medal">
                    <div class="image">
                        <img class="medal-img" src="img/m2.png">
                    </div>
                    <div class="dot-place">
                        <div id="2" class="dot"></div>
                    </div>
                </div>
                <div class="medal">
                    <div class="image">
                        <img class="medal-img" src="img/m3.png">
                    </div>
                    <div class="dot-place">
                        <div id="3" class="dot"></div>
                    </div>
                </div>
                <div class="medal">
                    <div class="image">
                        <img class="medal-img" src="img/m1.png">
                    </div>
                    <div class="dot-place">
                        <div id="1" class="dot"></div>
                    </div>
                </div>
            </div>
            <div id="right-bar" class="right-bar">
                <div class="torch">
                    <div class="dot-place">
                        <div id="1" class="dot"></div>
                    </div>
                    <div class="image">
                        <img class="torch-img" src="img/t1.png">
                    </div>
                </div>
                <div class="torch">
                    <div class="dot-place">
                        <div id="2" class="dot"></div>
                    </div>
                    <div class="image">
                        <img class="torch-img" src="img/t2.png">
                    </div>
                </div>
                <div class="torch">
                    <div class="dot-place">
                        <div id="3" class="dot"></div>
                    </div>
                    <div class="image">
                        <img class="torch-img" src="img/t3.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-line">
            <div class="line" id="line-1"></div>
            <div class="line" id="line-2"></div>
            <div class="line" id="line-3"></div>
            <div class="line" id="line-4"></div>
            <div class="line" id="line-5"></div>
        </div>
        <br>
        <div id="victory-text"></div>
    `;

    var NewScrip = document.createElement('script');
    NewScrip.src = 'js/jo.js';
    var OldScript = document.getElementsByTagName('script')[0];
    OldScript.parentNode.replaceChild(NewScrip, OldScript);
}
