var allAnswered = true;
var falseResponse = 0;

function checkQuestion(question, goodAnswer) {
    var getQuestion = document.querySelector('input[name="'+question+'"]:checked');
    if(getQuestion != null) {
        if (getQuestion.value != goodAnswer) {
            document.getElementById(question).style.color = 'red';
            falseResponse++;
        } else {
            document.getElementById(question).style.color = 'white';
        }
    } else {
        allAnswered = false;
    }
}

function checkButton() {
    allAnswered = true;
    falseResponse = 0;

    checkQuestion('question1', 'France');
    checkQuestion('question2', '10');
    checkQuestion('question3', 'Bixente Lizarazu');

    if (allAnswered == false) {
        document.getElementById("disp").innerHTML = "Veuiilez répondre à toutes les questions";
    } else {
        if (falseResponse > 0) {
            document.getElementById("disp").innerHTML = falseResponse == 1 ? `Tu as ${falseResponse} réponse fausse.` : `Tu as ${falseResponse} réponses fausses.`;
        } else {
            document.getElementById("disp").innerHTML = "Bravo ! Tu as réussi !";
        }
    }
};